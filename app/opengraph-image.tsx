import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Pixo Studios — Premium Design & Development Studio India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#060612",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Pixo Studios
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 700,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Premium Design & Development Studio
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              marginTop: 16,
            }}
          >
            {["Websites", "Brand Identity", "E-Commerce", "AI Solutions"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    fontSize: 18,
                    color: "#ff6321",
                    padding: "8px 20px",
                    border: "1px solid rgba(255,99,33,0.3)",
                    borderRadius: 8,
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.4)",
              marginTop: 24,
            }}
          >
            pixostudios.in
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
