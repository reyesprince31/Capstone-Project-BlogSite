import express from "express";

const app = express();
const port = process.env.PORT || 3000;

const homeStartingContent =
  "Occaecat id nulla do excepteur nisi enim. Excepteur elit elit ea esse excepteur. Cillum id ipsum quis esse culpa amet duis amet nisi aliquip est dolor nostrud velit.";

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { startingContent: homeStartingContent });
});

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
