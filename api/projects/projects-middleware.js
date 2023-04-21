// projects ara yazılımları buraya
const Projects = require("./projects-model");


async function checkProjectId(req,res,next){
    try {
        const projectId = await Projects.get(req.params.id)
        if(!projectId){
           res.status(404).json({message: "Bu id'ye sahip bir proje yoktur."}) 
        }else {
          res.status(projectId) 
          next() 
        }
        
    } catch (error) {
     next(error)
    }
}

async function checkReqBody(req,res,next){
    const {name, description , completed} =req.body;
    try {
        if(!name || !description || completed === undefined ){
            res.status(400).json({message:"Eksik bilgi var"})
        }else {
            req.update = {name, description, completed};
            next() 
        }
    } catch (error) {
       next(error) 
    }
}

module.exports = { 
    checkProjectId,
    checkReqBody
}