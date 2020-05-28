const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"); //ñ preciso colocar .js pq ele já entende
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-wxuep.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors()); //permite q qq tipo de aplicação possa acessa o backend
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3344);
