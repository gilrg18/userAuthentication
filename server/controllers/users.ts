import { Request, Response } from "express"
import { addDoc, collection, where, query, getDocs } from "firebase/firestore";
import bcrypt from 'bcrypt';
import db from "../config/firebase";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../constants";

export const saveUser = async (req: Request, res: Response) => {
  const user = req.body
  const hashedPassword = await bcrypt.hash(user.password, 10);

  // Add a new document in collection "users"
  await addDoc(collection(db, 'users'), {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: hashedPassword,
  });
  res.status(200).json({message: 'User registered successfully'})
}

export const login = async(req: Request, res: Response) => {
  const { email, password } = req.body;
  const q = query(collection(db, 'users'), where('email', '==', email))

  const docSnap = (await getDocs(q)).docs
  const user = docSnap[0].data();
  if (!user) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
  return res.status(401).json({ error: 'Authentication failed' });
  }
  const token = jwt.sign({ email: user.email }, SECRET_KEY, {
    expiresIn: '1h',
  });
  res.status(200).json({ token });
}

export const getUser = async(req: Request, res: Response) => {
  res.status(200).json({message: 'Protected route accessed'})
}
