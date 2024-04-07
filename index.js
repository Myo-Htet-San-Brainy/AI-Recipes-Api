import server from "./utils/createServer.js";

const port = process.env.PORT || 5000;

function startServer() {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
}

startServer();
