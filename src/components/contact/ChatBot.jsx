import React, { useState, useRef, useEffect } from "react";
// import axios from "axios"; // Uncomment this line in your actual project
import { Bot, Send, User, X } from "lucide-react";
import { products } from "../../data/Product";// Adjust the import path as necessary

const TypingBubble = () => (
  <div className="flex items-center space-x-2 py-2">
    <Bot size={16} className="text-blue-600" />
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
    </div>
    <span className="text-sm text-gray-500">Mengetik...</span>
  </div>
);

const Chatbot = ({ isOpen, onClose}) => {
  const [messages, setMessages] = useState([
    {
      text: "Halo! Selamat datang di layanan sewa alat pesta kami. Saya siap membantu Anda merencanakan acara yang sempurna! 🎉\n\nSilakan ceritakan:\n• Jenis acara apa yang akan diselenggarakan?\n• Berapa jumlah tamu yang akan hadir?\n• Apakah acara indoor atau outdoor?\n• Adakah tema khusus untuk acara tersebut?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const apiKey = import.meta.env.VITE_APP_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    const newUserMessage = { 
      text: userMessage, 
      sender: "user", 
      timestamp: new Date() 
    };
    
    setInputText("");
    setIsLoading(true);

    setMessages((prevMessages) => [
      ...prevMessages,
      newUserMessage
    ]);

    const basePrompt = `
    Anda adalah assistant profesional untuk layanan sewa alat pesta. Berikut adalah daftar produk yang tersedia:

    ${products.map(
      (product) => `
    - ${product.name} (${product.category}): Rp ${product.price.toLocaleString()}
      Keterangan: ${product.ket}
    `
    ).join("\n")}

    Instruksi untuk memberikan respons yang rapi dan terstruktur:
    1. Gunakan format yang jelas dengan heading dan bullet points
    2. Berikan saran produk yang sesuai dengan kebutuhan customer
    3. Jelaskan mengapa produk tersebut cocok untuk acara mereka
    4. Berikan estimasi total biaya dalam format yang mudah dibaca
    5. Tanyakan detail tambahan jika diperlukan
    6. Gunakan bahasa yang ramah dan profesional
    7. Berikan alternatif jika budget terbatas
    8. Gunakan emoji untuk membuat respons lebih menarik
    9. Pisahkan setiap kategori produk dengan jelas
    10. Berikan rangkuman total di akhir jika menghitung biaya
    11. Jika pesan sudah terkirim, anda harus memberikan contact person untuk customer jika mereka ingin melakukan pemesanan : 0821216788 (Budi) atau Instagram @laatansapesta
    12. Jangan melayani customer yang meminta informasi di luar konteks sewa alat pesta, seperti produk lain atau layanan yang tidak relevan.

    Format respons yang diinginkan:
    - Gunakan **bold** untuk kategori produk
    - Gunakan • untuk bullet points
    - Pisahkan setiap bagian dengan baris kosong
    - Gunakan emoji yang relevan (🎉🎪🎵✨📸🪑🎭)

    Pesan customer: "${userMessage}"
    `;

    try {
      // Replace this with actual axios call in your project
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: basePrompt,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;
      const newBotMessage = { 
        text: botResponse, 
        sender: "bot", 
        timestamp: new Date() 
      };

      setMessages((prevMessages) => [
        ...prevMessages,
        newBotMessage
      ]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { 
          text: "Maaf, terjadi kesalahan saat menghubungi assistant. Silakan coba lagi dalam beberapa saat. 🙏", 
          sender: "bot", 
          timestamp: new Date() 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');
  };

  if (!isOpen) return null;

  return (
    <div className=" flex items-center justify-center z-50 p-4">
      <div className="bg-primary rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-accent to-yellow-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Bot size={24} className="text-blue-100" />
            <div>
              <h2 className="text-lg font-semibold">Party Rental Assistant</h2>
              <p className="text-sm text-blue-100">Powered by Gemini</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-blue-800 p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${
                msg.sender === 'user' 
                  ? 'bg-accent text-white rounded-l-2xl rounded-tr-2xl' 
                  : 'bg-light text-gray-800 rounded-r-2xl rounded-tl-2xl'
              } px-4 py-3`}>
                <div className="flex items-start space-x-2">
                  {msg.sender === 'bot' && (
                    <Bot size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                  )}
                  <div 
                    className="text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ 
                      __html: formatMessage(msg.text) 
                    }}
                  />
                  {msg.sender === 'user' && (
                    <User size={16} className="text-white mt-1 flex-shrink-0" />
                  )}
                </div>
                <div className={`text-xs opacity-70 mt-1 ${
                  msg.sender === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {msg.timestamp?.toLocaleTimeString('id-ID', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 rounded-r-2xl rounded-tl-2xl px-4 py-3">
                <TypingBubble />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Ketik pesan Anda di sini..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none bg-dark focus:border-transparent"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !inputText.trim()}
              className="bg-accent disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors duration-200"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;