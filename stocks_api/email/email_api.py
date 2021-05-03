from flask import Flask
from flask_mail import Mail, Message
from credentials import Credentials
from flask import render_template
from flask import request
import os
import json

template = ''' <!DOCTYPE html>
                <html>
                <body>

                <h1>Su acción en JANJ-WEB tiene buenas predicciones</h1>
                <p>El sistema automaticamente le informa que la acción ECOPETROL</p>

                </body>
                </html> '''

app = Flask(__name__)
credentials = Credentials()

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": credentials.get_user(),
    "MAIL_PASSWORD": credentials.get_password()
}
app.config.from_object('default_config')
app.config.update(mail_settings)
mail = Mail(app)

@app.route("/", methods=['POST'])
def index():
    print(request.get_json(force=True))
    emails = list(request.get_json(force=True).keys())
    print(emails, type(emails))
    with app.app_context():
        msg = Message(subject="Hello",
                    sender=app.config.get("MAIL_USERNAME"),
                    recipients=emails, # use your email for testing
        )
        msg.html = template
        # print(render_template(template+'.txt', **kwargs))
        # msg.html = render_template(template+'.html', **kwargs)
        mail.send(msg)
        return "Hello"

if __name__ == '__main__':
    app.run(debug=True)
    