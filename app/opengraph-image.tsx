import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Rory";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1e293b",
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 40,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#cbd5e1",
            paddingBottom: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 120, letterSpacing: 1.2 }}>
              Rory Roccio
            </span>
            <span style={{ fontSize: 60 }}>Software Engineer</span>
          </div>
          <em style={{ fontSize: 30 }}>
            Code that is ⚡ fast, 💄 elegant, 🧪 tested, 📝 documented, 📈
            scalable
          </em>
        </div>
      </div>
    ),
    size
  );
}
