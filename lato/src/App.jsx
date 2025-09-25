import React, { useState } from "react";
import { askAi } from "./lib/ai";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse("");

    const aiResponse = await askAi(prompt);
    setResponse(aiResponse);

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200" style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 ">
           AI Chat
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Type your question..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md disabled:opacity-50 transition"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Ask"}
          </button>
        </form>

        <div className="bg-gray-50 border rounded-xl p-4 shadow-inner">
          <p className="text-gray-700">
            <span className="font-semibold">You typed:</span> {prompt || "—"}
          </p>
          <p className="mt-3 text-green-600 font-medium">
            {isLoading ? "🤔 loading..." : response}
          </p>
        </div>
      </div>
    </div>
  );
}
