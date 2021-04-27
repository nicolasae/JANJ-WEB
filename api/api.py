from flask import Flask, request, make_response, redirect, render_template,jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
# initialization
app = Flask(__name__)
cors = CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'

db = SQLAlchemy(app)
migrate = Migrate(app, db)

class correo(db.Model):
    __tablename__='Correos'
    id = db.Column(db.Integer, primary_key=True)
    correo = db.Column(db.String(128))


class contacto(db.Model):
    __tablename__='Contactos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(128))
    correo = db.Column(db.String(128))
    asunto = db.Column(db.String(128))
    mensaje = db.Column(db.String(500))




@app.route('/correos', methods=['POST'])
def add_correo():
    correoLlegada = request.json["correo"]
    persona = correo(correo=correoLlegada)

    db.session.add(persona)
    db.session.commit()

    return "que buena tula"

@app.route('/contacto', methods=['POST'])
def add_contacto():
    nombreLlegada = request.json["nombre"]
    correoLlegada = request.json["correo"]
    asuntoLlegada = request.json["asunto"]
    mensajeLlegada =request.json["mensaje"]

    contactoEntrada = contacto(nombre=nombreLlegada,correo=correoLlegada,asunto=asuntoLlegada,mensaje=mensajeLlegada)

    db.session.add(contactoEntrada)
    db.session.commit()

    return "Se logro agregar contacto"







@app.route("/prueba", methods=['GET'])
def prueba():
    response= jsonify({'some': 'data'})
    return response

@app.after_request
def after_request(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "false"
    response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
    response.headers["Access-Control-Allow-Headers"] = "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
    return response

if __name__=='__main__':
    app.run()
