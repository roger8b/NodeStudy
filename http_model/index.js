import http from "http"

function error(response, err) {
    response.statusCode = 400
    console.log(err);
    response.end();
}

function echoResponse(body, response, headers, method, url) {
    body = Buffer.concat(body).toString();
    response.writeHead(200, {'Content-Type': 'application/json'})
    const responseBody = {headers, method, url, body}
    response.end(JSON.stringify(responseBody))
}

function urlNotFound(url, response) {
    let err = {message: `URL nor found: ${url}`}
    response.writeHead(404, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(err))
}

http.createServer((request, response) => {
    let {headers, method, url} = request
    let body = []

    if (method === 'GET' && url === '/echo') {
        request
            .on('error', (err) => error(response, err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => echoResponse(body, response, headers, method, url));

    } else if (url === '/') {
        response.end("Hello Node HTTP Module")
    } else {
        urlNotFound(url, response);
    }
}).listen(3000);