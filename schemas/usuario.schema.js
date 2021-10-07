import Mongoose from "mongoose";

const UsuarioSchema = new Mongoose.Schema(
    {
       
        nome: {
            type: String,
            
        },
        nomeDeUsuario: {
            type: String,
            
        },
        senha: {
            type: String,
           
        },
        data: {
            type: Date,
            default: Date.now
        }
    }, { collection: 'usuarios' }
)

export default UsuarioSchema