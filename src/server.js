const express = require("express")
const { connection } = require("./db");
const { loginController } = require("./Routes/auth/login.route");


const app = express()
app.use(express.json())

app.use('/',loginController);


app.listen(1000,async()=>{
    try{
       await connection()
    }
    catch(err){
        console.log("err", err);
    }
    console.log('server running in 1000')
})