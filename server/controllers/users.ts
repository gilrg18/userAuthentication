import { Request, Response } from "express"

export const saveUser = (req: Request, res: Response) => {
  res.status(200).json({message: 'hola'})
}

export const getUser = () => {

}
