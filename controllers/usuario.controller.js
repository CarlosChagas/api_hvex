import usuarioService from "../services/usuario.service.js"
import bcrypt from "bcrypt"

async function cadastrarUsuario(req, res, next) {
    try {
        let usuario = req.body;
        const salt = await bcrypt.genSalt(10)
        usuario.senha = await bcrypt.hash(usuario.senha, salt)

        await usuarioService.cadastrarUsuario(usuario)

        if (res.status('200')) {
            res.json({ status: "201", mensagem: "Usuário Cadastrado!" })
        }

    } catch (error) {
        next(error)
    }
}

async function pegarUsuarioPorId(req, res, next) {
    try {
        res.json(await usuarioService.pegarUsuarioPorId(req.params.id))

    } catch (error) {
        next(error)
    }
}

async function atualizarUsuario(req, res, next) {
    try {

        await usuarioService.atualizarUsuario(req.body)
        if (res.status('200')) {
            res.json({ status: '200', mensagem: 'Usuário Atualizado!' },)

        }

    } catch (error) {
        next(error)
    }
}

async function excluirUsuario(req, res, next) {
    try {
        await usuarioService.excluirUsuario(req.params.id)
        if (res.status('200')) {
            res.json({ status: "201", mensagem: "Usuário Excluido!" })
        }
    } catch (error) {
        next(error)
    }
}

export default {
    cadastrarUsuario,
    pegarUsuarioPorId,
    atualizarUsuario,
    excluirUsuario
}
