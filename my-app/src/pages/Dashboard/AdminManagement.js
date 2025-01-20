import React from 'react';
import Sidebar from '../../components/Sidebar';
import Presensi from '../../components/Presensi';
import GetPresensi from '../../components/GetPresence';
// import Management from '../../components/Management';
// import Statistics from '../../components/Statistics';
import '../../styles/AdminDashboard.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content-admin-management">
        {/* <Chat /> */}
        <Presensi />
        <GetPresensi />
        {/* <Statistics /> */}
      </div>
    </div>
  );
}

export default App;
