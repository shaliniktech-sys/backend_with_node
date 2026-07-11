const http = require("http");

const server = http.createServer((req, res) => {

    switch (req.url) {

        case "/":
            res.statusCode = 200;
            res.end("200 OK");
            break;

        case "/created":
            res.statusCode = 201;
            res.end("201 Created");
            break;

        case "/bad":
            res.statusCode = 400;
            res.end("400 Bad Request");
            break;

        case "/unauthorized":
            res.statusCode = 401;
            res.end("401 Unauthorized");
            break;

        case "/forbidden":
            res.statusCode = 403;
            res.end("403 Forbidden");
            break;

        default:
            res.statusCode = 404;
            res.end("404 Not Found");

    }

});

server.listen(8000, () => {
    console.log("Server Running on Port 8000");
});
