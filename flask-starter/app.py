# Import/load necessary files, resources, and dependencies
from flask import Flask, render_template, json, jsonify, request
app = Flask(__name__)

# Create routes (or endpoints) for your application
@app.route('/')
def home():
  return render_template('index.html')

# Sample api route
@app.route('/api/data', methods=["GET","POST"])
def number_data():
  # Get the data from the "GET" request from the front-end
  requestData = request.get_data()
  data = json.loads(requestData)
  print('This is data: ')
  print(data)

  # Do something with the data
  result = data['number'] * 2

  # The return value must be a: string, tuple, Response instance, or WSGI callable. 
  # JSON data IS a string. So let's use Flask's jsonify function:
  return jsonify(result)

# Run the server
if __name__ == '__main__':
  app.run()