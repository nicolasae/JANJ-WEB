from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from aplicacion import config
from werkzeug.security import generate_password_hash, check_password_hash,safe_str_cmp
from flask import Flask,request,make_response,redirect,jsonify

from flask_jwt_extended import create_access_token,current_user,jwt_required,JWTManager



app = Flask(__name__)
app.config.from_object(config)
Bootstrap(app)
db = SQLAlchemy(app)

app.config["JWT_SECRET_KEY"] = "A0Zr98j/3yX R~XLH!tmN]LWk/,?RT"

jwt = JWTManager(app)

@jwt.user_identity_loader
def user_identity_lookup(user):
    return user.id

@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    from aplicacion.models import User
    identity = jwt_data["sub"]
    return User.query.filter_by(id=identity).one_or_none()


@app.route("/login", methods=["POST"])
def login():
    from aplicacion.models import User
    usuario = request.get_json()
    email = usuario.get('email')
    password = usuario.get('password')

    passwordFinal=generate_password_hash(password, method='sha256')

    user = User.query.filter_by(email=email).one_or_none()
    print(user.email)
    print(user.password)
    print(passwordFinal)
    if not user or not check_password_hash(user.password,password):
        return jsonify("Unauthorized"), 401

    # Notice that we are passing in the actual sqlalchemy user object here
    access_token = create_access_token(identity=user)
    return jsonify(access_token=access_token)

@app.route("/who_am_i", methods=["GET"])
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



@app.route('/')
def inicio():
    from aplicacion.models import User
    #articulos = Articulos.query.all()
    #return render_template("inicio.html", articulos=articulos)
    return "Pagina de inicio"

@app.route('/consultar')
def consultar():
    from aplicacion.models import User


@app.route('/signup', methods=['POST'])
def signup_post():
    from aplicacion.models import User
    try:
        usuario = request.get_json()
        '''
        email = request.args.get('email')
        password = request.args.get('password')
        nombre = request.args.get('nombre')
        apellido = request.args.get('apellido')
        telefono = request.args.get('telefono')
        pregunta = request.args.get('pregunta')
        respuesta = request.args.get('respuesta')
        '''

        email = usuario.get('email')
        password = usuario.get('password')
        nombre = usuario.get('nombre')
        apellido = usuario.get('apellido')
        telefono = usuario.get('telefono')
        pregunta = usuario.get('pregunta')
        respuesta = usuario.get('respuesta')

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
        usuario = request.get_json()

        email = request.form.get('email')
        password = request.form.get('password')
        nombre = request.form.get('nombre')
        apellido = request.form.get('apellido')

        user = User.query.filter_by(email=email).first() # if this returns a user, then the email already exists in database

        if user: # if a user is found, we want to redirect back to signup page so user can try again
            #flash('Email address already exists')
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
    #db.session.add(new_user)
    #db.session.commit()

    #return redirect(url_for('auth.login')) #HAY QUE DEFINIR UNA RUTA VALIDA
    return "Hubo un problema al agregar"
