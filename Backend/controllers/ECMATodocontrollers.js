const ECMATodo = require("../models/ECMATodomodel")

// to find the todo's
const findECMATodo = async(req,res)=>{
    const ECMATo = await ECMATodo.find();
    res.json(ECMATo);
}

// to craete the todo's
const createECMATodo = (req,res)=>{
    const ECMATo = new ECMATodo({
        title : req.body.title,
        description : req.body.description
    });
    ECMATo.save();
    res.json(ECMATo);
}

// to delete the todo's
const deleteECMATodo = async(req,res) =>{
    await ECMATodo.findByIdAndDelete(req.params.id);
    res.json({
        done:"All done"
    });
}

// const updateECMATodo =async (req,res)=>{
//     const update = await ECMATodo.findByIdAndUpdate(req.params.id);
//     console.log(update.active)
//     res.json({
//         done:"All done"
//     });
//     if(update.active === true){update.active = false ;};
//     if(req.body.active === false){update.active = true ;};
// }

exports.createECMATodo = createECMATodo ;
exports.findECMATodo = findECMATodo ;
exports.deleteECMATodo = deleteECMATodo ;
// exports.updateECMATodo = updateECMATodo ;