// /pages/api/sneakers.ts
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
  res: NextApiResponse<
    { releases: Sneaker[]; upcoming: Sneaker[] } | { error: string }
  >
) {
  // 쿼리스트링에서 키워드 추출 (기본값: "Jordan 1")
  const { keyword = "Jordan 1" } = req.query;

  sneaks.getProducts(
    keyword as string,
    100,
    (err: unknown, products: Sneaker[]) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "신발 정보를 불러오지 못했습니다." });
        return;
      }

      const today = new Date();

      // 발매일 기준 분류
      const releases: Sneaker[] = [];
      const upcoming: Sneaker[] = [];

      products.forEach((sneaker) => {
        if (!sneaker.releaseDate) {
          releases.push(sneaker);
          return;
        }
        const releaseDate = new Date(sneaker.releaseDate);
        if (isNaN(releaseDate.getTime())) {
          releases.push(sneaker);
          return;
        }
        if (releaseDate > today) {
          upcoming.push(sneaker);
        } else {
          releases.push(sneaker);
        }
      });

      res.status(200).json({
        releases,
        upcoming,
      });
    }
  );
}
