# import app from email_api
class Credentials:
    def __init__(self):
        # self.EMAIL_USER = app.config['EMAIL_USER']
        self.EMAIL_USER = "web.janj@gmail.com"
        # self.EMAIL_PASSWORD = app.config['EMAIL_PASSWORD']
        self.EMAIL_PASSWORD = "Ingesoft4@"

    def get_user(self):
        return self.EMAIL_USER

    def get_password(self):
        return self.EMAIL_PASSWORD