// chatbot.jsx
"use client";
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      const response = await axios.post(
        'https://aistudio.google.com/prompts/1rJgZemTbFUPxAk6Jq8wGPZx-gubxxt9W', // Replace with Gemini API endpoint
        {
          prompt: input,
          model: 'gemini-001', // Replace with the correct model ID
        },
        {
          headers: {
            Authorization:  `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`, // Add your API key
          },
        }
      );

      const botReply = response.data.choices[0]?.text || 'No response';
      setMessages([...messages, { user: input, bot: botReply }]);
      setInput('');
    } catch (error) {
      console.error('Error communicating with Gemini API:', error);
      setMessages([...messages, { user: input, bot: 'Error fetching response' }]);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg w-full">
      <div className="mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <p><strong>You:</strong> {msg.user}</p>
            <p><strong>Bot:</strong> {msg.bot}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
