const router = require('express').Router();
const { doa } = require('../controllers');

// GET localhost:5050/doa => ambil data semua doa
router.get ('/doa', doa.getDataDoa); 

// GET localhost:5050/doa/:id => ambil data dengan id
router.get ('/doa/:id', doa.getDataDoaById);

// POST localhost:5050/doa/add => Tambah data Doa
router.post ('/doa/add', doa.addDataDoa); 

// POST localhost:5050/doa/edit => Update data Doa 
router.get ('/doa/edit', doa.updateDataDoa); 

// POST localhost:5050/doa/delete => Delete data doa 
router.get ('/doa/delete', doa.deleteDataDoa);  

module.exports = router;