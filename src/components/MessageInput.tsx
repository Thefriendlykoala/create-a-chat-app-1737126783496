import React, { useState } from 'react';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() !== '') {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="message-input flex mt-2">
      <input
        type="text"
        className="input input-bordered flex-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="btn btn-primary ml-2" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;