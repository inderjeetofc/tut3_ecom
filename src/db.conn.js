const Sequelize = require('sequelize')
const sequelize = new Sequelize('tut3_ecom_dev','inderjeet_user','123',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
    pool:{max:5,min:0,idle:10000}
})

const testConn = async function(){
    try {
    await sequelize.authenticate()
    console.log(`Connection established with mysql`)
        
    } catch (error) {
        console.log(`their is an error connectiong to db : ${error}`)
    }
}
testConn()