
const {Product} =require("../models");

// const Product=db.Product;    (uper db to product) destructure

exports.create=(req,res)=>{

    const {name,description,cost,categoryId}=req.body;


    if(!name){
        res.status(400).send({message:"Name of the product cannot be empty"});
    }  

    const product ={
        name,
        description,
        cost,
        categoryId
    };

    Product.create(product)
    .then(product=>{
        res.status(201).send(product);
    })
    .catch((err)=>{
        res.status(500).send({message:err.message || "Somethng went wrong"});
    })
}

exports.findAll =(req,res)=>{

    Product.findAll()
    .then(products=>{
        res.send(products) 
    })
    .catch((err)=>{
        res.status(500).send({message:err.message || "Somethng went wrong"});
    })
}  

exports.findOne=(req,res)=>{
    const productId=req.params.id;

    Product.findByPk(productId)
    .then(product=>{
        if(!product){
            res.status(404).send({message:"Product not found"});
        }
        res.send(product);
    })
    .catch((err)=>{
        res.status(500).send({message:err.message || "Somethng went wrong"});
    })
}

exports.update =(req,res)=>{
    const productId=req.params.id;
    const {name,description} =req.body;
    const product={};

    if(name){
        product.name=name; 
    }
    if(description){
        product.description=description;
    }
    Product.update(product,{
        where:{id:productId}
    })
    .then((updatedProduct)=>{
        res.send({message:`${updatedProduct[0]} records updated successfully`});
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went wrong"});
    }) 
} 

exports.delete= (req,res)=>{
    const productId= req.params.id;

    Product.destroy({
        where:{id:productId}
    })
    .then((data)=>{
        res.send({message:"Successfully deleted the product"});
    })
    .catch((err)=>{
        res.status(500).send({message:"Something went wrong"});
    }) 

}