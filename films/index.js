const server = require("./src/server");

const PORT = 8002;

server.listen(PORT, () => {
  console.log("************** FILMS ******************");
  console.log(`Server listening on port ${PORT}`);
});
