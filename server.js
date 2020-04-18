const next = require("next");

const express = require("express");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/p/:title", (req, res) => {
      const postId = parseInt(req.params.title.split("-").pop());
      const queryParams = { id: postId };
      app.render(req, res, "/post", queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`Server started at port ${port}`);
      }
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
