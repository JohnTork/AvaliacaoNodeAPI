import express from 'express'
import router from './src/router/filme.js'

const app = express();
app.use(express.json())

app.use("/api", router)

app.get("/api/listar", (req, res) => {
    res.send("Escolha a opção")
})



app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})
