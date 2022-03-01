const employesController = {}

const Employe = require('../models/employeModel');

//Obtener empleados
employesController.getEmployes = async (req, res) => {
    const employes = await Employe.find();
    res.json(employes);
}

//Obtener un empleado
employesController.getEmploye = async (req, res) => {
    // console.log(req.params);
    const employe = await Employe.findById(req.params.id);
    res.json(employe);
}

//Guardar empleados
employesController.createEmployes = async (req, res) => {
    // console.log(req.body);
    const newEmploye = new Employe(req.body);
    await newEmploye.save();
    res.send({message: 'Empleado creado'});
}

//Actualizar empleados
employesController.updateEmployes = async (req, res) => {
    await Employe.findByIdAndUpdate(req.params.id, req.body);
    res.send({message: 'Empleado actualizado'});
}

//Eliminar empleados
employesController.deleteEmployes = async (req, res) => {
    await Employe.findByIdAndDelete(req.params.id);
    res.send({message: 'Empleado eliminado'});
}


module.exports = employesController;