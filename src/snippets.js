/*** Snippets for JS noobs ***/

/* HTTP (TODO: Update these methods to use Axios rather than XHR) */

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

// GET
const httpGet = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};

// POST
const httpPost = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};

// PUT
const httpPut = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('PUT', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request);
  request.onerror = () => err(request);
  request.send(data);
};

// Create HTTP server
const http = require('http');
const port = 3000;
const host = '127.0.0.1';
const newServer = () => {

  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
  });

  server.listen(port, host)

}
/***************************************************************************************************/

/* HTML */

// Add class to HTML element
const addClass = (el, className) => el.classList.add(className);
