const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const json = require("express-json");
app.use(json());
app.use(express.static(path.resolve(__dirname, "../html_helloworld")));
app.get("/recipes", (req, res) => {
  connection.query("SELECT * FROM Recipes", (err, results, fields) => {
    if (err) {
      sendError(res, 500, "Unable to fetch recipes");
      return;
    }
    res.json(results);
  });
});

app.get("/recipes/delete", (req, res) => {
  if (!req.query) {
    sendError(res, 400, "id is required");
    return;
  }
  let { id } = req.query;
  if (!id || id == "" || !isNaN(id)) {
    sendError(res, 400, "id is required and must be number");
    return;
  }
  connection.query(
    `DELETE FROM Recipes WHERE id=${id}`,
    (err, results, fields) => {
      if (err) {
        sendError(res, 500, "Error deleting recipe");
        return;
      }
      res.json({
        id,
        message: "Recipe successfully deleted"
      });
    }
  );
});

app.get("/recipes/create", (req, res) => {
  console.log("Should Create Recipe", req.query);
  if (!req.query) {
    sendError(
      res,
      400,
      "Recipe name, ingredients, and instructions are required"
    );
    return;
  }
  let { name, ingredients, instructions, picture } = req.query;
  if (!name || name == "") {
    sendError(res, 400, "Recipe name is required");
  }
  if (!ingredients || ingredients == "") {
    sendError(res, 400, "Ingredients list is required");
  }
  if (!instructions || instructions == "") {
    sendError(res, 400, "Instructions are required");
  }
  createRecipe(name, ingredients, instructions, picture, (error, id) => {
    if (error) {
      sendError(res, 500, "Error creating recipe");
      return;
    }
    res.json({
      message: "Successfully created recipe",
      id
    });
  });
});

function sendError(res, code, message) {
  res.status(code);
  res.json({
    code,
    message
  });
}

//app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "recipes"
});

connection.connect();

function createRecipe(name, ingredients, instructions, picture, callback) {
  connection.query(
    `INSERT INTO Recipes (name, ingredients, instructions, picture) VALUES ("${name}", "${ingredients}", "${instructions}", "${picture}")`,
    function(error, results, fields) {
      if (error) {
        callback(error);
        return;
      }
      callback(null, results.insertId);
    }
  );
}
