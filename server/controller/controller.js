const model = require('../models/model');

//POST http://localhost:8080/api/categories
// async function create_Categories(req, res){
//     const Create = new model.Categories({
//         type:"Investment",
//         color:"#797EF6",
//     })

//     Create.save(function(err){
//         if(!err) return res.json(Create);
//         return res.status(400).json({message: `Error while creating Category ${err}`})
//     });
// }

async function create_Categories(req, res){
    if(!req.body)return res.status(400).json("POST HTTP Data not provided");
    let{type, color} = req.body;

    const create = await new model.Categories({
        type,
        color
    });

    create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({message: `Error while creating transaction ${err}`})
    });
}

// Food & Drinks, Travel, Shopping, Entertainment, Investment

// GET http://localhost:8080/api/categories
async function get_Categories(req, res){
    let data = await model.Categories.find({})
    let filter = await data.map(v => Object.assign({}, {type: v.type, color: v.color}));
    return res.json(filter);
}


//POST: http://localhost:8080/api/transaction
async function create_Transaction(req, res){
    if(!req.body)return res.status(400).json("POST HTTP Data not provided");
    let{name, type, amount} = req.body;

    const create = await new model.Transaction({
        name,
        type,
        amount,
        date: new Date()
    });

    create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({message: `Error while creating transaction ${err}`})
    });
}

//GET: http://localhost:8080/api/transaction
async function get_Transaction(req, res){
    let data = await model.Transaction.find({})
    let filter = await data.map(v => Object.assign({}, {id: v._id, name: v.name, type: v.type, amount: v.amount, date: v.date}));
    return res.json(filter);
}

// DELETE: http://localhost:8080/api/transaction
async function delete_Transaction(req, res){
    if(!req.body) res.status(400).json({message: "Request Body not Found"});
    await model.Transaction.deleteOne(req.body, function(err){
        if(!err) res.json("Record Deleted!");
    }).clone().catch(function(err){res.json("Error while deleting Transaction")})
}


module.exports = {
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction
}

