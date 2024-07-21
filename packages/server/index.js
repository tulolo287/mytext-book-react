const Hapi = require("@hapi/hapi");
const db = require("./db");
const bookController = require("./controller/Book");

const init = async () => {
  await db.dbConnect()

  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: true,
    },
  });

  server.route([
    {
      method: "GET",
      path: "/books/{id}",
      handler: (request, h) => {
        const id = request.params.id
        return bookController.getBook(id)
      },
    },
    {
      method: "GET",
      path: "/books",
      handler: (request, h) => {
        const query = request.query
        return bookController.getBooks(query)
      },
    },
  ]);
  await server.start();
  console.log("Server running");
};

init();
