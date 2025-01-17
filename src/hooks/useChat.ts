import { useState } from 'react';
import { Message } from '../types/message';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      text,
      isMine: true,
    };
    setMessages([...messages, newMessage]);
  };

  return { messages, sendMessage };
};