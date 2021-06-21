#from flask_script import Manager
from aplicacion.app import app,db
from aplicacion.models import *
'''
manager = Manager(app)
app.config['DEBUG'] = True  # Ensure debugger will load.


@manager.command
def create_tables():
    "Create relational database tables."
    db.create_all()


@manager.command
def drop_tables():
    "Drop all project relational database tables. THIS DELETES DATA."
    db.drop_all()

'''
if __name__=='__main__':
    #manager.run()
    app.run(debug=False,host='0.0.0.0',port=5000)
