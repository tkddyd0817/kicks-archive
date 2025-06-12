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




