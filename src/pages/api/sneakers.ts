// /pages/api/sneakers.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Sneaks from 'sneaks-api';

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
  res: NextApiResponse<Sneaker[] | { error: string }>
) {
  sneaks.getProducts("Jordan 1", 20, (err: unknown, products: Sneaker[]) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: '신발 정보를 불러오지 못했습니다.' });
      return;
    }
    res.status(200).json(products);
  });
}


// // /pages/api/sneakers.ts
// import type { NextApiRequest, NextApiResponse } from 'next';

// // 신발 정보 타입 정의 (예시)
// interface Sneaker {
//   id: string;
//   name: string;
//   brand: string;
//   releaseDate: string;
//   image: string;
//   price: string;
//   [key: string]: unknown; // 기타 필드
// }

// interface SneakersApiResponse {
//   releases: Sneaker[];
//   upcoming: Sneaker[];
//   restocks: Sneaker[];
// }

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<SneakersApiResponse | { error: string }>
// ) {
//   try {
//     // 1. 최신 발매/과거 발매/예정 신발 정보
//     const releasesRes = await fetch('https://www.thesolerestocks.com/api/releases');
//     const releases = await releasesRes.json();

//     // 2. 발매 예정 신발 정보
//     const upcomingRes = await fetch('https://www.thesolerestocks.com/api/upcoming');
//     const upcoming = await upcomingRes.json();

//     // 3. 리스탁(재입고) 정보
//     const restocksRes = await fetch('https://www.thesolerestocks.com/api/restocks');
//     const restocks = await restocksRes.json();

//     res.status(200).json({
//       releases,
//       upcoming,
//       restocks,
//     });
//   } catch (error: unknown) {
//     console.error(error);
//     res.status(500).json({ error: '신발 정보를 불러오지 못했습니다.' });
//   }
// }

