# init.py

from flask import Blueprint, render_template, redirect, url_for, request, flash,Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import login_user,logout_user,login_required,LoginManager
from flask import Flask,request,make_response,redirect,render_template,jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash

# init SQLAlchemy so we can use it later in our models
app = Flask(__name__)
db = SQLAlchemy(app)
cors = CORS(app)

app.config['SECRET_KEY'] = '9OLWxND4o83j4K4iuopO'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'

#Definimos la base de datos
db.init_app(app)

login_manager = LoginManager()
login_manager.login_view = 'app.login'
login_manager.init_app(app)

from .models import *

@login_manager.user_loader
def load_user(user_id):
    # since the user_id is just the primary key of our user table, use it in the query for the user
    return User.query.get(int(user_id))



#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

'''
@auth.route('/login')
def login():
    return render_template('login.html')
'''


@app.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('password')
    #remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    # check if user actually exists
    # take the user supplied password, hash it, and compare it to the hashed password in database
    if not user or not check_password_hash(user.password, password):
        flash('Por favor verifique los datos')
        #return redirect(url_for('auth.login')) # if user doesn't exist or password is wrong, reload the page
        return "Revise los datos"

    # if the above check passes, then we know the user has the right credentials
    login_user(user)
    #return redirect(url_for('main.profile')) #SE DEBE CAMBIAR A UNA RUTA VALIDA
    response = {
        'usuario': user
    }

    #return jsonify(response)
    return "Inicio sesion con exito"

'''
@auth.route('/signup')
def signup():
    return render_template('signup.html')
'''

@app.route('/signup', methods=['POST'])
def signup_post():

    try:
        email = request.form.get('email')
        password = request.form.get('password')
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')
        telefono = request.form.get('telefono')
        pregunta = request.form.get('pregunta')
        respuesta = request.form.get('respuesta')

        user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

        if user: # if a user is found, we want to redirect back to signup page so user can try again
            flash('Email address already exists')
            #return redirect(url_for('app.signup'))
            return "Existe el usuario"

        new_user = User(email=email, nombre=nombre, password=generate_password_hash(password, method='sha256'), apellido=apellido, telefono=telefono, pregunta=pregunta, respuesta=respuesta)

        # add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        #return redirect(url_for('auth.login')) #HAY QUE DEFINIR UNA RUTA VALIDA
        print("Se agrego el usuario con exito")
        return "Se agrego el usuario con exito"


    except:
        email = request.form.get('email')
        password = request.form.get('password')
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')

        user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

        if user: # if a user is found, we want to redirect back to signup page so user can try again
            flash('Email address already exists')
            #return redirect(url_for('app.signup'))
            return "El correo del usuario ya existe"

        new_user = User(email=email, nombre=nombre, password=generate_password_hash(password, method='sha256'), apellido=apellido)

        # add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        #return redirect(url_for('auth.login')) #HAY QUE DEFINIR UNA RUTA VALIDA
        return "Se agrego el usuario con exito"

    else:
        return "Error en el sistema" #Se pone por el momento de esta manera

    # add the new user to the database
    db.session.add(new_user)
    db.session.commit()

    #return redirect(url_for('auth.login')) #HAY QUE DEFINIR UNA RUTA VALIDA
    return "Hubo un problema al agregar"

@app.route('/logout')
@login_required
def logout():
    logout_user()
    #return redirect(url_for('main.index'))
    return "Se cerro sesion"





#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








'''
# blueprint for auth routes in our app
from .auth import auth as auth_blueprint
app.register_blueprint(auth_blueprint)

# blueprint for non-auth parts of app
from .main import main as main_blueprint
app.register_blueprint(main_blueprint)
'''




@app.after_request
def after_request(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Credentials"] = "false"
    response.headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS, PUT, DELETE"
    response.headers["Access-Control-Allow-Headers"] = "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
    return response

if __name__=='__main__':
    app.run()
