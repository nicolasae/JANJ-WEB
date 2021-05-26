from stocks_api.notifications import db
from sqlalchemy import Sequence

class SubscriptionModel(db.Model):
    __tablename__ = 'suscription'
    id = db.Column(db.Integer, Sequence("suscription_seq"), primary_key=True)
    # email = db.Column(db.String(50), unique=True, index=True, nullable=False)
    email = db.Column(db.String(50), nullable=False)
    stock_id = db.Column(db.String(100))
    is_suscription_active = db.Column(db.Boolean())