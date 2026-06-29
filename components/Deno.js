'use client';
import { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import CatAvatar from './CatAvatar';

const SAMPLE_REPLIES = {
  default: "Hi, I'm Deno. I can answer questions about Clas, our processing services, the LOS platforms we work in, and the loan types we handle. What's up?",
  fee: "Our fee is a per-file flat rate billed at closing — pay only if the loan closes. The exact rate depends on your file mix and state. Reach out and we'll share specifics.",
  states: "Clas is currently licensed in Colorado, Florida (MBR7014), and North Carolina (R-219565). Additional state licenses are available on request — just ask.",
  los: "We work inside Arive, LendingPad, and Encompass. You stay on the LOS you already use; we join your team there as a contract processor with scoped access.",
  loans: "Conventional, FHA, VA, USDA, jumbo, and non-QM — purchase and refi. If you're running something exotic, ask and we'll let you know.",
  offtopic: "That's outside what I can help with. Shawna or the team can take it from here — info@clasmortgageprocessing.com.",
};

function mockReply(input) {
  const t = input.toLowerCase();
  if (t.match(/fee|cost|price|rate|charge|pay/)) return SAMPLE_REPLIES.fee;
  if (t.match(/state|license|colorado|florida|carolina|where/)) return SAMPLE_REPLIES.states;
  if (t.match(/arive|lendingpad|encompass|los|platform|software/)) return SAMPLE_REPLIES.los;
  if (t.match(/loan type|conventional|fha|va|usda|jumbo|non.?qm|product/)) return SAMPLE_REPLIES.loans;
  if (t.match(/who|what|hello|hi|hey|deno|about/)) return SAMPLE_REPLIES.default;
  return SAMPLE_REPLIES.offtopic;
}



export default function Deno() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: SAMPLE_REPLIES.default },
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const [mounted, setMounted] = useState(false);
  const messagesRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, thinking]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { from: 'user', text }]);
    setInput('');
    setThinking(true);
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: mockReply(text) }]);
      setThinking(false);
    }, 700 + Math.random() * 500);
  }

  if (!mounted) return null;

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="deno-entry fixed bottom-5 right-5 z-50 group flex items-center gap-3 rounded-full bg-white pl-2 pr-5 py-2 shadow-2xl shadow-slate2-900/25 border-2 border-teal2-300 hover:border-teal2-500 hover:pr-6 transition-all hover:scale-105"
          aria-label="Open chat with Deno"
        >
          <div className="rounded-full bg-gradient-to-br from-lavender-50 to-cream-100 p-1.5 flex items-center justify-center">
            <CatAvatar size={48} />
          </div>
          <div className="text-left">
            <div className="text-slate2-900 font-semibold text-sm leading-tight">Ask Deno</div>
            <div className="text-teal2-600 text-[10px] leading-tight font-medium">Mortgage questions</div>
          </div>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="deno-entry fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[380px] max-w-[380px] bg-cream-50 rounded-2xl shadow-2xl shadow-slate2-900/25 border-2 border-teal2-300 overflow-hidden flex flex-col"
          style={{ maxHeight: 'min(580px, calc(100vh - 2.5rem))' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-teal2-500 to-teal2-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="rounded-full bg-cream-50 p-1 shadow-md flex items-center justify-center">
                <CatAvatar size={38} />
              </div>
              <div className="leading-tight">
                <div className="text-cream-50 font-semibold text-sm">Deno</div>
                <div className="text-lavender-100 text-[10px] font-medium">Clas assistant</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-md text-cream-100/80 hover:text-cream-50 hover:bg-cream-50/15 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={messagesRef} className="deno-scroll flex-1 overflow-y-auto p-4 space-y-3 bg-cream-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                  m.from === 'bot'
                    ? 'bg-white border border-line text-slate2-900 mr-auto'
                    : 'bg-teal2-500 text-white ml-auto'
                }`}
              >
                {m.text}
              </div>
            ))}
            {thinking && (
              <div className="max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13px] text-slate2-700 bg-white border border-line mr-auto inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal2-500 animate-pulse" />
                <span className="h-1.5 w-1.5 rounded-full bg-teal2-500 animate-pulse" style={{ animationDelay: '0.15s' }} />
                <span className="h-1.5 w-1.5 rounded-full bg-teal2-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-line bg-white">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') send(); }}
                placeholder="Ask about services, fees, or LOS..."
                className="flex-1 rounded-lg border border-line bg-cream-50 px-3.5 py-2.5 text-sm text-slate2-900 placeholder:text-slate2-500 focus:outline-none focus:border-teal2-400 focus:bg-white"
              />
              <button
                onClick={send}
                disabled={!input.trim()}
                className="rounded-lg bg-teal2-500 px-3.5 text-white hover:bg-teal2-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate2-600 mt-2 text-center">
              Deno is an assistant. For specific file questions, contact Shawna directly.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
