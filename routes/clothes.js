import { Router } from "express"
import { ClorhingController } from '../controllers/clothing.js'

export const createClothingRouter = ({ clothingModel }) => {
  const clothingRouter = Router()

  const clothingController = new ClorhingController({ clothingModel })

  clothingRouter.get('/', clothingController.getAll)
  clothingRouter.post('/', clothingController.create)

  clothingRouter.get('/:id', clothingController.getById)
  clothingRouter.delete('/:id', clothingController.delete)
  clothingRouter.put('/:id', clothingController.update)

  return clothingRouter
}