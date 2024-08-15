import express from "express";

export const PORT = process.env.PORT ?? 9000;

const server = express();

server.get("/route-name", async (req, res) => {

});

server.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
});
