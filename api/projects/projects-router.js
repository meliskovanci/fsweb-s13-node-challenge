// "project" routerını buraya yazın!
const express = require("express");
const Projects = require("./projects-model")


const router = express.Router();



router.get("/", async (req,res,next)=>{
    try {
        const projects = await Projects.get()
        res.json(projects)
        
    } catch (error) {
        next(error)
        
    }
})















module.exports = router;