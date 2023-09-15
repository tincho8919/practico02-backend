
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8010;

//Middeleware
app.get('/', (req, res, next)=>{

    console.log('Ya lo leyó el middleware');

    //res.send('Ya lo leyó el middleware');

    next();

})

//Middleware de Express
//app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.get('/login', (req, res) => {
    
    console.log(path.join(__dirname, 'public'));
    //console.log(process.env);

    res.send('Hello World');
});


app.get('/', (req, res) => {
    
    //console.log(process.env);

    res.sendFile('index.html');
});


app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log(`Server is running at http://localhost:${PORT}`);
})
app.get('/bienvenido', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/bienvenido.html'));
});
app.post('/', (req, res) => {
    const { email, password } = req.body;

    // Simulación de autenticación: verifica el correo electrónico y la contraseña
    if (email === 'Juan@gmail.com' && password === '12345') {
        // Autenticación exitosa, redirige al usuario a la página de inicio
        res.redirect('bienvenido.html');
    } else {
        // Autenticación fallida, redirige al usuario a la página de error
        res.redirect('registro.html');
    }
});
// Ruta para mostrar el formulario de registro
app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/registro.html'));
});

// Ruta para procesar el formulario de registro
app.post('/registro', (req, res) => {
    // Procesar los datos del formulario aquí
    const { nombre, apellido, email , password } = req.body;
    
    console.log('===================================');

    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(password);

    console.log('===================================');
    
    let datoNombre = req.body.nombre;
    let datoApellido = req.body.apellido;
    let datoEmail = req.body.email;
    let datoPassword = req.body.password;
    
    console.log('===================================');
    
    console.log(datoNombre);
    console.log(datoApellido);
    console.log(datoEmail);
    console.log(datoPassword);
    
    console.log('===================================');

    res.send(`Hemos recibido tus datos -nombre: ${nombre} -apellido: ${apellido} -correo: ${email} -contraseña: ${password}`);
    // Redirige al usuario a la página de bienvenida después del registro exitoso
    res.redirect('nuevouser.html');
});

