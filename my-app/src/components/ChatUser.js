// src/pages/Dashboard/UserChat.js
import React, { useState, useEffect } from 'react';
import '../styles/ChatUser.css'

const UserChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: 'user' };
            setMessages([...messages, newMessage]);
            setInput('');
            // Logika untuk mengirim pesan ke admin bisa ditambahkan di sini
        }
    };

    useEffect(() => {
        // Simulasi menerima pesan dari admin
        const timer = setTimeout(() => {
            const adminMessage = { text: "Hello, how can I assist you?", sender: 'admin' };
            setMessages(prevMessages => [...prevMessages, adminMessage]);
        }, 3000); // Pesan dari admin setelah 3 detik

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='chat-containerww'>
             <div className="chat-containeruser">
            <h3>Chat with Admin</h3>
            <div className="messages2">
                {messages.map((msg, index) => (
                    <div key={index} className={`message2 ${msg.sender}`}>
                        <span>{msg.text}</span>
                    </div>
                ))}
            </div>
            <div className="inputuser-container">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Type a message..." 
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
        </div>
       
    );
};

export default UserChat;