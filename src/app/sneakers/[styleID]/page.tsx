"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Sneaker {
  styleID: string;
  shoeName: string;
  brand: string;
  releaseDate: string;
  thumbnail: string;
  retailPrice: number;
  [key: string]: unknown;
}

export default function SneakerDetailPage() {
  const params = useParams();
  const styleID = Array.isArray(params?.styleID) ? params?.styleID[0] : params?.styleID;
  const [sneaker, setSneaker] = useState<Sneaker | null>(null);

  useEffect(() => {
    if (!styleID) return;
    fetch(`/api/sneaker-detail?styleID=${styleID}`)
      .then(res => res.json())
      .then(data => setSneaker(data));
  }, [styleID]);

  if (!sneaker) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>{sneaker.shoeName}</h1>
      <img src={sneaker.thumbnail} alt={sneaker.shoeName} />
      <div>브랜드: {sneaker.brand}</div>
      <div>발매일: {sneaker.releaseDate}</div>
      <div>가격: {sneaker.retailPrice}$</div>
      <div>Style ID: {sneaker.styleID}</div>
    </div>
  );
}

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// interface Sneaker {
//   styleID: string;
//   shoeName: string;
//   brand: string;
//   releaseDate: string;
//   thumbnail: string;
//   retailPrice: number;
//   [key: string]: unknown;
// }

// export default function SneakerDetailPage() {
//   const router = useRouter();
//   const { styleID } = router.query;
//   const [sneaker, setSneaker] = useState<Sneaker | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!styleID) return;
//     // styleID로 상세 정보 fetch (API 라우트 필요)
//     fetch(`/api/sneaker-detail?styleID=${styleID}`)
//       .then(res => res.json())
//       .then(data => {
//         setSneaker(data);
//         setLoading(false);
//       });
//   }, [styleID]);

//   if (loading) return <div>로딩 중...</div>;
//   if (!sneaker) return <div>신발 정보를 불러올 수 없습니다.</div>;

//   return (
//     <div style={{ maxWidth: 600, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
//       <img src={sneaker.thumbnail} alt={sneaker.shoeName} style={{ width: 240, height: 160, objectFit: "contain", marginBottom: 24 }} />
//       <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>{sneaker.shoeName}</h1>
//       <div style={{ fontSize: 18, color: "#2563eb", fontWeight: 600, marginBottom: 8 }}>{sneaker.brand}</div>
//       <div style={{ fontSize: 16, color: "#444", marginBottom: 8 }}>발매일: {sneaker.releaseDate}</div>
//       <div style={{ fontSize: 18, color: "#222", fontWeight: 700, marginBottom: 8 }}>가격: {sneaker.retailPrice ? `${sneaker.retailPrice}$` : "-"}</div>
//       <div style={{ color: "#888", fontSize: 14 }}>Style ID: {sneaker.styleID}</div>
//     </div>
//   );
// }