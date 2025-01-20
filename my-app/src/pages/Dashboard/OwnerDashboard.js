import React from 'react';
import Sidebar from '../../components/Sidebar';
// // import Chat from '../../components/Chat';
// import Management from '../../components/Management';
import Statistics from '../../components/Statistics';
import '../../styles/AdminDashboard.css';

function App() {
  return (
   
    <>
    <div className='owner-dashboard-owner'>
          <h2>Owner Dashboard</h2>
    </div>
    <div className="content">
              {/* <Chat /> */}

              {/* <Management /> */}
              <Statistics />
            
    </div>
    <div className='hero-button'>
     <a href="/">
        <button className="order-button-log">keluar</button>
        </a>   
    </div>
    </>
    

  );
}

export default App;
