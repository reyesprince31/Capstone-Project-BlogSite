import express from "express";
import _ from "lodash";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let posts = [];

const homeContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorem cupiditate tempora asperiores neque laboriosam! Dolores obcaecati illo illum delectus atque vero assumenda dicta odio ut ad autem, ducimus, suscipit itaque. Ut laboriosam hic vitae ea illum quis tempora quam deserunt unde odio nisi, illo at, a doloribus similique quo, veniam repudiandae distinctio? Laborum unde perspiciatis nostrum cumque recusandae cupiditate officiis omnis tenetur! Hic labore aut ipsam laboriosam architecto deserunt eos reprehenderit velit mollitia saepe cupiditate doloribus illo porro sint, assumenda aliquam. Aut ducimus nemo natus enim, id quae aliquid laboriosam. Molestias voluptatem eaque quas aut nihil praesentium rem, voluptates aliquid quos animi non id corrupti eligendi perferendis quisquam optio suscipit reiciendis asperiores ex velit sunt eius et a. Perferendis, suscipit? Impedit illo tempore eum rerum! Repellendus ipsam vero voluptatum totam cupiditate dolorem pariatur iste iusto fuga id odio ex sed, odit in. Voluptas cumque possimus odio dolorum, in eum eveniet eius et non nobis quia porro rem vero fuga distinctio fugit quos, quasi ipsa quidem. Est quidem ea, deserunt neque omnis accusantium similique ut nesciunt ipsum nam aspernatur praesentium! Ipsum autem quisquam unde. Vitae, quia. Aperiam dolor autem accusantium porro reiciendis delectus sint, eius sunt? Ullam sint repellendus non?";

const aboutContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorem cupiditate tempora asperiores neque laboriosam! Dolores obcaecati illo illum delectus atque vero assumenda dicta odio ut ad autem, ducimus, suscipit itaque. Ut laboriosam hic vitae ea illum quis tempora quam deserunt unde odio nisi, illo at, a doloribus similique quo, veniam repudiandae distinctio? Laborum unde perspiciatis nostrum cumque recusandae cupiditate officiis omnis tenetur! Hic labore aut ipsam laboriosam architecto deserunt eos reprehenderit velit mollitia saepe cupiditate doloribus illo porro sint, assumenda aliquam. Aut ducimus nemo natus enim, id quae aliquid laboriosam. Molestias voluptatem eaque quas aut nihil praesentium rem, voluptates aliquid quos animi non id corrupti eligendi perferendis quisquam optio suscipit reiciendis asperiores ex velit sunt eius et a. Perferendis, suscipit? Impedit illo tempore eum rerum! Repellendus ipsam vero voluptatum totam cupiditate dolorem pariatur iste iusto fuga id odio ex sed, odit in. Voluptas cumque possimus odio dolorum, in eum eveniet eius et non nobis quia porro rem vero fuga distinctio fugit quos, quasi ipsa quidem. Est quidem ea, deserunt neque omnis accusantium similique ut nesciunt ipsum nam aspernatur praesentium! Ipsum autem quisquam unde. Vitae, quia. Aperiam dolor autem accusantium porro reiciendis delectus sint, eius sunt? Ullam sint repellendus non?";

const contactContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolorem cupiditate tempora asperiores neque laboriosam! Dolores obcaecati illo illum delectus atque vero assumenda dicta odio ut ad autem, ducimus, suscipit itaque. Ut laboriosam hic vitae ea illum quis tempora quam deserunt unde odio nisi, illo at, a doloribus similique quo, veniam repudiandae distinctio? Laborum unde perspiciatis nostrum cumque recusandae cupiditate officiis omnis tenetur! Hic labore aut ipsam laboriosam architecto deserunt eos reprehenderit velit mollitia saepe cupiditate doloribus illo porro sint, assumenda aliquam. Aut ducimus nemo natus enim, id quae aliquid laboriosam. Molestias voluptatem eaque quas aut nihil praesentium rem, voluptates aliquid quos animi non id corrupti eligendi perferendis quisquam optio suscipit reiciendis asperiores ex velit sunt eius et a. Perferendis, suscipit? Impedit illo tempore eum rerum! Repellendus ipsam vero voluptatum totam cupiditate dolorem pariatur iste iusto fuga id odio ex sed, odit in. Voluptas cumque possimus odio dolorum, in eum eveniet eius et non nobis quia porro rem vero fuga distinctio fugit quos, quasi ipsa quidem. Est quidem ea, deserunt neque omnis accusantium similique ut nesciunt ipsum nam aspernatur praesentium! Ipsum autem quisquam unde. Vitae, quia. Aperiam dolor autem accusantium porro reiciendis delectus sint, eius sunt? Ullam sint repellendus non?";

app.get("/", (req, res) => {
  res.render("home", { startingHomeContent: homeContent, postContent: posts });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.get("/posts/:postName", (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach((post) => {
    const storedTitle = _.lowerCase(post.title);

    if (storedTitle === requestedTitle) {
      res.render("reqpost", {
        requestedPostTitle: post.title,
        requestedPostContent: post.content,
      });
    }
  });
});

app.post("/compose", (req, res) => {
  const { postTitle, postContent } = req.body;

  if (postTitle && postContent) {
    const post = {
      title: postTitle,
      content: postContent,
    };

    posts.push(post);
  }

  res.redirect("/");
});

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
