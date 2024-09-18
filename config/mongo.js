const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    try {
        await mongoose.connect(DB_URI);
        console.log("Conexión exitosa a la base de datos");
    } catch (err) {
        console.error("Error al conectar a la base de datos:", err);
    }
}

module.exports = dbConnect;
