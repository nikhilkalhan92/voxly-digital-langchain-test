import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        🎤 Taylor Swift FAQ Chatbot 🎶
      </h1>
      <ul>
        <li className="text-l">
          🤖
          <span className="ml-2">
            Welcome to the Taylor Swift FAQ Chatbot! This bot is your go-to source for all things Taylor Swift. Whether you want to know about her albums, songs, or personal life, this bot has you covered.
          </span>
        </li>
        <li className="text-l">
          🔍
          <span className="ml-2">
            Semantic Search: Our bot employs Semantic Search technology to comb through a curated knowledge base and fetch the most relevant information for your queries.
          </span>
        </li>
        <li className="text-l">
          🧠
          <span className="ml-2">
            RAG Technique: We leverage the Retrieval-Augmented Generation (RAG) technique to ensure that our responses are not only accurate but also well-crafted. This involves retrieving information using Semantic Search and then generating responses using advanced language models.
          </span>
        </li>
        <li className="text-l">
          👩‍💻
          <span className="ml-2">
            How to Use: Feel free to ask any questions about Taylor Swift, and our bot will do its best to provide accurate and informative answers. Additionally, if you&apos;re unsure about which Taylor Swift album to listen to next, just let us know your mood, and we&apos;ll recommend the perfect one for you!
          </span>
        </li>
        <li className="text-l">
          🎶
          <span className="ml-2">
            Go ahead, ask your first question about Taylor Swift below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🎤"
      titleText="Taylor Swift FAQ Chatbot"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
