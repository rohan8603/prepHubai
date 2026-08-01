import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Bot, Send, User } from "lucide-react";

function AIAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const subjectName = location.state?.subjectName;

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const currentInput = input;

    setMessages((prev) => [
      ...prev,
      { text: currentInput, sender: "user" },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://prephubai.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: subjectName
            ? `Subject: ${subjectName}. Student question: ${currentInput}`
            : currentInput,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          text: data.reply || "Sorry, I could not understand.",
          sender: "ai",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Backend not connected ❌",
          sender: "ai",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-700 text-white rounded-[2rem] p-8 md:p-10 shadow-2xl">
        <p className="bg-white/20 inline-block px-4 py-1 rounded-full text-sm mb-4">
          AI STUDY ASSISTANT
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold">
          🤖 PrepHub AI Assistant
        </h1>

        <p className="text-blue-100 mt-3">
          {subjectName
            ? `Subject Tutor Mode: ${subjectName}`
            : "Ask coding, placement, exam and study doubts instantly."}
        </p>
      </section>

      <section className="bg-white rounded-[2rem] shadow-2xl border overflow-hidden">
        <div className="bg-gray-50 border-b px-6 py-4 flex items-center gap-3">
          <div className="w-11 h-11 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
            <Bot size={24} />
          </div>

          <div>
            <h2 className="font-extrabold text-gray-900">PrepHub AI</h2>
            <p className="text-sm text-green-600 font-semibold">
              Online • Ready to help
            </p>
          </div>
        </div>

        <div className="h-[480px] overflow-y-auto p-5 bg-gradient-to-b from-blue-50 to-white">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-700 rounded-3xl flex items-center justify-center mb-5">
                <Bot size={42} />
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900">
                Start chatting with AI
              </h3>

              <p className="text-gray-500 mt-2 max-w-md">
                Ask about Java, DBMS, OOPs, placement, resume, or your selected subject.
              </p>
            </div>
          )}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-5 flex gap-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={18} />
                </div>
              )}

              <div
                className={`max-w-[80%] px-5 py-3 rounded-3xl shadow-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-white text-gray-800 border rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === "user" && (
                <div className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={18} />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center">
              <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>

              <div className="bg-white border px-5 py-3 rounded-3xl rounded-bl-sm shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-5 border-t bg-white">
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask something..."
              className="flex-1 px-5 py-4 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-6 rounded-2xl font-bold transition flex items-center gap-2"
            >
              <Send size={20} />
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AIAssistant;