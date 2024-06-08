const User = require('../models/User');
const Book = require('../models/Book');  // tuong tac models
const jwt = require('jsonwebtoken');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class UserController {
    //GET/ register
    register(req, res,next){
        res.render('user/register');
    }
    //post /created
  created(req, res,next){
    const {username, password,email, phone} =req.body;
    const findUserByUsername = User.findOne({username: username});
    const findUserByEmail = User.findOne({email: email});

    Promise.all([findUserByUsername , findUserByEmail])
    .then(([userByUsername , userByEmail]) =>{
           if(userByUsername){
            return res.json({message: "username da ton tại "})
        }else if (userByEmail){
            return res.json({message: 'Email da duoc dang ky '});
        }else if(!userByUsername && !userByEmail){
        const newUser =  new User({username: username,password: password, email:email , phone: phone, role: "user"});
        newUser.save();
        return res.json({message: 'success'});
           }
    }) 
    .catch(error =>{
        return res.status(500).json({message: 'Đã xảy ra lỗi '});
    });
  }

   //get /login
   login(req, res,next){
    res.render('user/login');
}
   //post /login
   logined(req, res,next){
   const {username, password} =req.body;
        console.log(username ,password);
    const findUserByUsername = User.findOne({username: username});
    const findUserByPassword = User.findOne({password: password});

    Promise.all([findUserByUsername , findUserByPassword])
    .then(([userByUsername , userByPassword]) =>{
           if(userByUsername && userByPassword){
            const token = jwt.sign({_id: userByUsername._id}, 'mk');
            return res.json({message: userByUsername.role, token: token})
           }else if (userByUsername && !userByPassword){
            return res.json({message: 'sai mat khau '});
           }else{
            return res.json({message: 'tai khoan khong ton tai'});
           }
    })
    .catch(error =>{
        return res.status(500).json({message: 'da xay ra loi '});
    });
  }
       // get: sp //Sử dụng Promises (ngan gon)
  sanpham(req, res, next){
        Book.find({})
        .then(Books => {     //truyen data lay tu model truyen vao
          res.render('client/sanpham',{     //choc sang view
          Books: mutipleMongooseToObject(Books)
          });
        })
        .catch(next);
  } 
   // get gioithieu 
   gioithieu(req, res, next) {
    res.render('client/gioithieu');
}
// get lh 
   lienhe(req, res, next) {
    res.render('client/lienhe');
}
// get trang chu
  trangchu(req, res, next) {
    res.render('client/indexClient')}
}
module.exports = new UserController();
