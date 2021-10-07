import express from "express"
import usuarioRoutes from "./routers/usuario.routes.js"

const app = express()

app.use(express.json())

app.use('/usuarios', usuarioRoutes)

app.use((error, req, res, next) => {

    res.json({ erro: error.message })
})
app.listen(3000, () => { console.log('API INICIADA!') })