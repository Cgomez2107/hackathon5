import React from "react";

export type BubbleSide = "user" | "bot";

export interface ChatBubbleProps {
  side: BubbleSide;
  text: string;
  time: string;
  read?: boolean; // only shown on bot side
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  side,
  text,
  time,
  read = true,
}) => {
  const isBot = side === "bot";

  return (
    <div
      className={`flex flex-col gap-1 max-w-[85%] ${isBot ? "items-end ml-auto" : "items-start"}`}
    >
      <div
        className={`p-3 shadow-sm ${
          isBot
            ? "bg-primary text-white rounded-2xl rounded-tr-none shadow-md"
            : "bg-white dark:bg-zinc-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-tl-none border border-primary/5"
        }`}
      >
        <p className="text-sm leading-relaxed">{text}</p>
        <div
          className={`text-[10px] text-right mt-1 flex justify-end items-center gap-1 ${
            isBot ? "text-white/70" : "text-slate-400"
          }`}
        >
          {time}
          {isBot && (
            <span className="material-symbols-outlined text-[14px]">
              {read ? "done_all" : "done"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
