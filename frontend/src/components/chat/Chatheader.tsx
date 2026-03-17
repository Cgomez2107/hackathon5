import React from "react";

interface ChatHeaderProps {
  agentName?: string;
  agentAvatar?: string;
  isOnline?: boolean;
  onBack?: () => void;
  onVideo?: () => void;
  onCall?: () => void;
  onMore?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  agentName = "Cumanday",
  agentAvatar,
  isOnline = true,
  onBack,
  onVideo,
  onCall,
  onMore,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-900 border-b border-primary/10 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-primary/5 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-primary dark:text-slate-100">
            arrow_back
          </span>
        </button>

        <div className="relative shrink-0">
          <div className="size-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
            {agentAvatar ? (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${agentAvatar}")` }}
              />
            ) : (
              <span className="material-symbols-outlined text-white">
                smart_toy
              </span>
            )}
          </div>
          <div
            className={`absolute bottom-0 right-0 size-3 border-2 border-white dark:border-zinc-900 rounded-full ${
              isOnline ? "bg-green-500" : "bg-slate-400"
            }`}
          />
        </div>

        <div>
          <h1 className="font-bold text-base leading-tight">{agentName}</h1>
          <p
            className={`text-xs font-medium ${isOnline ? "text-green-600" : "text-slate-400"}`}
          >
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {[
          { icon: "videocam", handler: onVideo },
          { icon: "call", handler: onCall },
          { icon: "more_vert", handler: onMore },
        ].map(({ icon, handler }) => (
          <button
            key={icon}
            onClick={handler}
            className="p-2 hover:bg-primary/5 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-primary dark:text-slate-100">
              {icon}
            </span>
          </button>
        ))}
      </div>
    </header>
  );
};

export default ChatHeader;
