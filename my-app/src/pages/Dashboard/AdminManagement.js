import React from 'react';
import Sidebar from '../../components/Sidebar';
// import Chat from '../../components/Chat';
import Management from '../../components/Management';
// import Statistics from '../../components/Statistics';
import '../../styles/AdminDashboard.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        {/* <Chat /> */}
        <Management />
        {/* <Statistics /> */}
      </div>
    </div>
  );
}

export default App;
