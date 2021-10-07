import express from "express"
import usuarioController from "../controllers/usuario.controller.js"

const router = express.Router()

router.post('/', usuarioController.cadastrarUsuario)
router.get('/:id', usuarioController.pegarUsuarioPorId)
router.put('/', usuarioController.atualizarUsuario)
router.delete('/:id', usuarioController.excluirUsuario)

export default router
