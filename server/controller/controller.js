const model = require('../models/model');

//POST http://localhost:8080/api/categories
async function create_Categories(req, res){
    const Create = new model.Categories({
        type:"Investment",
        color:"#797EF6",
    })

    Create.save(function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({message: `Error while creating Category ${err}`})
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


module.exports = {
    create_Categories,
    get_Categories,
    create_Transaction
}

