
export default function SneakersGridSkeleton() {
  // 12개의 스켈레톤 아이템
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "32px 16px",
        margin: "24px 0 32px 0",
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          style={{
            // background: "#f3f4f6",
            // borderRadius: "16px",
            // boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: "18px 12px 14px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "260px",
            height: "100%",
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
      ))}
      <style>{`
        @keyframes skeleton-blink {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
