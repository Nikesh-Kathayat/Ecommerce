
const express = require("express");
const config = require("./configs/db.config");
// it converts into a json request 
const bodyParser =require("body-parser");
const {authJWT} =require("./Middlewares");

require("dotenv").config();

const {Role} = require("./models");

const app = express();   

app.use(bodyParser.json());

const db=require("./models");

db.sequelize.sync({force:false})
.then(()=>{
    console.log("DB synced")
})

// Add roles 
// Role.create({
//     id:1,
//     name:"user"
// });
  
// Role.create({
//     id:2, 
//     name:"admin"
// })

// import auth routes 
require("./Routes/auth.routes")(app);

// imported category routes
require("./Routes/category.routes")(app); 

// import product routes 
require("./Routes/product.routes")(app);

// import user routes 
require("./Routes/user.routes")(app);

// import cart routes 
require("./Routes/cart.routes")(app);

   

app.listen(process.env.PORT,()=>{ 
    console.log(`Application is running in port ${process.env.PORT}`);
})

 
