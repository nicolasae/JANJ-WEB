from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from flask_mail import Mail, Message
from credentials import Credentials
import requests
import json


TODOS = {
    'NYSE': {'ricardo@gmail.com': True},
    'NYT': {
        'j.castano@utp.edu.co': True,
        'castanogomezjuandiego@gmail.com': True,
        'jcastano@dataifx.com': True,
        },
    'NASDAQ': {
        'catad@outlook.es': True
        },
}

app = Flask(__name__)
api = Api(app)

def abort_if_todo_doesnt_exist(todo_id):
    if todo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(todo_id))

parser = reqparse.RequestParser()
parser.add_argument('stock-id')
parser.add_argument('email')

# TodoList
# shows a list of all todos, and lets you POST to add new tasks
class Subscription(Resource):
    def get(self):
        return TODOS

    def post(self):
        args = parser.parse_args()
        TODOS[args['stock-id']][args['email']] = True
        return TODOS[args['stock-id']], 201

# TodoList
# shows a list of all todos, and lets you POST to add new tasks
class Unsubscription(Resource):
    def get(self):
        return TODOS

    def post(self):
        args = parser.parse_args()
        TODOS[args['stock-id']][args['email']] = False
        return TODOS[args['stock-id']], 201

# TodoList
# shows a list of all todos, and lets you POST to add new tasks
class Notify(Resource):
    def get(self):
        for key, value in TODOS[].items(): 
        email_subscriptions = 
        return TODOS

    def post(self):
        args = parser.parse_args()
        response = {}
        email_subscriptions = TODOS[args['stock-id']]
        emails = list(email_subscriptions.keys())
        for key, value in email_subscriptions.items(): 
            if value:
                response[key] = value
        payload = json.dumps(response)
        print(payload)
        print(requests.post('http://localhost:5001', data=payload))
        return response, 201

api.add_resource(Subscription, '/subscribe')
api.add_resource(Unsubscription, '/unsubscribe')
api.add_resource(Notify, '/notify')


if __name__ == '__main__':
    app.run(debug=True)