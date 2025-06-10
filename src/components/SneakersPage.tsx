import { useQuery } from "@tanstack/react-query";

interface Sneaker {
  styleID: string;
  shoeName: string;
  brand: string;
  releaseDate: string;
  thumbnail: string;
  retailPrice: number;
  [key: string]: unknown;
}

async function fetchSneakers(): Promise<Sneaker[]> {
  const res = await fetch("/api/sneakers");
  if (!res.ok) throw new Error("데이터를 불러오지 못했습니다");
  return res.json();
}

export default function SneakersPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sneakers"],
    queryFn: fetchSneakers,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

  return (
    <div>
      <h2>신발 정보</h2>
      <ul>
        {data.map((sneaker) => (
          <li key={sneaker.styleID}>
            <img
              src={sneaker.thumbnail as string}
              alt={sneaker.shoeName as string}
              width={80}
            />
            <div>
              {sneaker.shoeName} ({sneaker.brand}) - {sneaker.releaseDate} -{" "}
              {sneaker.retailPrice}$
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
