import React from 'react';
import styles from '../styles/ChatMessage.module.css';

interface ChatMessageProps {
  message: {
    username: string;
    text: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => (
  <div className={styles.chatMessage}>
    <span className={styles.username}>{message.username}:</span>
    <span className={styles.message}>{message.text}</span>
  </div>
);

export default ChatMessage;
