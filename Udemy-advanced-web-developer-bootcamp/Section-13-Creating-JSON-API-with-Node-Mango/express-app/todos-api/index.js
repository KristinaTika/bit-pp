var express = require("express");
    app = express();
    hostname = '127.0.0.1';
    port = 3000;

var todoRoutes = require("./routes/todos");

app.get("/", function(req, res) {
    res.send("hello from the root route!");
});

app.use("/api/todos", todoRoutes);

app.listen(port, hostname, function() {
    console.log("App is running on port " + hostname + ':' + port + '/');
})