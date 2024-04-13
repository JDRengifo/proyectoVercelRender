// const { getCreateBdCountry } = require("../controllers/getCreateBdCountry");


// getCreateBdCountry() //! FALTA ARREGLAR ESTO

// Ejemplo de ruta restringida por clave //? de aca hacia abajo voy a intentar crear ruta restringida

// const { CLAVE_CREAR_BDD } = process.env;

// app.get('/cargaDeBdd', async (req, res) => {
//     const providedKey = req.query.key; // Obtener la clave de la consulta
  
//     // Verificar si la clave es válida (puedes usar una comparación más segura)
//     if (providedKey === process.env.CLAVE_CREAR_BDD) {
//      const crearBdd = await getCreateBdCountry()
//       // Acceso permitido
//       res.status(200).json({ message: 'Acceso permitido a la ruta restringida' });
//     } else {
//       // Acceso denegado
//       res.status(403).json({ message: 'Acceso denegado' });
//     }
//   });