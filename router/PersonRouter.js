import express from 'express';
import { updatePersons, changeImage} from '../controller/PersonsController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();

rotuer.put('/person/:id',verifyToken, updatePersons);
rotuer.put('/update/image/:id',verifyToken, changeImage);

export default rotuer;