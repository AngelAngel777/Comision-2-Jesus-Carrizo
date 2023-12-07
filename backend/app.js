const express = require('express');
const connectDB = require('./db');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Configurar middleware para manejar JSON en las solicitudes
app.use(express.json());

// Configurar las rutas para usuarios
app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
