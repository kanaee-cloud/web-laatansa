import { Dot } from 'lucide-react';

const TypingBubble = () => {
  return (
    <div className="message bot flex items-center gap-1">
      <span className="animate-bounce delay-[0ms]"><Dot size={28} /></span>
      <span className="animate-bounce delay-[150ms]"><Dot size={28} /></span>
      <span className="animate-bounce delay-[300ms]"><Dot size={28} /></span>
    </div>
  );
};

export default TypingBubble;