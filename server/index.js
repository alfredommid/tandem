const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//server creation
const app = express();

//connect db
connectDB();

//CORS
app.use(cors())

//JSON
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

//main page
app.get('/', (req,res) => {
    res.send('Hola todos')
})

//Import routes
app.use('/tandem/usuarios', require('./routes/usuarios'));
app.use('/tandem/auth', require('./routes/auth'));
app.use('/tandem/articulos', require('./routes/articulos'));
app.use('/tandem/afiliados', require('./routes/afiliados'));
app.use('/tandem/pendientes', require('./routes/pendientes'));
app.use('/tandem/valorados', require('./routes/valorados'));

//Launch app
app.listen(PORT, () => {
    console.log(`Puerto en ${PORT}, todo fino`)
})