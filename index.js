import express from "express"
import usuarioRoutes from "./routers/usuario.routes.js"
import swaggerUi from 'swagger-ui-express'
import { swaggerDocument } from "./doc.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use('/usuarios', usuarioRoutes)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use((error, req, res, next) => {

    res.json({ erro: error.message })
})
app.listen(3000, () => { console.log('API INICIADA!') })