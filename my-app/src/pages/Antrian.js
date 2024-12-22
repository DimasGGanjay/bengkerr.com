import React, { useState } from 'react';
import '../styles/Antrian.css';

const QueuePage = () => {
  const [date, setDate] = useState('');

  const queueList = [
    { queueNumber: 1, paymentId: '0987654321', time: '09:00' },
    { queueNumber: 2, paymentId: '0987654322', time: '09:30' },
    { queueNumber: 3, paymentId: '0987654323', time: '10:00' },
    { queueNumber: 4, paymentId: '0987654323', time: '10:00' },
    { queueNumber: 5, paymentId: '0987654323', time: '10:00' },
    { queueNumber: 7, paymentId: '0987654323', time: '10:00' },
    { queueNumber: 8, paymentId: '0987654323', time: '10:00' },
    { queueNumber: 9, paymentId: '0987654323', time: '10:00' },
    { queueNumber: 10, paymentId: '0987654323', time: '10:00' },
    { queueNumber: 11, paymentId: '0987654323', time: '10:00' },
    { queueNumber: 12, paymentId: '0987654323', time: '10:00' },
    // Add more items as needed
  ];

  return (
    <div className='container-antrian'>
      <div className="queue-container">
      <div className="queue-info-antrian">
        <h2>Informasi Antrian</h2>
        <div className="date-time">
          <div className="input-group">
          <label htmlFor="date">Tanggal</label>
          <div>
          <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          </div>
    
        </div>
      </div>

      <div className="queue-table-container">
        <table className="queue-table">
          <thead>
            <tr>
              <th>Nomor Antrian</th>
              <th>Plat Nomor</th>
              <th>Jam</th>
            </tr>
          </thead>
          <tbody>
            {queueList.map((item) => (
              <tr key={item.queueNumber}>
                <td>{item.queueNumber}</td>
                <td>{item.paymentId}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default QueuePage;
