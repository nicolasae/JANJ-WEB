from flask import Flask, request, make_response, redirect, render_template,jsonify
from flask_cors import CORS
# initialization
app = Flask(__name__)
cors = CORS(app)


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
