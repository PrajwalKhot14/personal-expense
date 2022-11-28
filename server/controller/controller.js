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

// Aggregate 
async function get_Lables(req, res){
    model.Transaction.aggregate([
        {
            $lookup : {
                from: "categories",
                localField: 'type',
                foreignField: "type",
                as: "categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result =>{
        let data = result.map(v=>Object.assign({}, {_id: v._id, name: v.name, type: v.type, amount: v.amount, date: v.date, color: v.categories_info['color']}));
        res.json(data);
    }).catch(error=>{
        res.status(400).json("Lookup Collection Error");
    })
}

// GET http://localhost:8080/api/bank
async function get_Bank(req, res){
    let data = await model.Bank.find({})
    let filter = await data.map(v => Object.assign({}, {name: v.name, amount: v.amount, date: v.date}));
    return res.json(filter);
}


//POST: http://localhost:8080/api/bank
async function create_Bank(req, res){
    if(!req.body)return res.status(400).json("POST HTTP Data not provided");
    let{name, amount} = req.body;

    const create = await new model.Bank({
        name,
        amount,
        date: new Date()
    });

    create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({message: `Error while adding amount ${err}`})
    });
}


module.exports = {
    create_Categories,
    get_Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Lables,
    get_Bank,
    create_Bank
}

