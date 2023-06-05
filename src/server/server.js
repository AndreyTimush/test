import express from "express";
import { renderToString } from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import App from "../shared/App";

const sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "./database.sqlite";

const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(indexTemplate(renderToString(App())));
});

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      "CREATE TABLE IF NOT EXISTS Catalog (id INTEGER PRIMARY KEY, name TEXT, description TEXT)",
      (err) => {
        if (err) {
          console.error(err.message);
          throw err;
        }
        console.log("Catalog table created successfully.");
      }
    );
  }
});

app.get("/api/db", (req, res) => {
  const sql = "SELECT * FROM Catalog";
  const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      console.error(err.message);
      throw err;
    } else {
      db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
