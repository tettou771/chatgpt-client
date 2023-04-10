import React, { useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';

interface Message {
  username: string;
  text: string;
}

const Index: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const onSendMessage = async (message: string) => {
    setMessages([...messages, { username: 'You', text: message }]);
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      const data = await response.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { username: 'ChatGPT', text: data.message },
      ]);
    } else {
      console.error('Error interacting with ChatGPT API.');
    }
  };

  return (
    <div>
      <h1>Chat with ChatGPT</h1>
      <div>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default Index;
