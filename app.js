import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const hello = "hello world!";
    res.render("home", {fromServer: hello});
});

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
