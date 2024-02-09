// index.js

const express = require("express");
const cors = require("cors");
const Mercado_Pago_Router = require("./Mercado_Pago_Router");
const { db } = require("./firebaseConfig"); // Importa la instancia de Firestore

const app = express();

app.use(express.json());
app.use(cors());
app.use("/Mercado_Pago", Mercado_Pago_Router);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la api de integración de pago!');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
