const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const Usuario = moongose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
// Exportar el modelo para usarlo en otros archivos