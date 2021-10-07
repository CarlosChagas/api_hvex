import { conexao } from "./db.js";
import UsuarioSchema from "../schemas/usuario.schema.js"

async function cadastrarUsuario(usuario) {
    try {
        const mongoose = await conexao()
        const Usuario = mongoose.model("Usuario", UsuarioSchema)
        usuario = new Usuario(usuario)
        await usuario.save()

    } catch (error) {
        throw new Error('Erro no cadastro')
    }
}

async function pegarUsuarioPorId(id) {
    try {

        const mongoose = await conexao()
        const Usuario = mongoose.model("Usuario", UsuarioSchema)
        const query = await Usuario.findOne({ _id: id })
        return query
    } catch (error) {
        throw new Error('Sem registro')
    }
}

async function atualizarUsuario(usuario) {
    try {
        const mongoose = await conexao()
        const Usuario = mongoose.model("Usuario", UsuarioSchema)
        const query = await Usuario.findOneAndUpdate({ _id: usuario._id }, usuario)
        return query
    } catch (error) {
        throw new Error('Erro na atualização')
    }
}

async function excluirUsuario(id) {
    try {
        const mongoose = await conexao()
        const Usuario = mongoose.model("Usuario", UsuarioSchema)
        await Usuario.deleteOne({ _id: id })

    } catch (error) {
        throw new Error('Usuario não excluido')
    }
}

export default {
    cadastrarUsuario,
    pegarUsuarioPorId,
    atualizarUsuario,
    excluirUsuario
}