import express from "express"

const app = express()

app.use(express.json())

app.post('/usuarios', (req, res) => { res.json("ROTA USUARIO!") })


app.listen(3000, () => { console.log('API INICIADA!') })