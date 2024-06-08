const express  = require('express');
const router = express.Router(); //ket noi dg dan de tao collection tren database

const  adminController = require('../app/controllers/AdminController')
router.get('/admin', adminController.ShowIndexAdmin);
router.get('/admin/addsanpham', adminController.addsanpham);
router.post('/admin/added', adminController.added);
router.get('/admin/update', adminController.updatesanpham);
module.exports = router;