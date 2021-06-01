from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy

from stocks_api.notifications.credentials import Credentials
from stocks_api.notifications.resources.subscriptions_resource import Subscription,UserSubscription, SubscriptionIds
from stocks_api.notifications.resources.notifications_resource import Notifications
from stocks_api.notifications import app, api,db

import requests
import json
import os


db.create_all()

parser = reqparse.RequestParser()
parser.add_argument('stock-id')
parser.add_argument('email')

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
        # for key, value in TODOS[].items(): 
        # email_subscriptions = 
        return TODOS

    def post(self):
        args = parser.parse_args()
        response = {}
        email_subscriptions = args['stock-id']

        # email_subscriptions = TODOS[args['stock-id']]
        # email_subscriptions = json.loads(email_subscriptions)
        emails = list(email_subscriptions.keys())
        for key, value in email_subscriptions.items(): 
            if value:
                response[key] = value
        payload = json.dumps(response)
        print(payload)
        print(requests.post('http://email_api:5001', data=payload))
        # print(requests.post('http://localhost:5001', data=payload))
        return response, 201

api.add_resource(Subscription, '/subscribe/subscribe')
api.add_resource(UserSubscription, '/subscribe/user_subscriptions/<string:user_email>')
api.add_resource(SubscriptionIds, '/subscribe/stocks_ids')
api.add_resource(Unsubscription, '/subscribe/unsubscribe')
api.add_resource(Notify, '/subscribe/notify')


if __name__ == '__main__':
    app.run(debug=True)