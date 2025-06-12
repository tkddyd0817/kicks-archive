"use client";
import SneakerDetailSkeleton from "@/app/sneakers/components/SneakerDetailSkeleton";
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

  if (!sneaker) return <SneakerDetailSkeleton/>;

  return (
   <div
  style={{
    padding: "18px 12px 14px 12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "260px",
    height: "100%",
    cursor: "pointer",
    // borderRadius: "16px",
    // background: "#fff",
    // boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    // border: "1px solid #f0f0f0",
  }}
 
>
  <img
    src={sneaker.thumbnail}
    alt={sneaker.shoeName}
    style={{
      width: 120,
      height: 80,
      objectFit: "contain",
      marginBottom: 16,
      // borderRadius: "8px",
      // background: "#f3f4f6",
    }}
  />
  <div
    style={{
      fontWeight: 600,
      fontSize: 15,
      textAlign: "center",
      marginBottom: 6,
      minHeight: 40,
      lineHeight: "1.3",
    }}
  >
    {sneaker.shoeName}
  </div>
  <div style={{ color: "#888", fontSize: 13, marginBottom: 4 }}>
    {sneaker.brand}
  </div>
  <div style={{ color: "#444", fontSize: 13, marginBottom: 4 }}>
    {sneaker.releaseDate}
  </div>
  <div style={{ color: "#222", fontWeight: 700, fontSize: 15 }}>
    {sneaker.retailPrice ? `${sneaker.retailPrice}$` : "-"}
  </div>
</div>

  );
}





