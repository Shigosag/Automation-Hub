import { useState } from "react";
import { api } from "../services/api";

export default function Home() {
  const [loading, setLoading] =
    useState(false);

  const runAutomation = async () => {
    setLoading(true);

    await api.post("/automation/run");

    setLoading(false);

    alert("Automation completed");
  };

  return (
    <div className="p-8">
      <button
        onClick={runAutomation}
        className="bg-red-600 text-white px-6 py-3 rounded-xl"
      >
        {loading
          ? "Processing..."
          : "Run Automation"}
      </button>
    </div>
  );
}