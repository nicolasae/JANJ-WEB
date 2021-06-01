from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from aplicacion import config
from werkzeug.security import generate_password_hash, check_password_hash,safe_str_cmp
from flask import Flask,request,make_response,redirect,jsonify

from flask_jwt_extended import create_access_token,current_user,jwt_required,JWTManager
import os
import pandas as pd
import csv
import random
import requests

app = Flask(__name__)
app.config.from_object(config)
Bootstrap(app)
db = SQLAlchemy(app)

app.config["JWT_SECRET_KEY"] = "A0Zr98j/3yX R~XLH!tmN]LWk/,?RT"

UPLOAD_FOLDER = 'static/files'
app.config['UPLOAD_FOLDER'] =  UPLOAD_FOLDER


jwt = JWTManager(app)

@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    from aplicacion.models import User
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()

@app.route("/back/")
def inicial():
    return jsonify("pagina inicial")


@app.route("/back/login", methods=["POST"])
def login():
    from aplicacion.models import User
    usuario = request.get_json()
    email = usuario.get('email')
    password = usuario.get('password')

    user = User.query.filter_by(email=email).one_or_none()
    print(user)
    if not user or not check_password_hash(user.password,password):
        return jsonify("Unauthorized"), 401

    # Notice that we are passing in the actual sqlalchemy user object here
    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token,id_usuario=user.id,email=user.email,nombre=user.nombre,apellido=user.apellido,rol=user.rol)



@app.route("/back/who_am_i", methods=["GET"])
@jwt_required()
def protected():
    from aplicacion.models import User
    # We can now access our sqlalchemy User object via `current_user`.
    print("Se entro")
    return jsonify(
        id=current_user.id,
        nombre=current_user.nombre,
        email=current_user.email,
    )


@app.route('/back/forgot_password_respuesta', methods=["POST"])
def forgot_password_respuesta():
    from aplicacion.models import User
    usuario = request.get_json()

    email = usuario.get("email")
    respuesta = usuario.get("respuesta")
    new_password = usuario.get("new_password")

    user = User.query.filter_by(email=email).one_or_none()

    if not user or not (respuesta == user.respuesta):
        return jsonify("El email o la respuesta dada no coinciden, intentelo de nuevo"),401

    user.password = generate_password_hash(new_password, method='sha256')

    db.session.add(user)
    db.session.commit()

    return jsonify('Se cambio la contraseña con exito')



@app.route('/back/forgot_password_pregunta', methods=["POST"])
def forgot_password_pregunta():
    from aplicacion.models import User
    usuario = request.get_json()

    email = usuario.get('email')

    user = User.query.filter_by(email=email).one_or_none()

    if user:
        return jsonify(pregunta=user.pregunta)

    #articulos = Articulos.query.all()
    #return render_template("inicio.html", articulos=articulos)
    return jsonify("El usuario con ese correo no existe"),401



@app.route('/back/contactenos', methods=["POST"])
def contactenos():
    from aplicacion.models import contacto
    datos = request.get_json()

    nombre = datos.get("nombre")
    email = datos.get("email")
    asunto = datos.get("asunto")
    mensaje = datos.get("mensaje")

    if email is None:
        return jsonify("No ingreso un correo al cual dar respuesta"),401

    mensaje = contacto(nombre=nombre, email=email, asunto=asunto, mensaje=mensaje)
    db.session.add(mensaje)
    db.session.commit()

    return jsonify("Mensaje enviado con exito")

@app.route('/back/listar_contactenos')
def listar_contactenos():
    from aplicacion.models import contacto

    consulta = contacto.query.all()
    contactos = []

    for dato in consulta:
        temporal = []
        temporal.append(dato.nombre)
        temporal.append(dato.email)
        temporal.append(dato.asunto)
        temporal.append(dato.mensaje)
        contactos.append(temporal)

    return jsonify(contactos)


@app.route('/back/listar_usuarios')
def listar_usuarios():
    from aplicacion.models import User

    consulta = User.query.all()
    usuarios = []

    for usuario in consulta:
        temporal = []
        temporal.append(usuario.nombre)
        temporal.append(usuario.apellido)
        temporal.append(usuario.email)
        temporal.append(usuario.telefono)
        temporal.append(usuario.pregunta)
        temporal.append(usuario.respuesta)
        usuarios.append(temporal)

    return jsonify(usuarios)

