# dataviz-project
| USC Data Analytics &amp; Visualization Bootcamp |

### This repository includes files that you can reference to help you with your application (like a cheat sheet)

## Steps
* Set up the Flask App
* Set up Database
* Build routes
* Build templates

## Flask
### Basic Application Structure
~~~
/app.py
/templates
    /index.html
/static
    /js
        logic.js
    /css
        styles.css
~~~
The `template` folder will store all of your `.html` files (pages)

The `static` folder will store all of your `.js` and `.css` files

### The Application (`app.py`)
A bare minimum application:

`app.py`
~~~python
# 1) Import/load necessary files, resources, and dependencies
from flask import Flask
app = Flask(__name__)

# 2) Create routes (or endpoints) for your application
@app.route('/')
def home():
  return "Hey, what's up world?"

# 3) Run the app!
if __name__ == '__main__':
  app.run()
~~~

A Demo Application featuring HTTP requests from the client to server (files included in this repo under `flask-starter`):

`app.py`
~~~python
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
  return jsonify(result) # Go check your browser!

# Run the server
if __name__ == '__main__':
  app.run()
~~~

## HTML/JavaScript/CSS

`index.html`
~~~html
<!DOCTYPE html>
<html lang="en">

<head>
   ... (minimized these files so we can focus on the "body" section)
</head>

<body>
  <!-- YOUR HTML CODE GOES HERE -->
  <div class="container-fluid">
    <div id="chart"></div>
  </div>

  <!-- YOUR CUSTOM SCRIPTS GO HERE -->
  <script src="{{ url_for('static', filename='js/logic.js') }}"></script>
  <script src="{{ url_for('static', filename='js/graph.js') }}"></script>
</body>

</html>
~~~

I want to highlight the following line:
~~~html
<script src="{{ url_for('static', filename='js/graph.js') }}"></script>
~~~
- All this is saying is: "since this will be a website, we need to create a URL for this file".
- Use this when sourcing the paths to your `.js` and `.css` files in your `HTML` code!
- NOTE: You should have your `.js` and `.css` files in the static folder (also in their respective folders) and your `.html` files in the templates folder for this to work!
- For more information about this at this great [Stack Overflow Thread](https://stackoverflow.com/questions/16351826/link-to-flask-static-files-with-url-for)
and [Original Documentation](http://flask.pocoo.org/docs/1.0/quickstart/#static-files).

### HTTP Methods -> getting data from your Python App (Flask) and using it on your website

Here we will be using the `fetch` web API to make HTTP requests!

`fetch` is robust web API that lets you make asynchronous (HTTP) requests like `get` and `post`. It returns a “Promise” which is one of the great features of ES6. Promises allow us to handle asynchronous requests in an intuitive manner. All this means is that if you want some data from somewhere, it may take a while for it to process... and you don't know for sure how long this takes. Using promises allows your code to wait for this data to be processed 

`logic.js`
~~~js
// Get some kind of data you want
let data = {
  'number': 10000
}

// Create url (this matches the url string in Flask app routes like: @app.route('/api/data/<int:num>'))
let url = "http://localhost:5000/api/data"

// Configure the type of HTTP request you are attempting to make
let options = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  // mode: "no-cors", // no-cors, cors, *same-origin
  headers: {
    'content-type': 'text/plain; charset=UTF-8'
  },
  body: JSON.stringify(data) // body data type must match "Content-Type" header
}

fetch(url, options) // pass the url and options object to the fetch() function
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(`This is data: `, data);
    // Do something with the response data here!
  });


~~~

fetch is a new powerful web API that lets you make asynchronous requests. In fact, fetch is one of the best and my favorite way to make an HTTP request. It returns a “Promise” which is one of the great features of ES6. If you are not familiar with ES6, you can read about it in this article. Promises allow us to handle the asynchronous request in a smarter way. Let’s take a look at how fetch technically works.