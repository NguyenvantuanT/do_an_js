const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.all('/' , userController.show);
router.get('/search', userController.search);
router.get('/cart', userController.cart);
// router.delete('/cart/delete/:id', (req, res, ) {
//     const { id } = req.params;
//     try {
//         // Tìm giỏ hàng trong cơ sở dữ liệu
//         const cart = await Cart.findOne();
//         // Tìm vị trí của cuốn sách trong giỏ hàng
//         const index = cart.items.findIndex(item => item.bookId === id);

//         // Nếu không tìm thấy cuốn sách trong giỏ hàng, trả về lỗi 404
//         if (index === -1) {
//             return res.status(404).json({ message: 'Book not found in cart' });
//         }

//         // Xóa cuốn sách khỏi giỏ hàng
//         cart.items.splice(index, 1);

//         // Lưu lại giỏ hàng mới sau khi xóa
//         await cart.save();

//         // Trả về thông báo thành công
//         return res.status(200).json({ message: 'Book removed from cart successfully' });
//     } catch (error) {
//         // Xử lý lỗi nếu có
//         console.error('Error removing book from cart:', error);
//         return res.status(500).json({ error: 'Internal server error' });
//     }
// });
router.get('/register', userController.register);
router.get('/login', userController.login);
router.get('/trangchu', userController.trangchu);
router.get('/gioithieu', userController.gioithieu);
router.get('/lienhe', userController.lienhe);
router.get('/sanpham', userController.sanpham);


router.post('/created', userController.created);
router.post('/logined', userController.logined);
module.exports = router;