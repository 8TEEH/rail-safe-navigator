
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm your health assistant. How can I help you today?", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Health Assistant Chatbot</h2>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="h-[400px] overflow-y-auto mb-4 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${
                  message.isUser ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.isUser
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your symptoms..."
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
