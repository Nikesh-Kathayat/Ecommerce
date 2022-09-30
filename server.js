
const express = require("express");
const config = require("./configs/db.config");
// it converts into a json request 

require("dotenv").config();



const bodyParser =require("body-parser");
// const Sequelize = require("sequelize");
// console.log(process.env);

const app = express();   

app.use(bodyParser.json());

const db=require("./models");

db.sequelize.sync({force:false})
.then(()=>{
    console.log("DB synced")
})

// imported category routes
require("./Routes/category.routes")(app); 

// import product routes 
require("./Routes/product.routes")(app);
   

app.listen(process.env.PORT,()=>{ 
    console.log(`Application is running in port ${process.env.PORT}`);
})
 
