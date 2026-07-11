const http = require("http");

const server = http.createServer((req, res) => {

    console.log(req.headers);

    if (req.url === "/") {

        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 200;
        res.end("Welcome Home");

    }

    else if (req.url === "/api") {

        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;

        const data = {
            message: "API Working Successfully"
        };

        res.end(JSON.stringify(data));

    }

    else if (req.url === "/created") {

        res.statusCode = 201;
        res.end("Resource Created");

    }

    else if (req.url === "/bad") {

        res.statusCode = 400;
        res.end("Bad Request");

    }

    else if (req.url === "/unauthorized") {

        res.statusCode = 401;
        res.end("Unauthorized");

    }

    else if (req.url === "/forbidden") {

        res.statusCode = 403;
        res.end("Forbidden");

    }

    else {

        res.statusCode = 404;
        res.end("Page Not Found");

    }

});

server.listen(8000, () => {
    console.log("Server Started");
});
