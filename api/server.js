const express = require('express');

const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");

const server = express();

// Sunucunuzu yapılandırın
// Eylem routerınızı /api/actions/actions-router.js içinde oluşturun
// Proje roterlarınızı /api/projects/projects-router.js içinde oluşturun
// Bu dosyanın içinde `server.listen()` YAPMAYIN!



server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req,res)=> {
    res.send("it is working");
})


module.exports = server;
