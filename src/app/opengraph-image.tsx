import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/siteConfig";

export const runtime = "edge";

export const alt = `${siteConfig.product.name} — Curated Digital Assets for US Creators`;
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
          background: "linear-gradient(to bottom right, #080C15, #0F172A)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #3B82F6, #6366F1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            CT
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#93C5FD" }}>
            {siteConfig.brand.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.product.name}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#94A3B8",
              maxWidth: 950,
              lineHeight: 1.4,
            }}
          >
            2,500+ Vertical Videos, Editable Canva Templates &amp; Viral Hooks. Instant Access.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 30,
          }}
        >
          <div style={{ fontSize: 20, color: "#64748B" }}>
            Digital Download • Instant Delivery • Single Payment
          </div>
          <div
            style={{
              background: "#2563EB",
              color: "white",
              padding: "12px 28px",
              borderRadius: 12,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {siteConfig.product.priceUsd} USD
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
