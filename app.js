const express = require("express");
const cors = require("cors");
const passwordRoutes = require("./routes/passwordRoutes");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", passwordRoutes);

// this request is be able to deploy to heroku
app.get("/", (req, res) => {
   res.send("Welcome to my challenge task regarding password generator");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App running on port ${PORT}...`));
