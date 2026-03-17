import { useState, useRef, useEffect } from "react";
import { ChatHeader } from "../components/chat/Chatheader";
import { ChatBubble, type BubbleSide } from "../components/chat/Chatbubble";
import { DateDivider } from "../components/chat/Datedivider";
import { BookingCard } from "../components/chat/Bookingcard";
import { ChatInput } from "../components/chat/Chatinput";

// ─── Types ────────────────────────────────────────────────────────────────────

type MessageType = "bubble" | "booking" | "divider";

interface BaseMessage {
  id: string;
  type: MessageType;
}
interface BubbleMessage extends BaseMessage {
  type: "bubble";
  side: BubbleSide;
  text: string;
  time: string;
  read?: boolean;
}
interface BookingMessage extends BaseMessage {
  type: "booking";
  image: string;
  farmName: string;
  experienceLabel: string;
  details: { icon: string; value: string }[];
  totalPrice: string;
  time: string;
  status?: "confirmed" | "pending" | "cancelled";
}
interface DividerMessage extends BaseMessage {
  type: "divider";
  label: string;
}

type Message = BubbleMessage | BookingMessage | DividerMessage;

// ─── Initial conversation ─────────────────────────────────────────────────────

const initialMessages: Message[] = [
  { id: "d1", type: "divider", label: "Today" },
  {
    id: "m1",
    type: "bubble",
    side: "user",
    text: "Hi! Do you have availability this Saturday for 2 people? We love birds and specialty coffee",
    time: "10:14 AM",
  },
  {
    id: "m2",
    type: "bubble",
    side: "bot",
    text: "Hello! Yes — Saturday is perfect. This week the Cock-of-the-rock has been spotted at 5:30am near the upper trail. I can book you a combo: birding at dawn + coffee harvest tour + farm breakfast for $90 USD per person. Shall I confirm?",
    time: "10:15 AM",
    read: true,
  },
  {
    id: "m3",
    type: "bubble",
    side: "user",
    text: "Yes! We also need transport from Manizales",
    time: "10:17 AM",
  },
  {
    id: "m4",
    type: "bubble",
    side: "bot",
    text: "Done! I've also connected you with Carlos the jeep driver — he picks up at 4:15am from Manizales centro. Total with transport: $110 USD. Confirming now...",
    time: "10:18 AM",
    read: true,
  },
  {
    id: "m5",
    type: "booking",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGV8N4eGM4C1OJgx97HBGOiihCUhyErZwbIO8Ft5RqVZdpvVz6P_ltqIqUWfmFYA8hipeFKX3pEwQsBVtscWUjPzgYfaEurjy9B1wEveP-TWCAb3XHCWN1cdsrxgk46N8xNSWFLxk1NV3BqHg0fVPD_W66JgoloMAoASTaljYGJoIpGiqcuobS1z5mrXpdMXixx_kFJ5pUNJclCYQWaMbqL2MdidQ0b9IsEzitpzKvblCMXa6AqNCbdGvTwEgr3x4hjpr6c-X_9Frn",
    farmName: "Finca La Esperanza",
    experienceLabel: "Coffee & Birding Experience",
    status: "confirmed",
    details: [
      { icon: "calendar_today", value: "Sat, Oct 14" },
      { icon: "schedule", value: "04:15 AM" },
    ],
    totalPrice: "$220 USD",
    time: "10:18 AM",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    const time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    setMessages((prev) => [
      ...prev,
      { id: `m-${Date.now()}`, type: "bubble", side: "user", text, time },
    ]);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col max-w-full">
      <ChatHeader
        agentName="Cumanday"
        agentAvatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDsx0K54BgSe6eDBBRb_xjT76xFy0BECrXOKN4qumklEVVGAYIYD-46l36kzu6mZ3-VShaatT8-fHCBBqeep5Lq3U92RzqIZPh1UnHn-lkuF6K1yzaQX9YfZF1zrI0h1YL-qjyrNxwofFPW8HAvNUAQhH8cOK_S8WVibXHeD5YhRDUYKnWxzT2QwXJDocefahfULn9QW662rT9XuBQkoCp9j1Zz5p7DHjyD_mOO6UBZqzU-ckV6eG1yoAkGQ3yeVyEJtU2pNMsZ2Ysz"
        isOnline
        onBack={() => window.history.back()}
      />

      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto w-full">
        {messages.map((msg) => {
          if (msg.type === "divider")
            return <DateDivider key={msg.id} label={msg.label} />;
          if (msg.type === "bubble")
            return (
              <ChatBubble
                key={msg.id}
                side={msg.side}
                text={msg.text}
                time={msg.time}
                read={msg.read}
              />
            );
          if (msg.type === "booking")
            return (
              <BookingCard
                key={msg.id}
                image={msg.image}
                farmName={msg.farmName}
                experienceLabel={msg.experienceLabel}
                status={msg.status}
                details={msg.details}
                totalPrice={msg.totalPrice}
                time={msg.time}
              />
            );
          return null;
        })}
        <div ref={bottomRef} />
      </main>

      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Chat;
