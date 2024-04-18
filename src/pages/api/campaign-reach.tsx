import { NextApiRequest, NextApiResponse } from "next";

export type ResponseData = {
  reach: number
} | {
  error: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (!req.query.minAge) {
    return res.status(400).json({
      error: 'minAge must be provided'
    })
  }

  if (!req.query.maxAge) {
    return res.status(400).json({
      error: 'maxAge must be provided'
    })
  }

  return res.status(200).json({
    reach: Math.random()*100
  })
}