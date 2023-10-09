const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getFavTapir, getNewsLetter } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/favorite", getFavTapir);

app.get("/api/newsletter", getNewsLetter);


app.listen(4000, () => console.log("Server running on 4000"));
