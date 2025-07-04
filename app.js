require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(cors());  // aktifkan CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // untuk form data

// Serve folder public agar file bisa diakses langsung
app.use(express.static(path.join(__dirname, 'public')));

// Pastikan juga folder uploads dapat diakses via url /uploads
// Karena uploads ada di public/uploads, maka sudah bisa diakses dengan express.static('public')

// Routes
app.use('/api', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
