import { NextApiRequest, NextApiResponse } from "next";
import { AgeReach } from "../../reachCalculator/platformReach/state/types/state";

export type ResponseData = AgeReach[] | {
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

  const minAge = parseInt(req.query.minAge.toString())
  const maxAge = parseInt(req.query.maxAge.toString())
  const arrayLength = maxAge - minAge + 1

  const results = Array.from(Array(arrayLength).keys()).map(i => ({
    age: minAge + i,
    reach: Math.random() * 100
  }))

  return res.status(200).json(results)
}