from requests import put, get, delete, update
# print(put('http://localhost:5000/todo1', data={'data': 'Remember the milk'}).json())
# print(put('http://localhost:5000/todo2', data={'data': 'Remember the meat'}).json())
# print(get('http://localhost:5000/todo1').json())

print(get('http://localhost:5000/todos').json())
# print(put('http://localhost:5000/todos/todo3', data={'task': 'Finish hw'}).json())
# print(get('http://localhost:5000/todos/todo3').json())
print(delete('http://localhost:5000/todos/todo2'))
print(update('http://localhost:5000/todos/todo2', data={'task': 'Something different'}).json())
print(get('http://localhost:5000/todos').json())