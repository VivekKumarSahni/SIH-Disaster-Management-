const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const server = express();
const SECRET_KEY = "SECRET_KEY";




const authRouter = require('./routes/Auth');
const agencyRouter = require('./routes/Agency');
const alertRouter = require('./routes/Alert');


// middlewares
const Auth = (req, res, next) => {
    const token = req.get('Authorization')?.split('Bearer ')[1];
    console.log(token);
    try {
      if (token) {
        var decoded = jwt.verify(token, SECRET_KEY);
        console.log("decoded ::")
        console.log(decoded.govtId)
        if (decoded.govtId) {
          next();
        } else {
          res.sendStatus(401)
        }
      } else {
        res.sendStatus(401);
      }
    } catch (err) {
        console.error("JWT verification error:", err);
      res.sendStatus(401);
    }
  };
server.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Include cookies if any in the request
  }));


server.use(express.json()); // to parse req.body
server.use('/auth', authRouter.router);
server.use('/agency', agencyRouter.router);
server.use('/alerts', alertRouter.router);







main().catch(err=> console.log(err));

async function main(){
<<<<<<< HEAD
    await mongoose.connect('mongodb://127.0.0.1:27017/disasterDB');
=======
    // await mongoose.connect('mongodb+srv://VivekSahni:Vivek%4080819935@cluster0.eonu2g9.mongodb.net/SecureConnectDB?retryWrites=true&w=majority');
    await mongoose.connect('mongodb://127.0.0.1:27017/RescueConnect');
>>>>>>> 2126d493392d630d26a12f600807fb7763746c5c
    console.log('database connected')
}


server.get('/', (req,res)=>{
        res.json({status:"success"});
})


server.listen(8080, ()=>{
    console.log("server started");
})
