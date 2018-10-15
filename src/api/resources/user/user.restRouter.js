import express from 'express'
import userController from './user.controller'

export const userRouter = express.Router()

//id will be ran has a fourth argument to findByParam

userRouter.param('id', userController.findByParam)

userRouter.route('/')
  .get(userController.getAll)
  .post(userController.createOne)

userRouter.route('/:id') // ----> get the id, and attachs the document to the documents below
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.createOne)
