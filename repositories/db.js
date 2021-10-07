
import mongoose from "mongoose"

async function conexao() {
    const uri = 'mongodb+srv://chagas:hvex2021@cluster0.qaecb.mongodb.net/hvexdb?retryWrites=true&w=majority'
    
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

export { conexao }