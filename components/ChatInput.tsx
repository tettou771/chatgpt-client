import React, { useState } from 'react';
import styles from '../styles/ChatInput.module.css';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.chatInput}>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`${styles.chatInput} input`} // クラス名を追加
      />
      <button type="submit" className={`${styles.chatInput} button`}>Send</button>
    </form>
  );
};

export default ChatInput;
