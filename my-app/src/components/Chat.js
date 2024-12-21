import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Chat.css'; // Pastikan untuk membuat file CSS untuk styling



const Chat = () => {
    const { userId } = useParams(); // Mendapatkan ID user dari URL
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // Fungsi untuk mengirim pesan
    const handleSend = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: 'admin' }; // Pesan baru dari admin
            setMessages([...messages, newMessage]);
            setInput('');
            // Di sini Anda bisa menambahkan logika untuk mengirim pesan ke server
        }
    };

    // Simulasi menerima pesan dari user
    useEffect(() => {
        // Simulasi data pesan dari user
        const timer = setTimeout(() => {
            const userMessage = { text: "Hello, I need help!", sender: 'user' };
            setMessages(prevMessages => [...prevMessages, userMessage]);
        }, 3000); // Pesan dari user setelah 3 detik

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="chat-container">
            <h3>Chat with User {userId}</h3>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Type a message..." 
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default Chat;