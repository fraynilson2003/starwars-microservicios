import server from "./src/server.js";

const PORT = 8004;

server.listen(PORT, () => {
    console.log("************** DATABASE ******************");
    console.log(`Server listening on port ${PORT}`);
});
