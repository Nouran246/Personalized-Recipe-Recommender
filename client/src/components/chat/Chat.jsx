import React from 'react';
import Button from '../button/Button';
import './Chat.css';

export default function Chat({ messages, onSendMessage, isLoading }) {
    const [message, setMessage] = React.useState('');
    const messagesEndRef = React.useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`}>
                        <p>{msg.content}</p>
                    </div>
                ))}
                {isLoading && (
                    <div className="message system">
                        <p>Thinking...</p>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="chat-input-container">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask a follow-up question..."
                    disabled={isLoading}
                />
                <Button type="submit" variant="primary" disabled={isLoading}>
                    Send
                </Button>
            </form>
        </div>
    );
}
