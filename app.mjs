// iniciar conexion con el serviods usando EM6
import express from "express"
import z from "zod"
import crypto from "node:crypto"

// iniciar conexion con el servidor
const app = express()

// configurar el puerto
const PORT = process.env.PORT ?? 3000

app.get("/", (req, res) => {
	res.send("Hello World")
})

app.use((req, res) => {
	res.status(404).send("404 Not Found")
})

// iniciar el servidor
app.listen(PORT, () => {
	console.log("server on port", PORT)
})


