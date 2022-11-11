module.exports = {
    development: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "niksql@30",
        DB: "ecom_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000, //max time in ms that  a pool will try to get connection before throwing an error
            idle: 10000 //maximum time in ms that a connection can be idlebefore beig released

        }
    },
    test: {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "Mohit@19",
        DB: "ecom_test_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acuire: 30000, //max time in ms that a pool will try to get connection before throwing error
            idle: 10000  // maximum time in ms that a connection can be idle before being released
        }
    },
        production: {
            HOST: "sql12.freemysqlhosting.net",
            USER: "sql12552139",
            PASSWORD: "g8ZP8LS3cN",
            DB: "sql12552139",
            dialect: "mysql",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000, //max time in ms that  a pool will try to get connection before throwing an error
                idle: 10000 //maximum time in ms that a connection can be idlebefore beig released

            }

        }
    }
