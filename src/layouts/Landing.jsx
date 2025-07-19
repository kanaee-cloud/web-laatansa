/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Chatbot from "../components/contact/ChatBot";
import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <main>
      <Navbar />
      <Outlet />
      
      <motion.button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-accent to-yellow-400 hover:from-yellow-400 hover:to-accent text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1 // Muncul setelah 1 detik
        }}
      >
        <MessageCircle size={28} className="animate-pulse" />
      </motion.button>


      <AnimatePresence>
        {isChatbotOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsChatbotOpen(false)}
            />
            

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full max-w-3xl"
                initial={{ 
                  scale: 0.7,
                  opacity: 0,
                  y: 100
                }}
                animate={{ 
                  scale: 1,
                  opacity: 1,
                  y: 0
                }}
                exit={{ 
                  scale: 0.7,
                  opacity: 0,
                  y: 100
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.4
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Chatbot 
                  isOpen={isChatbotOpen} 
                  onClose={() => setIsChatbotOpen(false)} 
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Landing;