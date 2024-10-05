import { server as _server } from "@hapi/hapi";
import { dbConnect } from "./db.js";

const server = _server({
  port: 5000,
  host: "localhost",
  routes: {
    cors: true,
  },
});

server.route([
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello from server";
    },
  },
]);

const start = async () => {
  try {
    server.start();
    console.log(`Server running`);
    dbConnect();
  } catch (error) {
    console.log(error);
  }
};

start();
