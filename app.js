//const express = require("express");
//const app = express();
//const port = 3000;

//app.set("view engine", "ejs");
//app.set("views", "./views");

//app.get("/", (req, res) => {
//const nombre = "Mundo";
//res.render("index", { nombre });
//});

//app.listen(port, () => {
// console.log(`Servidor escuchando en el puerto ${port}`);
//});
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

const personas = [
  { "nombre": "María", "apellido": "Hernández", "edad": 28 },
  { "nombre": "Luis", "apellido": "Martínez", "edad": 32 },
  { "nombre": "Patricia", "apellido": "Sánchez", "edad": 29 },
  { "nombre": "Miguel", "apellido": "Rodríguez", "edad": 45 },
  { "nombre": "Laura", "apellido": "Ramírez", "edad": 22 },
  { "nombre": "Sofía", "apellido": "Torres", "edad": 27 },
  { "nombre": "José", "apellido": "Fernández", "edad": 35 },
  { "nombre": "Elena", "apellido": "Díaz", "edad": 31 },
  { "nombre": "David", "apellido": "Ruiz", "edad": 38 },
  { "nombre": "Lucía", "apellido": "Vázquez", "edad": 26 }
];

const productos = [
  { "nombre": "tablet", "marca": "lenovo", "precio": 250 },
  { "nombre": "auriculares", "marca": "sony", "precio": 100 },
  { "nombre": "televisor", "marca": "lg", "precio": 600 },
  { "nombre": "monitor", "marca": "dell", "precio": 200 },
  { "nombre": "ratón", "marca": "logitech", "precio": 50 },
  { "nombre": "teclado", "marca": "corsair", "precio": 120 },
  { "nombre": "impresora", "marca": "canon", "precio": 150 },
  { "nombre": "cámara", "marca": "nikon", "precio": 700 },
  { "nombre": "consola", "marca": "nintendo", "precio": 400 },
  { "nombre": "altavoz", "marca": "bose", "precio": 250 }
];

app.get("/", (req, res) => {
  res.render("index", { personas, productos });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
