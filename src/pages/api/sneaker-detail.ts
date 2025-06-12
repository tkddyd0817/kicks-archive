import type { NextApiRequest, NextApiResponse } from "next";
import Sneaks from "sneaks-api";

interface Sneaker {
  styleID: string;
  shoeName: string;
  brand: string;
  releaseDate: string;
  thumbnail: string;
  retailPrice: number;
  [key: string]: unknown;
}

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
  sneaks.getProducts(styleID as string, 10, (err: unknown, products: Sneaker[]) => {
    if (err) {
      res.status(500).json({ error: "상세 정보를 불러오지 못했습니다." });
      return;
    }
    // styleID가 정확히 일치하는 상품만 반환
    const product = products.find((p) => p.styleID === styleID);
    if (!product) {
      res.status(404).json({ error: "해당 styleID의 상품을 찾을 수 없습니다." });
      return;
    }
    res.status(200).json(product);
  });
}

