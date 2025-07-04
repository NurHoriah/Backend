const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middleware/uploadMiddleware');

// Upload gambar produk
router.post('/upload/:id', upload.single('image'), productController.uploadImage);

// CRUD produk populer
router.get('/popular/all', productController.getPopularProducts);
router.post('/popular', productController.createPopularProduct);
router.put('/popular', productController.updatePopularProduct);

// CRUD semua produk
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/:id', productController.getProductById);

module.exports = router;

router.post('/upload/:id', (req, res) => {
  res.json({ message: `Upload route hit with id ${req.params.id}` });
});
