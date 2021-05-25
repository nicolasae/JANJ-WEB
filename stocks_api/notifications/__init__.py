from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from sqlalchemy import create_engine
from sqlalchemy_utils import database_exists, create_database
app = Flask(__name__)
app.config.from_object('stocks_api.notifications.default_config')
api = Api(app)
db = SQLAlchemy(app)


engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"], echo=True)
# Create database if it does not exist.
if not database_exists(engine.url):
    create_database(engine.url)