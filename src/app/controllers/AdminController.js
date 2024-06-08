
const Book = require('../models/Book'); // thêm models book vao
class AdminController {
    //GET/ admin
    ShowIndexAdmin(req, res,next){
        res.render('admin/indexAdmin');
    }   
//GET/ admin/addsp
addsanpham(req, res,next){
    Book.find({})
    .then(Books => {
      Books =Books.map(Books => Books.toObject())
      res.render('admin/addsanpham',{
      Books: Books 
      })
    })
    .catch(next);
    }  

    // post [addmin/add sp]
added(req, res,next){
    const {name, price, productImage,productDescription} = req.body;
    const newBook =  new Book({name: name,price: price, productImage:productImage , productDescription: productDescription});
    newBook.save();
    return res.json({message: 'Thêm thành công '});
    }  
} 
module.exports = new AdminController();
