import React, { useState } from "react";

interface ChatInputProps {
  onSend?: (message: string) => void;
  onAttach?: () => void;
  onCamera?: () => void;
  onMic?: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  onAttach,
  onCamera,
  onMic,
}) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend?.(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const hasText = value.trim().length > 0;

  return (
    <footer className="p-4 bg-background-light dark:bg-background-dark sticky bottom-0">
      <div className="flex items-center gap-2 max-w-3xl mx-auto w-full">
        {/* Input pill */}
        <div className="flex-1 bg-white dark:bg-zinc-800 rounded-full flex items-center px-4 py-2.5 shadow-sm border border-primary/10">
          <button className="text-slate-400 hover:text-primary transition-colors shrink-0">
            <span className="material-symbols-outlined">
              sentiment_satisfied
            </span>
          </button>
          <input
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-400 px-3 py-0 outline-none"
            placeholder="Type a message..."
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {!hasText && (
            <div className="flex items-center gap-3 text-slate-400 shrink-0">
              <button
                onClick={onAttach}
                className="hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <button
                onClick={onCamera}
                className="hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </button>
            </div>
          )}
        </div>

        {/* Send / Mic button */}
        <button
          onClick={hasText ? handleSend : onMic}
          className="size-11 rounded-full bg-primary text-white flex items-center justify-center shadow-md active:scale-95 transition-all hover:bg-primary/90"
        >
          <span className="material-symbols-outlined">
            {hasText ? "send" : "mic"}
          </span>
        </button>
      </div>
      <div className="h-2" />
    </footer>
  );
};

export default ChatInput;
