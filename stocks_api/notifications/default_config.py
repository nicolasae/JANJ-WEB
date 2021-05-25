import os

SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URI") or "mysql://root:example@localhost:3307/notifications"
