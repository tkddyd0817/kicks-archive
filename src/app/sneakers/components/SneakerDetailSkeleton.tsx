import React from "react";

export default function SneakerDetailSkeleton() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f6fa",
      }}
    >
      <div
        style={{
          padding: "18px 12px 14px 12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "260px",
          height: "100%",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          animation: "skeleton-blink 1.2s infinite ease-in-out alternate",
        }}
      >
        <div
          style={{
            width: 120,
            height: 80,
            borderRadius: 10,
            background: "#e5e7eb",
            marginBottom: 16,
          }}
        />
        <div
          style={{
            width: 90,
            height: 18,
            borderRadius: 6,
            background: "#e5e7eb",
            marginBottom: 8,
          }}
        />
        <div
          style={{
            width: 60,
            height: 14,
            borderRadius: 6,
            background: "#e5e7eb",
            marginBottom: 6,
          }}
        />
        <div
          style={{
            width: 70,
            height: 14,
            borderRadius: 6,
            background: "#e5e7eb",
            marginBottom: 6,
          }}
        />
        <div
          style={{
            width: 40,
            height: 16,
            borderRadius: 6,
            background: "#e5e7eb",
          }}
        />
      </div>
      <style>{`
        @keyframes skeleton-blink {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
