import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../constants'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]
  if(!token) return res.status(401).json({error: 'Access denied'})
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    //@ts-ignore
    req.email = decoded.email;
    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Invalid token'})
  }
}
