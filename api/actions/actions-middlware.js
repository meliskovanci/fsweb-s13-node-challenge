// eylemlerle ilgili ara katman yazılımları yazın
const Actions = require("./actions-model")

async function checkActionId(req,res,next){
    try {
        const action = await Actions.get(req.params.id);
        if(!action){
            res.status(404).json({message:"Bu id'ye sahip bir action yoktur."})
            next()
        }else {
            req.action = action; 
            next()
        }
    } catch (error) {
        next(error)
    }
}


async function checkActionBody (req,res,next){
    const {project_id, description, notes, completed} = res.body;
    try {
        if(!project_id || !description || !notes || completed === undefined){
            res.status(400).json({message:"Eksik bilgi var"})
            next()
        } else {
            req.update = {project_id, description, notes, completed};
            next();
        }
    } catch (error) {
        next(error)
    }
}


module.exports = {
    checkActionId,
    checkActionBody
}