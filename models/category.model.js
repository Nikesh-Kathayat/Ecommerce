
// this is exporting a function 
module.exports= (Sequelize,sequelize)=>{

    // define: return new model out of it 
    const Category= sequelize.define("category",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        description:{
            type:Sequelize.STRING 
        }
    },{                   
        // another object
        tableName:'categories'

    });

    return Category;
} 