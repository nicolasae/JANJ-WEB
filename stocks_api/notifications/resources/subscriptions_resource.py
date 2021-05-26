from flask_restful import Resource, reqparse
from flask import jsonify
from stocks_api.notifications.controllers.suscription_controller import SusciptionController

parser = reqparse.RequestParser()
parser.add_argument('stock-id')
parser.add_argument('email')

class Subscription(Resource):
    def get(self):
        subscriptions = SusciptionController.get_all_subscriptions()
        response = {"status" : 200,"data" : subscriptions}
        return jsonify(response) 

    def post(self):
        args = parser.parse_args()
        created_suscription = SusciptionController.create_suscription(args['email'], args['stock-id'])
        response = {"status" : 200,"data" : created_suscription}
        return jsonify(response) 
    
    def delete(self):
        args = parser.parse_args()
        deleted_suscription = SusciptionController.delete_suscription(args['email'], args['stock-id'])
        response = {"status" : 200,"data" : deleted_suscription}
        return jsonify(response) 
     
class UserSubscription(Resource):
    def get(self,user_email):
        subscriptions = SusciptionController.get_subscriptions_by_user(user_email)
        response = {"status" : 200,"data" : subscriptions}
        return jsonify(response) 

class SubscriptionIds(Resource):
    def get(self):
        subscriptions = SusciptionController.get_all_stocks_ids()
        response = {"status" : 200,"data" : subscriptions}
        return jsonify(response) 