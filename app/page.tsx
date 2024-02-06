import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  return (
    <ChatWindow
      emoji="🆔"
      titleText="Indigo - Local Chat with Documents"
      placeholder="Try asking something about the document you just uploaded!"
    ></ChatWindow>
  );
}
