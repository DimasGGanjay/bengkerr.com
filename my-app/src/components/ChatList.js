import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ChatList.css'; // Pastikan untuk membuat file CSS untuk styling

const ChatList = () => {
    const navigate = useNavigate();

    // Contoh data chat user
    const chatUsers = [
        { id: 1, name: 'User  1' },
        { id: 2, name: 'User  2' },
        { id: 3, name: 'User  3' },
    ];

    const handleChatSelect = (userId) => {
        // Navigasi ke halaman chat dengan ID user yang dipilih
        navigate(`/pages/Dashboard/UserChats/chatlist/chat/${userId}`);
    };

    return (
        <div className="chat-list-container">
            <h2>Daftar Chat User</h2>
            <ul className="chat-list">
                {chatUsers.map(user => (
                    <li key={user.id} onClick={() => handleChatSelect(user.id)} className="chat-item">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatList;