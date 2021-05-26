from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from stocks_api.notifications.models import SubscriptionModel

class SubscriptionSchema(ModelSchema):
    """
        Serialize the Subscription Model
    """
    class meta:
        model  = SubscriptionModel
    
    id_value = fields.Method("get_id_value",dump_only=True)
    email = fields.Method("get_email",dump_only=True)
    stock_id = fields.Method("get_stock_id",dump_only=True)
    is_suscription_active = fields.Method("get_is_suscription_active",dump_only=True)

    def get_id_value(self, subscription):
        return subscription.id
    
    def get_email(self, subscription):
        return subscription.email
    
    def get_stock_id(self, subscription):
        return subscription.stock_id
    
    def get_is_suscription_active(self, subscription):
        return subscription.is_suscription_active