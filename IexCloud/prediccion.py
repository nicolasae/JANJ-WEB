import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pandas_datareader as web
import datetime as dt

from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense,Dropout,LSTM

#Load data
company = 'FB'

start = dt.datetime(2012,1,1)
end = dt.datetime(2020,1,1)

data = web.DataReader(company,'yahoo',start,end) #el yahoo es para usar la api de yahoo
print(data)

#Prepare data
scaler = MinMaxScaler(feature_range=(0,1))
scaled_data = scaler.fit_transform(data['Close'].values.reshape(-1,1))

prediction_days = 60 #Number of days we want to analize

x_train = []
y_train = []

for x in range(prediction_days,len(scaled_data)):
    x_train.append(scaled_data[x-prediction_days:x,0])
    y_train.append(scaled_data[x,0])

x_train, y_train = np.array(x_train), np.array(y_train)

x_train = np.reshape(x_train, (x_train.shape[0], x_train.shape[1], 1))


#Building the model
model = Sequential()

model.add(LSTM(units=50, return_sequences=True, input_shape=(x_train.shape[1], 1)))
model.add(Dropout(0.2))
model.add(LSTM(units=50, return_sequences=True))
model.add(Dropout(0.2))
model.add(LSTM(units=50, return_sequences=True))
model.add(Dropout(0.2))
model.add(Dense(units=1)) #Prediction of the next closing value

model.compile(optimizer='adam', loss='mean_squared_error')
model.fit(x_train,y_train, epochs=10, batch_size=32) #epochs significa que ve cada dato 25 veces

#INVESTIAR COMO model.save y model.load


#Test the model accuracy on existing data

#Load test data
test_start = dt.datetime(2020,1,1)
test_end = dt.datetime.now()

test_data = web.DataReader(company,'yahoo',test_start,test_end)
actual_prices = test_data['Close'].values

total_dataset = pd.concat((data['Close'], test_data['Close']), axis = 0)

model_inputs = total_dataset[len(total_dataset) - len(test_data) - prediction_days:].values
model_inputs = model_inputs.reshape(-1,1)
model_inputs = scaler.transform(model_inputs)

#Make predictions on test data

x_test = []

for x in range(prediction_days, len(model_inputs)):
    x_test.append(model_inputs[x-prediction_days:x,0])

x_test = np.array(x_test)
x_test = np.reshape(x_test,(x_test.shape[0], x_test.shape[1], 1))

predicted_prices = model.predict(x_test)
predicted_prices = scaler.inverse_transform(predicted_prices)

#Plot the test prediction
plt.plot(actual_prices, color="black", label=f"Actual {company} price")
plt.plot(predicted_prices, color="green", label=f"Predicted {company} price")
plt.title(f"{company} share price")
plt.xlabel('Time')
plt.ylabel(f"{company} share price")
plt.legend()
plt.show



























@app.route("/prediccion", method=["POST"])
def prediccion():
    import numpy as np
    np.random.seed(4)
    import matplotlib.pyplot as plt
    import pandas as pd
    import pandas_datareader as web
    import datetime as dt

    from sklearn.preprocessing import MinMaxScaler
    from keras.models import Sequential
    from keras.layers import Dense, LSTM
    import requests


    datos = request.get_json()
    ticket = datos.get('ticket')

    start = dt.datetime(2012,1,1)
    end = dt.datetime(2020,12,31)

    dataset = web.DataReader(company,'yahoo',start,end) #el yahoo es para usar la api de yahoo

    set_entrenamiento = dataset[:'2019'].iloc[:,1:2]
    set_validacion = dataset['2020':].iloc[:,1:2]

    # Normalización del set de entrenamiento
    sc = MinMaxScaler(feature_range=(0,1))
    set_entrenamiento_escalado = sc.fit_transform(set_entrenamiento)

    # La red LSTM tendrá como entrada "time_step" datos consecutivos, y como salida 1 dato (la predicción a
    # partir de esos "time_step" datos). Se conformará de esta forma el set de entrenamiento
    time_step = 90
    X_train = []
    Y_train = []
    m = len(set_entrenamiento_escalado)

    for i in range(time_step,m):
        # X: bloques de "time_step" datos: 0-time_step, 1-time_step+1, 2-time_step+2, etc
        X_train.append(set_entrenamiento_escalado[i-time_step:i,0])

        # Y: el siguiente dato
        Y_train.append(set_entrenamiento_escalado[i,0])
    X_train, Y_train = np.array(X_train), np.array(Y_train)

    # Reshape X_train para que se ajuste al modelo en Keras
    X_train = np.reshape(X_train, (X_train.shape[0], X_train.shape[1], 1))

    #
    # Red LSTM
    #
    dim_entrada = (X_train.shape[1],1)
    dim_salida = 1
    na = 50

    modelo = Sequential()
    modelo.add(LSTM(units=na, input_shape=dim_entrada))
    modelo.add(Dense(units=dim_salida))
    modelo.compile(optimizer='rmsprop', loss='mse')
    modelo.fit(X_train,Y_train,epochs=10,batch_size=32)


    #
    # Validación (predicción del valor de las acciones)
    #
    x_test = set_validacion.values
    x_test = sc.transform(x_test)

    X_test = []
    for i in range(time_step,len(x_test)):
        X_test.append(x_test[i-time_step:i,0])
    X_test = np.array(X_test)
    X_test = np.reshape(X_test, (X_test.shape[0],X_test.shape[1],1))

    prediccion = modelo.predict(X_test)
    prediccion = sc.inverse_transform(prediccion)

    return jsonify(prediccion)
