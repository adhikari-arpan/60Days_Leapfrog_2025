const http = require("http");

const myServer = http.createServer((req, res) => {
    // console.log(req);
    console.log("New Request Received");
    res.end("Hello from server");
});

myServer.listen(8000, () => {
    console.log("Server Started");
});





