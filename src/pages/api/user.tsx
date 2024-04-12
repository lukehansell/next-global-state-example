import { NextApiRequest, NextApiResponse } from "next";

export type ResponseData = {
  name: string,
  age: number
} | {
  error: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (!req.query.name || typeof req.query.name !== 'string') {
    return res.status(400).json({
      error: 'name must be a string'
    })
  }

  return res.status(200).json({
    name: req.query.name,
    age: Math.random()*100
  })
}