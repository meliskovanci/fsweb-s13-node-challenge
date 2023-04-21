// "eylem" routerını buraya yazın

const express = require("express");
const Actions = require("./actions-model");
const Projects = require("../projects/projects-model");
 const {checkActionId, checkActionBody} = require("./actions-middlware");


const router = express.Router(); 


router.get("/", async(req,res,next)=>{
    try {
        const action= await Actions.get();
        res.json(action)
    } catch (error) {
        next(error);
    }
})

router.get("/:id", checkActionId, async(req,res,next)=>{
    try {
        const actionId = await Actions.get(req.params.id)
        res.json(actionId);
    } catch (error) {
        next(error);
    }
})

router.post("/", checkActionBody, async(req,res,next)=>{
        const {project_id}=req.body;
        const project =await Projects.get(project_id)
    try {
        if(project){
            const action = await Actions.insert(req.body);
            res.status(201).json(action)
        }else {
            next()
        }
    } catch (error) {
        next(error)
    }
})

router.put("/:id", checkActionId, checkActionBody, async(req,res,next)=>{
    try {
        const action = await Actions.update(req.params.id, req.update);
        res.json(action) 
        
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", checkActionBody, async(req,res,next) =>{
    try {
        const action = await Actions.remove(req.params.id)
        res.json(action)
    } catch (error) {
        next(error)
    }
})














module.exports = router;