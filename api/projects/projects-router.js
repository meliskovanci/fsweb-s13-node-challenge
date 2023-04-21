// "project" routerını buraya yazın!
const express = require("express");
const Projects = require("./projects-model")

const {checkProjectId , checkReqBody} = require("./projects-middleware")

const router = express.Router();



router.get("/", async (req,res,next)=>{
    try {
        const projects = await Projects.get()
        res.json(projects)
        
    } catch (error) {
        next(error)
        
    }
})


router.get("/:id", checkProjectId , async(req,res,next) => {
    try {
        const projectId = await Projects.get(req.params.id)
        res.json(projectId)
    } catch (error) {
        next(error)
    }
})

router.post("/", checkReqBody, async (req,res,next)=>{
    try {
        const project = await Projects.insert(req.body)
        res.status(201).json(project)
        
    } catch (error) {
        next(error)
    }
})

router.put("/:id", checkProjectId, checkReqBody, async(req,res,next)=>{
    try {
        const project = await Projects.update(req.params.id , req.update );
        res.json(project)
    } catch (error) {
        next(error)
    }
})


router.delete("/:id", checkProjectId, async (req, res, next) => {
    try {
      const project = await Projects.remove(req.params.id);
      res.json(project);
    } catch (error) {
      next(error);
    }
  });


router.get("/:id/actions", checkProjectId, async(req,res,next) => {
    try {
        const project = await Projects.getProjectActions(req.params.id)
        res.json(project)
    } catch (error) {
        next(error)
    }
})





module.exports = router;