@app.route('/back/listar_tickets') ##REFERENCIA PARA ACOMODAR LOS JSON DE LAS ACCIONES
def listar_tickets():
    from aplicacion.models import tickets

    consulta = tickets.query.all()
    resultados = []

    for dato in consulta:
        temporal = {"ticket":dato.ticket}
        resultados.append(temporal)

    return jsonify(resultados)


@app.route('/back/consulta_historial', methods=['POST'])
def consulta_historial():
    IEX_CLOUD_API_TOKEN = 'Tpk_059b97af715d417d9f49f50b51b1c448'
    informacion = request.get_json()
    ticket = informacion.get('ticket')
    periodo = informacion.get('periodo')
    historico = []

    if periodo == None:
        periodo = "1m"

    api_url = f'https://sandbox.iexapis.com/stable/stock/{ticket}/chart/{periodo}?token={IEX_CLOUD_API_TOKEN}'
    data = requests.get(api_url).json()
    for row in data:
        #temporal = {row['date']:row['open']}
        temporal = {"fecha":row['date'],"value":row['open']}
        historico.append(temporal)

    return jsonify(historico)




@app.route('/back/aleatorio_ticket')
def aleatorio_ticket():
    from aplicacion.models import tickets

    consulta = tickets.query.all()

    rand = random.randrange(0,len(consulta)-1)

    try:
        accion = consulta[rand].ticket
        return jsonify(ticket=accion)
    except:
        return jsonify("Hubo un error en el sistetma")





@app.route('/back/datos_usuario', methods=["POST"])
def datos_usuario():
    from aplicacion.models import User

    usuario = request.get_json()
    email = usuario.get("email")

    usuario = User.query.filter_by(email=email).first()
    return jsonify(email=usuario.email, nombre=usuario.nombre, pregunta=usuario.pregunta, respuesta=usuario.respuesta)

@app.route('/back/agregar_tickets')
def agregar_tickets():
    from aplicacion.models import tickets
    import pandas as pd
    #THIS_FOLDER = os.path.dirname(os.path.abspath('sp_500_stocks.csv'))
    #filename_path = os.path.join(THIS_FOLDER,'sp_500_stocks.csv')
    #print(filename_path)
    #stocks = pd.read_csv(filename_path)

    stocks = pd.read_csv('/home/alejo/Escritorio/JANJ-WEB/back/aplicacion/sp_500_stocks.csv')

    try:
        for stock in stocks['Ticker']:
            new_ticket = tickets(ticket=stock)
            db.session.add(new_ticket)
            db.session.commit()

        return jsonify("Se agregaron los tickets con exito")

    except:
        return jsonify("Hubo un error al agregar"),501

    return jsonify("Algo sucedio en el proceso"),501



@app.route('/back/signup', methods=['POST'])
def signup_post():
    from aplicacion.models import User
    try:
        usuario = request.get_json()

        email = usuario.get('email')
        password = usuario.get('password')
        nombre = usuario.get('nombre')
        apellido = usuario.get('apellido')
        telefono = usuario.get('telefono')
        pregunta = usuario.get('pregunta')
        respuesta = usuario.get('respuesta')

        user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

        if user: # if a user is found, we want to redirect back to signup page so user can try again
            return jsonify("Existe el usuario"),401

        new_user = User(email=email, nombre=nombre, password=generate_password_hash(password, method='sha256'), apellido=apellido, telefono=telefono, pregunta=pregunta, respuesta=respuesta)

        # add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        return jsonify("Se agrego el usuario con exito")


    except:
        usuario = request.get_json()

        email = request.form.get('email')
        password = request.form.get('password')
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')

        user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

        if user: # if a user is found, we want to redirect back to signup page so user can try again
            #flash('Email address already exists')
            #return redirect(url_for('app.signup'))
            return jsonify("El correo del usuario ya existe"),401

        new_user = User(email=email, nombre=nombre, password=generate_password_hash(password, method='sha256'), apellido=apellido)

        # add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        return jsonify("Se agrego el usuario con exito")

    else:
        return jsonify("No se mandaron los datos correctos"),401

    return jsonify("Hubo un problema al agregar"),401

@app.after_request
def after_request(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "false"
    response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
    response.headers["Access-Control-Allow-Headers"] = "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
    return response
