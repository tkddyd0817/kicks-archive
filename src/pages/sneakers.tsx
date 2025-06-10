import { useQuery } from '@tanstack/react-query';

interface Sneaker {
  id: string;
  name: string;
  brand: string;
  releaseDate: string;
  image: string;
  price: string;
  [key: string]: unknown;
}

async function fetchSneakers(): Promise<{
  releases: Sneaker[];
  upcoming: Sneaker[];
  restocks: Sneaker[];
}> {
  const res = await fetch('/api/sneakers');
  if (!res.ok) throw new Error('데이터를 불러오지 못했습니다');
  return res.json();
}

export default function SneakersPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['sneakers'],
    queryFn: fetchSneakers,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

  return (
    <div>
      <h2>이미 발매된 신발</h2>
      <ul>
        {data.releases.map((sneaker) => (
          <li key={sneaker.id}>
            <img src={sneaker.image} alt={sneaker.name} width={80} />
            <div>{sneaker.name} ({sneaker.brand}) - {sneaker.releaseDate} - {sneaker.price}</div>
          </li>
        ))}
      </ul>
      <h2>발매 예정 신발</h2>
      <ul>
        {data.upcoming.map((sneaker) => (
          <li key={sneaker.id}>
            <img src={sneaker.image} alt={sneaker.name} width={80} />
            <div>{sneaker.name} ({sneaker.brand}) - {sneaker.releaseDate} - {sneaker.price}</div>
          </li>
        ))}
      </ul>
      <h2>리스탁(재입고) 정보</h2>
      <ul>
        {data.restocks.map((sneaker) => (
          <li key={sneaker.id}>
            <img src={sneaker.image} alt={sneaker.name} width={80} />
            <div>{sneaker.name} ({sneaker.brand}) - {sneaker.releaseDate} - {sneaker.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

