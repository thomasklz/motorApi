
//Controller usuario
import { PersonsModelModel } from "../models/PersonsModel.js";
import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../config/config.js";



export const updatePersons = async (req, res) => {
    const { name, lastname, ci, address, phone } = req.body;
    if (!(name ||  lastname ||  ci ||  address ||  phone )) {
      res.status(400).json({ message: "all input is required" });
    }
    const person = await PersonsModel.findOne({where:{id:req.params.id}});

    if(person){
        person.set({...person,name:name,lastnam:lastname, ci:ci,address:address,phone:phone });
        await person.save();
        res.status(200).json({ message: "update" });
    }else{
        res.status(404).json({message: "user not found"});
    }
  };