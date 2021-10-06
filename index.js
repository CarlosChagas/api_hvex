import express from "express"

const app = express()

app.use(express.json())

app.use('/usuarios', (req, res) =>{res.json('Rotas usuarios!')})

app.listen(3000, ()=> {console.log('API INICIADA!')})