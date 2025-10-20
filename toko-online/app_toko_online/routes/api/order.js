const express = require('express');
const router = express.Router();
const orderController = require('../../controllers/order');

// @route   POST /api/orders
// @desc    Membuat Pesanan Baru
router.post('/', orderController.create);

// @route   GET /api/orders
// @desc    Mengambil Semua Pesanan (Dibatasi Admin)
router.get('/', orderController.all);

// @route   GET /api/orders/:id
// @desc    Mengambil Detail Pesanan
router.get('/:id', orderController.detail);

// @route   PUT /api/orders/:id
// @desc    Memperbarui Status Pesanan
router.put('/:id', orderController.update);

module.exports = router;