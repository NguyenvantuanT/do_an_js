const express  = require('express');
const router = express.Router();
const  userController = require ('../app/controllers/UserController');


// var checkLogin = (req, res ,next)  => {
//    var token = req.cookies?.token;
//    if(!token){
//     next(); 
//    }else{
//     var idUser = jwt.verify(token, 'mk');
//     User.findOne({_id : idUser._id})
//     .then(data =>{
//         req.data = data;
//         next();
//     }).cath(err =>{
//         console.log(err.message);
//     })
//    }

// }
// var checkUser = (req, res ,next)  =>  {
//     if(req.data){
//         var role = req.data.role;
//         if(role === 'user'){
//             res.redirect("/home");
//         }else if(role === 'admin'){
//             res.redirect("/admin");
//         }
//     }else if (!req.data){
//         next();
//     }
//   }


router.get('/register', userController.register);
router.get('/login', userController.login);
router.get('/trangchu', userController.trangchu);
router.get('/gioithieu', userController.gioithieu);
router.get('/lienhe', userController.lienhe);
router.get('/sanpham', userController.sanpham);


router.post('/created', userController.created);
router.post('/logined', userController.logined);
module.exports = router;