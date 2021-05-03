from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required
from .models import User
from . import db

#auth = Blueprint('auth', __name__, url_prefix='/auth')
auth = Blueprint('auth', __name__, url_prefix="/auth")

'''
@auth.route('/login')
def login():
    return render_template('login.html')
'''


@auth.route('/login', methods=['POST'])
def login_post():
    email = request.form.get('email')
    password = request.form.get('password')
    #remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    # check if user actually exists
    # take the user supplied password, hash it, and compare it to the hashed password in database
    if not user or not check_password_hash(user.password, password):
        flash('Por favor verifique los datos')
        return redirect(url_for('auth.login')) # if user doesn't exist or password is wrong, reload the page

    # if the above check passes, then we know the user has the right credentials
    login_user(user)
    #return redirect(url_for('main.profile')) #SE DEBE CAMBIAR A UNA RUTA VALIDA
    response = {
        'usuario': user
    }

    return jsonify(response)

'''
@auth.route('/signup')
def signup():
    return render_template('signup.html')
'''

@auth.route('/signup', methods=['POST'])
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
            return redirect(url_for('auth.signup'))

        new_user = User(email=email, nombre=nombre, password=generate_password_hash(password, method='sha256'), apellido=apellido, telefono=telefono, pregunta=pregunta, respuesta=respuesta)

        # add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        #return redirect(url_for('auth.login')) #HAY QUE DEFINIR UNA RUTA VALIDA
        return "Se agrego el usuario con exito"


    except:
        email = request.form.get('email')
        password = request.form.get('password')
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')

        user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

        if user: # if a user is found, we want to redirect back to signup page so user can try again
            flash('Email address already exists')
            return redirect(url_for('auth.signup'))

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

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    #return redirect(url_for('main.index'))
    return "Se cerro sesion"
