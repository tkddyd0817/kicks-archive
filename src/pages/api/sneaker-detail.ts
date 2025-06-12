import type { NextApiRequest, NextApiResponse } from "next";
import Sneaks from "sneaks-api";

const sneaks = new Sneaks();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { styleID } = req.query;
  if (!styleID) {
    res.status(400).json({ error: "styleID가 필요합니다." });
    return;
  }
  sneaks.getProductDetails(
    styleID as string,
    (err: unknown, product: unknown) => {
      if (err) {
        res.status(500).json({ error: "상세 정보를 불러오지 못했습니다." });
        return;
      }
      res.status(200).json(product);
    }
  );
}