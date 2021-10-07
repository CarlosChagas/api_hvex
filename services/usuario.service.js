import usuarioRepository from "../repositories/usuario.repository.js"

async function cadastrarUsuario(usuario) {

    return await usuarioRepository.cadastrarUsuario(usuario)

}

async function pegarUsuarioPorId(id) {

    return await usuarioRepository.pegarUsuarioPorId(id)

}
async function atualizarUsuario(usuario) {

    return await usuarioRepository.atualizarUsuario(usuario)

}

async function excluirUsuario(id) {

    return await usuarioRepository.excluirUsuario(id)

}

export default {
    cadastrarUsuario,
    pegarUsuarioPorId,
    atualizarUsuario,
    excluirUsuario
}