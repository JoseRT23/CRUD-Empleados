const { Router } = require('express');
const router = Router();
const employesController = require('../controllers/employesController');

//Obtener empleados
router.get('/employes', employesController.getEmployes);

//Obtener un empleado por id
router.get('/employes/:id', employesController.getEmploye);

//Guardar empleados
router.post('/employes', employesController.createEmployes);

//Actualizar empleados
router.put('/employes/:id', employesController.updateEmployes);

//Eliminar empleados
router.delete('/employes/:id', employesController.deleteEmployes);

module.exports = router