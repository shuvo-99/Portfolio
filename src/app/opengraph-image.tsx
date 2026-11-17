import { ImageResponse } from "next/og";

export const alt = "Md. Anonto Shuvo, Software Engineer & Educator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 50%, #eef2ff 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, color: "#2563eb", fontWeight: 700 }}>
          Shuvo.
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 40,
            letterSpacing: "-0.03em",
          }}
        >
          <span>Software Engineer &amp;</span>
          <span style={{ color: "#4f46e5" }}>Educator</span>
        </div>
        <div style={{ fontSize: 32, color: "#475569", marginTop: 36 }}>
          Software Engineer @ The Product Dev · Lecturer @ BRAC University
        </div>
      </div>
    ),
    size,
  );
}
