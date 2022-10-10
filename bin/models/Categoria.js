const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    name: String,
    descripcion : String,
    color : String,
    urlImagen : String,
    recursos : [
    {
        nombre : {type : String, required : true, unique : false},
        descripcion : {type : String, required : true, unique : false},
        urlrecurso : {type : String, required : true, unique : false},
        urlimagen : {type : String, required : true, unique : false},
        color : {type : String, required : true, unique : false},
        creador : {type : String, required : true, unique : false},
    }],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

var Categoria = mongoose.model("Categoria", CategoriaSchema);

module.exports = Categoria;
