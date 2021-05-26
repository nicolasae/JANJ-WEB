from flask import Flask
from flask_mail import Mail, Message
from credentials import Credentials
from flask import render_template
from flask import request
import os
import json
print(os.curdir)
template = ''' <!DOCTYPE html>
                <html>
                <body>

                <h1 style="color:#ff471a;">Su acción en JANJ-WEB tiene buenas predicciones</h1>
                <p>El sistema de suscripción le informa que la acción de: </p> 
                <p style="color:#0000FF; font-weight: bold;">ECOPETROL </p>

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
        msg = Message(subject="ATENCIÓN: Su acción en JANJ tiene buenas proyecciones",
                    sender=app.config.get("MAIL_USERNAME"),
                    recipients=emails, # use your email for testing
        )
        msg.html = template
        # print(render_template(template+'.txt', **kwargs))
        # msg.html = render_template(template+'.html', **kwargs)
        mail.send(msg)
        return "Se envió email correctamente"

if __name__ == '__main__':
    app.run(debug=True)
    