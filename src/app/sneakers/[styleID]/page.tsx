"use client";
import SneakerDetailSkeleton from "@/app/sneakers/components/SneakerDetailSkeleton";
import SneakersGrid from "@/app/sneakers/components/SneakersGrid";
import SneakersGridSkeleton from "@/app/sneakers/components/SneakersGridSkeleton";
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
  const styleID = Array.isArray(params?.styleID)
    ? params?.styleID[0]
    : params?.styleID;
  const [sneaker, setSneaker] = useState<Sneaker | null>(null);
  const [related, setRelated] = useState<Sneaker[]>([]);
  const [relatedLoading, setRelatedLoading] = useState(false);

  useEffect(() => {
    if (!sneaker) return;
    setRelatedLoading(true); // 로딩 시작
    const nameWords = sneaker.shoeName.split(" ");
    const modelKeyword = nameWords.slice(0, 3).join(" ");
    fetch(`/api/sneakers?keyword=${encodeURIComponent(modelKeyword)}`)
      .then((res) => res.json())
      .then((data) => {
        const relatedItems = [
          ...(data.releases || []),
          ...(data.upcoming || []),
        ].filter(
          (item: Sneaker) =>
            item.styleID !== sneaker.styleID &&
            item.shoeName.toLowerCase().includes(modelKeyword.toLowerCase())
        );
        setRelated(relatedItems.slice(0, 12));
        setRelatedLoading(false); // 로딩 끝
      });
  }, [sneaker]);

  useEffect(() => {
    if (!styleID) return;
    fetch(`/api/sneaker-detail?styleID=${styleID}`)
      .then((res) => res.json())
      .then((data) => setSneaker(data));
  }, [styleID]);

  if (!sneaker) return <SneakerDetailSkeleton />;

  return (
    <div>
      {/* 상세 카드 */}
      <div
        style={{
          padding: "18px 12px 14px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "260px",
          height: "100%",
          cursor: "pointer",
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

      {/* 연관 상품 섹션 */}
      {relatedLoading ? (
        <div style={{ width: "100%", marginTop: 40 }}>
          <h2
            style={{ fontSize: 20, fontWeight: 700, margin: "32px 0 16px 0" }}
          >
            연관 상품
          </h2>
          <SneakersGridSkeleton />
        </div>
      ) : (
        related.length > 0 && (
          <div style={{ width: "100%", marginTop: 40 }}>
            <h2
              style={{ fontSize: 20, fontWeight: 700, margin: "32px 0 16px 0" }}
            >
              연관 상품
            </h2>
            <SneakersGrid sneakers={related} />
          </div>
        )
      )}
    </div>
  );
}
