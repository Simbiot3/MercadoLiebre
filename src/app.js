// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();
const port = process.env.PORT || 3033;


// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("./public"));

// Ponemos a escuchar el servidor

app.listen(port, () =>{console.log("Servidor corriendo en http://localhost/:" + port)});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/register.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get("/login.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

