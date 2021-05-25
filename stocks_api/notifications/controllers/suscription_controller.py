from stocks_api.notifications.managers.suscription_manager import SuscriptionManager

class SusciptionController():
    @staticmethod
    def get_all_subscriptions():
        suscriptions = SuscriptionManager.get_subscriptions({})
        return suscriptions

    @staticmethod
    def get_all_stocks_ids():
        suscriptions = SuscriptionManager.get_stocks_ids({})
        return suscriptions
        
    @staticmethod  
    def get_subscriptions_by_stock_id(stocks_ids):
        suscriptions = SuscriptionManager.get_subscriptions({"stock_id" : stocks_ids})
        return suscriptions
    
    @staticmethod  
    def get_subscriptions_by_user(user_email):
        suscriptions = SuscriptionManager.get_subscriptions({"email" : user_email})
        return suscriptions   
    
    @staticmethod
    def create_suscription(email, stock_id):
        data = {
            "email": email,
            "stock_id": stock_id,
            "is_suscription_active": True
        }
        created_suscription = SuscriptionManager().create_suscription(data)
        return created_suscription

    @staticmethod
    def delete_suscription(email, stock_id):
        data = {
            "email": email,
            "stock_id": stock_id,
            "is_suscription_active": True
        }
        deleted_suscription = SuscriptionManager().delete_suscription(data)
        return deleted_suscription
        