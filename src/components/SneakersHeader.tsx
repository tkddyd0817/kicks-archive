import React from "react";
import { FaBell } from "react-icons/fa";

interface SneakersHeaderProps {
  keyword: string;
  setKeyword: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export default function SneakersHeader({
  keyword,
  setKeyword,
  onSearch,
}: SneakersHeaderProps) {
  return (
    <header
      style={{
        display: "grid",
        gridTemplateColumns: "170px 1fr 420px",
        alignItems: "center",
        width: "100%",
        padding: "0 16px",
        height: 80,
        background: "#fff",
        borderBottom: "1px solid #ededed",
        boxSizing: "border-box",
      }}
    >
      {/* 로고 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#2563eb",
              fontFamily: "Segoe UI",
              letterSpacing: -2,
              userSelect: "none",
              marginBottom: -6,
              marginLeft: 30,
            }}
          >
            Kicks
          </span>
          <span
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#2563eb",
              fontFamily: "Segoe UI",
              letterSpacing: -2,
              userSelect: "none",
              marginLeft: 18,
              marginTop: 0,
            }}
          >
            archive
          </span>
        </div>
      </div>

      {/* 검색창 */}
      <form
        onSubmit={onSearch}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "flex-end",
         marginRight: "100px",
        }}
      >
        <div style={{ position: "relative", width: 600, maxWidth: 600 }}>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search for brand, color, etc."
            style={{
              width: 600,
              height: 40,
              paddingLeft: 44,
              paddingRight: 16,
              borderRadius: 10,
              background: "#fafafa",
              border: "1px solid #d1d5db",
              fontSize: 16,
              color: "#222",
              outline: "none",
              boxSizing: "border-box",
              marginTop: -4,
            }}
          />
          <svg
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#888",
            }}
            width={18}
            height={18}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="17" y1="17" x2="21" y2="21" />
          </svg>
        </div>
      </form>

      {/* 네비게이션 + 버튼 */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: 15,
            color: "#222",
            textDecoration: "none",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          News
        </a>
        <a
          href="#"
          style={{
            fontSize: 15,
            color: "#222",
            textDecoration: "none",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          About
        </a>
        <a
          href="#"
          style={{
            fontSize: 15,
            color: "#222",
            textDecoration: "none",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          Help
        </a>
        <a
          href="#"
          style={{
            fontSize: 15,
            color: "#222",
            textDecoration: "none",
            fontWeight: 400,
            whiteSpace: "nowrap",
          }}
        >
          Sell
        </a>
        <button
          aria-label="Notifications"
          style={{
            position: "relative",
            padding: 7,
            borderRadius: "50%",
            background: "none",
            border: "none",
            cursor: "pointer",
            minWidth: 32,
            minHeight: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaBell style={{ color: "#222" }} size={18} />
          <span
            style={{
              position: "absolute",
              top: 7,
              right: 7,
              width: 8,
              height: 8,
              borderRadius: 4,
              background: "#17734a",
              display: "inline-block",
            }}
          ></span>
        </button>
        <a
          href="#"
          style={{
            padding: "0 24px",
            borderRadius: 20,
            border: "1.5px solid #222",
            color: "#222",
            background: "#fff",
            fontWeight: 600,
            fontSize: 16,
            textDecoration: "none",
            boxSizing: "border-box",
            transition: "background 0.2s",
            height: 40,
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            minWidth: 80,
          }}
        >
          Login
        </a>
        <a
          href="#"
          style={{
            padding: "0 24px",
            borderRadius: 20,
            background: "#222",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            textDecoration: "none",
            boxSizing: "border-box",
            transition: "background 0.2s",
            height: 40,
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            minWidth: 90,
          }}
        >
          Sign Up
        </a>
      </nav>
    </header>
  );
}
