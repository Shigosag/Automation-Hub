import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [lastRun, setLastRun] = useState(null);

  const handleRun = async () => {
    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/automation/run");

      setLastRun(new Date().toLocaleString());

      alert("Automation completed");
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #312e81, #000000, #7f1d1d)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#ef4444",
          margin: 0,
        }}
      >
        🚀 Automation Hub
      </h1>

      <p style={{ color: "#facc15", margin: 0 }}>
        Powered by Shigosag 🔥
      </p>

      <button
        onClick={handleRun}
        disabled={loading}
        style={{
          backgroundColor: "#dc2626",
          color: "white",
          padding: "16px 32px",
          border: "none",
          borderRadius: "16px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        {loading ? "Processing..." : "Run Automation"}
      </button>

      {lastRun && (
        <p
          style={{
            color: "#34d399",
            margin: 0,
          }}
        >
          ✅ Last Run: {lastRun}
        </p>
      )}
    </main>
  );
}