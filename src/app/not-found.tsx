import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          background: "#0a0a0a",
          color: "#ededed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "2rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#888",
              marginBottom: "1rem",
            }}
          >
            404
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              margin: "0 0 0.75rem",
            }}
          >
            Page not found
          </h1>
          <p style={{ color: "#888", margin: "0 0 2rem" }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/en"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.625rem 1.25rem",
              border: "1px solid #333",
              borderRadius: "0.5rem",
              color: "#ededed",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            ← Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
