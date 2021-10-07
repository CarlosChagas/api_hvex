import { conexao } from "./db.js";
import UsuarioSchema from "../schemas/usuario.schema.js"

async function cadastrarUsuario(usuario) {
    try {
        const mongoose = await conexao()
        const Usuario = mongoose.model("Usuario", UsuarioSchema)
        usuario = new Usuario(usuario)
        await usuario.save()

    } catch (error) {
        throw error
    }
}

async function pegarUsuarioPorId(id){
    try {
        const mongoose = await conexao()
        const Usuario = mongoose.model("Usuario", UsuarioSchema)
        const query =  Usuario.findOne({id})
        return await query.exec()
    } catch (error) {
        throw error
    }
}

async function atualizarUsuario(usuario){
    try {
        const mongoose = await conexao()
        const Usuario = mongoose.model("Usuario", UsuarioSchema)
        await Usuario.findOneAndUpdate({id: usuario.id}, usuario)
        
    } catch (error) {
        throw error
    }
}

async function excluirUsuario(id){
    try {
        const mongoose = await conexao()
        const Usuario = mongoose.model("Usuario", UsuarioSchema)
        await Usuario.deleteOne({id})
    } catch (error) {
        throw error
    }
}

export default {
    cadastrarUsuario,
    pegarUsuarioPorId,
    atualizarUsuario,
    excluirUsuario
}