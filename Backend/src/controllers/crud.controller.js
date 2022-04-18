// const post = (model)=> async(req, res)=>{
//     try{
//         const user_id = req.user._id;
//         const item = await model.create({
//             title : req.body.title,
//             price : req.body.price,
//             user_id : user_id,
//         });
//         return res.status(201).send(item);
//     }catch(err){
//         return res.status(500).send({Error : err.message});
//     }
// }


const getAll = (model)=> async(req, res)=>{
    try{
        const item = await model.find().lean().exec();
        return res.send(item);
    }catch(err){
        return res.status(500).send({Error : err.message});
    }
}

const getOne = (model)=> async(req, res)=>{
    try{
        const item = await model.find({id : req.params.id}).lean().exec();
        return res.send(item);
    }catch(err){
        return res.status(500).send({Error : err.message});
    }
}
const Delete = (model)=> async(req, res)=>{
    try{
        const item = await model.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(item);
    }catch(er){
        return res.status(500).send({Error : er.message});
    }
}
const patch = (model)=> async(req, res)=>{
    try{
        const item = await model.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();
        return res.send(item);
    }catch(er){
        return res.status(500).send({Error : er.message});
    }
}


module.exports = (model) =>{
    return{
        // post : post(model),
        getAll : getAll(model),
        getOne : getOne(model),
        delete : Delete(model),
        patch : patch(model)
    }
}