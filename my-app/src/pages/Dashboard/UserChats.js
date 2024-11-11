import React from 'react';
import SidebarUser from '../../components/SidebarUser';
import '../../styles/UserChat.css';

const ChatUser = () => {
  return (
    <div className="chat-container">
      <SidebarUser />
      <div className="chat-user">
        <h3>Riwayat Chat Customer dan Admin</h3>
        <div className="chat-item">Chat Message 1</div>
        <div className="chat-item">Chat Message 2</div>
      </div>
    </div>
  );
};

export default ChatUser;
