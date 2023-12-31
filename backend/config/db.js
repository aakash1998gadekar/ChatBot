const mongoose = require("mongoose");

const connectDB= async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`mongo connected : ${conn.connection.host}`)
    }catch(error){
       console.log(`error: ${Error.message}`);
       
       process.exit();
    }
};

module.exports= connectDB;
