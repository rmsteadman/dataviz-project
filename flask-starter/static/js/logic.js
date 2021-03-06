/* 
   Let's say we have some number (10000) from a dropdown menu, or a user input,
   and we want to do something with it. In this example we will send it back to our
   Flask app, perform some math on it, then recieve some new data back. In order to do 
   this, we can "package" some initial data in an object!
*/
let data = {
  "number": 10000,
  "food": "A cookie 🍪"
}

// Create url (this matches the url string in Flask app routes like: @app.route('/api/data'))
let url = "http://localhost:5000/api/data"

// Configure the type of HTTP request you are attempting to make
let options = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "no-cors", // no-cors, cors, *same-origin
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
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
