// index.js

const express = require("express");
const cors = require("cors");
const Mercado_Pago = require("./Mercado_Pago_Router");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/Mercado_Pago", Mercado_Pago);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la api de integraación de pago');
});


const port = process.env.port ?? 8080;

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});