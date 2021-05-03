## 1. First create virtual env:
`virtualenv venv`
## 2. Activate venv:
* In Windows:  
`.\venv\Scripts\activate`
* In Linux:  
`source venv/bin/activate`
## 3. Install requirements
`pip install -r requirements.txt`
## 4. Run email_api.py
0. Make sure to have venv activated (step 2)
1. Set FLASK_APP variable
   * In Windows:  
`$env:FLASK_APP = "email_api.py"`  
   * In Linux:  
`export FLASK_APP=email_api.py`
2. Run api in port 5001  
`flask run --host 0.0.0.0 --port 5001`

## 4. Run notifications_api.py
1. Open a new terminal
2. Repeat step 2. Activate venv
3. Set FLASK_APP variable
   * In Windows:  
    `$env:FLASK_APP = "notifications_api.py"`  
   * In Linux:  
    `export FLASK_APP=notifications_api.py`