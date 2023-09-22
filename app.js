// iniciar conexion con el serviods usando EM6
import express from "express"
import { createClothingRouter } from "../routes/clothes"
import { corsMiddleware } from "../middlewares/cors"


export const createApp = ({ movieModel }) => {
	const app = express()

  app.use(corsMiddleware())
  app.disable('x-powered-by')

	app.use('/clothes', createClothingRouter({ clothingModel }))

  const PORT = process.env.PORT ?? 3000 

	app.listen(PORT, () => {
		console.log("server listening on port http://localhost:${PORT}")
	})

}
