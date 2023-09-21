const { Agency } = require("../model/Agency");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const SECRET_KEY = "SECRET_KEY";



exports.createAgency = async (req, res) => {
    
    try {
      
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const agency = new Agency({...req.body, password:hashedPassword});
        const token = jwt.sign({govtId:agency.govtId, id:agency._id}, SECRET_KEY);
        agency.token = token;
        const doc = await agency.save();
        const responseData = { ...doc.toObject() };
        delete responseData.password;

        res.status(201).json(responseData);

        // res.status(201).json({doc});
    } catch (err) {
      res.status(400).json(err)
    }
  };







  exports.loginAgency = async (req, res) => {
    try {
      const agency = await Agency.findOne(
        { govtId: req.body.govtId },
      ).exec();

      console.log({agency})
      if (!agency) {
        res.status(401).json({ message: 'no such Agency exist'});
        }

        const matchedPassword = await bcrypt.compare(req.body.password, agency.password)

        if(!matchedPassword){
            return res.status(401).json({ message: 'invalid credentials' });
        }


        if(matchedPassword){
          const token = jwt.sign({govtId:agency.govtId, id:agency._id}, SECRET_KEY);
          agency.token = token;
          agency.save(()=>{
            res.status(201).json({token:token});
          })
        }


        
    } catch (err) {
      res.status(400).json(err);
    }
  };


  
