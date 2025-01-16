import { PersonsModel } from "../models/PersonsModel.js";
import { upload } from "../config/upload.js";
export const updatePersons = async (req, res) => {
  const { name, lastname, ci, address, phone } = req.body;
  if (!(name || lastname || ci || address || phone)) {
    res.status(400).json({ message: "all input is required" });
  }
  const person = await PersonsModel.findOne({ where: { id: req.params.id } });
  if (person) {
    person.set({
      ...person,
      name: name,
      lastname: lastname,
      ci: ci,
      address: address,
      phone: phone,
    });
    await person.save();
    res.status(200).json({ message: "update" });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

export const changeImage = async (req, res) => {
  const { id } = req.params;
  //const { image } = req.body;
  const file = req.body.file;

  res.status(200).json({ message: file });
  

  if (!file) {
    return res.status(400).json({ message: "Image is required" });
  }

  const person = await PersonsModel.findOne({ where: { id } });
 
  if (person) {
   const imageName = file.filename;
    upload();
    person.set({
      ...person,
      photo: imageName,
    });
    await person.save();
    res.status(200).json({ message: "image updated" });
  } else {
    res.status(404).json({ message: "user not found" });
  }
};
