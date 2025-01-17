import React from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { useChat } from '../hooks/useChat';

const ChatWindow: React.FC = () => {
  const { messages, sendMessage } = useChat();

  return (
    <div className="chat-window flex flex-col p-4 bg-base-200 h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;