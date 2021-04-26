from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/login')
def login():
    return "Hello World!"

@app.route('/register')
def register():
    return "Hello World!"

@app.route("/<name>")              # at the end point /<name>
def hello_name(name):              # call method hello_name
    return "Hello " + name          # which returns "hello + name



if __name__ == '__main__':
    app.run(debug=True)