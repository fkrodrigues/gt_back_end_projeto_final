const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const authenticateToken = require('./middleware/authMiddleware');
require('dotenv').config();


const app = express();
app.use(express.json());


app.use('/login', loginRoutes);
app.use('/user', authenticateToken, userRoutes);
app.use('/category', authenticateToken, categoryRoutes);
app.use('/product', authenticateToken, productRoutes);

sequelize.sync({ force: false }) // definir force: true para remover e recriar tabelas
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
  })
  .catch((err) => console.error('Erro de conexão com BD:', err));