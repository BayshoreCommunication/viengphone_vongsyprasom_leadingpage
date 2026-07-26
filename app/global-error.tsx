"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            background: "#0c0c0c",
            color: "#e8e8e8",
            textAlign: "center",
            padding: "24px",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", fontWeight: 400 }}>Something went wrong.</h1>
          <p style={{ color: "#c9c9c9" }}>Please try again, or contact our office directly.</p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "8px",
              padding: "10px 24px",
              border: "1px solid #c9c9c9",
              borderRadius: "30px",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
