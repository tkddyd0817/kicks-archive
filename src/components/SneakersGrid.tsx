import React from "react";

interface Sneaker {
  styleID: string;
  shoeName: string;
  brand: string;
  releaseDate: string;
  thumbnail: string;
  retailPrice: number;
  [key: string]: unknown;
}

interface SneakersGridProps {
  sneakers: Sneaker[];
}

export default function SneakersGrid({ sneakers }: SneakersGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "32px 16px",
        margin: "24px 0 32px 0",
      }}
    >
      {sneakers.map((sneaker) => (
        <div
          key={sneaker.styleID}
          style={{
            padding: "18px 12px 14px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "260px",
            height: "100%",
          }}
        >
          <img
            src={sneaker.thumbnail as string}
            alt={sneaker.shoeName as string}
            style={{
              width: 120,
              height: 80,
              objectFit: "contain",
              marginBottom: 16,
            }}
          />
          <div
            style={{
              fontWeight: 600,
              fontSize: 15,
              textAlign: "center",
              marginBottom: 6,
              minHeight: 40,
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
      ))}
    </div>
  );
}
