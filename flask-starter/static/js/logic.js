// Get some kind of data you want
let data = {
  'number': 10000
}

// Create url (this matches the url string in Flask app routes like: @app.route('/api/data'))
let url = "http://localhost:5000/api/data"

// Configure the type of HTTP request you are attempting to make
let options = {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  // mode: "no-cors", // no-cors, cors, *same-origin
  headers: {
    'content-type': 'application/json; charset=UTF-8'
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

