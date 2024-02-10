const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const mainRoutes = require("./src/routes/mainRoutes");
app.use("/api", mainRoutes);
app.use("/", express.static('public')); // uses the public folder to access front-end

module.exports = app;