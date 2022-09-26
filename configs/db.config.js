module.exports = {
    HOST : "localhost",
    USER : "root",
    PASSWORD : "niksql@30",
    DB : "ecom_db",
    dialect : "mysql",
    pool :{
        max :5,
        min :0,
        acquire: 30000, //max time in ms that  a pool will try to get connection before throwing an error
        idle :10000 //maximum time in ms that a connection can be idlebefore beig released

    }
}
