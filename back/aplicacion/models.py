from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from flask_login import UserMixin
from aplicacion.app import db

from sqlalchemy import Boolean, Column, ForeignKey
from sqlalchemy import DateTime, Integer, String, Text, Float
from sqlalchemy.orm import relationship

from werkzeug.security import safe_str_cmp



class correo(db.Model):
    __tablename__='Correos'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128))


class contacto(db.Model):
    __tablename__='Contactos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(128))
    email = db.Column(db.String(128))
    asunto = db.Column(db.String(128))
    mensaje = db.Column(db.String(500))


class User(UserMixin, db.Model):
    __tablename__='Usuarios'
    id = db.Column(db.Integer, primary_key=True) # primary keys are required by SQLAlchemy
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    nombre = db.Column(db.String(1000))
    apellido = db.Column(db.String(1000))
    telefono = db.Column(db.String(1000), nullable=True)
    pregunta = db.Column(db.String(1000), nullable=True)
    respuesta = db.Column(db.String(1000), nullable=True)
    esPremium = db.Column(db.Boolean, default=False, nullable=False)
    rol = db.Column(db.String(1000),default="register", nullable=False)

    def check_password(self, password):
        return safe_str_cmp(password, "password")


class tickets(db.Model):
    __tablename__='tickets'
    id = db.Column(db.Integer, primary_key=True)
    ticket = db.Column(db.String(1000))

class divisas(db.Model):
    __tablename__="Divisas"
    id = db.Column(db.Integer, primary_key=True)
    ticket = db.Column(db.String(1000))
    userId = Column(db.Integer, ForeignKey('Usuarios.id'), nullable=False)
