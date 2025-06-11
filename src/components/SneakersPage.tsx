import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SneakersHeader from "@/components/SneakersHeader";



interface Sneaker {
  styleID: string;
  shoeName: string;
  brand: string;
  releaseDate: string;
  thumbnail: string;
  retailPrice: number;
  [key: string]: unknown;
}

async function fetchSneakers(keyword: string): Promise<{ releases: Sneaker[]; upcoming: Sneaker[] }> {
  const res = await fetch(`/api/sneakers?keyword=${encodeURIComponent(keyword)}`);
  if (!res.ok) throw new Error("데이터를 불러오지 못했습니다");
  return res.json();
}

export default function SneakersPage() {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["sneakers", keyword],
    queryFn: () => fetchSneakers(keyword),
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <SneakersHeader keyword={keyword} setKeyword={setKeyword} onSearch={handleSearch} />
      {isLoading && <div>로딩 중...</div>}
      {isError && <div>에러가 발생했습니다.</div>}
      {data && (
        <>
          <h2>발매 예정 신발</h2>
          <ul>
            {data.upcoming.map((sneaker) => (
              <li key={sneaker.styleID}>
                <img src={sneaker.thumbnail as string} alt={sneaker.shoeName as string} width={80} />
                <div>
                  {sneaker.shoeName} ({sneaker.brand}) - {sneaker.releaseDate} - {sneaker.retailPrice}$
                </div>
              </li>
            ))}
          </ul>
          <h2>이미 발매된 신발</h2>
          <ul>
            {data.releases.map((sneaker) => (
              <li key={sneaker.styleID}>
                <img src={sneaker.thumbnail as string} alt={sneaker.shoeName as string} width={80} />
                <div>
                  {sneaker.shoeName} ({sneaker.brand}) - {sneaker.releaseDate} - {sneaker.retailPrice}$
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      
    </div>
  );
}


