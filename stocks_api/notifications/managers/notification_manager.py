from stocks_api.notifications.models import SubscriptionModel
from stocks_api.notifications import db
from stocks_api.notifications.schemas import SubscriptionSchema

def create_autocommit_session(database):
    return database.create_scoped_session({"autocommit": True})
     
class NotificationManager():
    def __init__(self, db_session=None):
        if not db_session:
            self.__db_session = db.session
        else:
            self.__db_session = db_session
            
    
    def create_suscription(self, suscription_dict):
        new_suscription = SubscriptionModel(**suscription_dict)
        db.session.add(new_suscription)
        db.session.commit()
        return SuscriptionManager.serialize(new_suscription)

    def delete_suscription(self, suscription_dict):
        deleted_suscription = SubscriptionModel(**suscription_dict)
        db.session.delete(deleted_suscription)
        db.session.commit()
        return SuscriptionManager.serialize(deleted_suscription)
    
    @staticmethod
    def get_subscriptions(filter_values):
        """
            Method to return all the subscriptions
        """
        try:
            session = create_autocommit_session(db)
            with session.begin():
                subscriptions = session.query(SubscriptionModel).filter_by(**filter_values).all()
                if subscriptions and len(subscriptions) > 0:
                    return SuscriptionManager.serialize(subscriptions, many=True)
            return []
        except Exception as e:
            raise e
        
    @staticmethod 
    def serialize(subscription,many=False):
        subscription_schema = SubscriptionSchema(many=many)
        
        return subscription_schema.dump(subscription)