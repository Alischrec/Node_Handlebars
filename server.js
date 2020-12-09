const express = require("express");
const exphbs = require("express-handlebars");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// const router = require("./controllers/burger_controller.js")
// app.use(router)

app.use(require("./controllers/burger_controller.js"));

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});