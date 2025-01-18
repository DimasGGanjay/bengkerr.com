import React, { useEffect, useState } from 'react';
import '../styles/Antrian.css';

const QueuePage = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Set initial date to today
  const [queueList, setQueueList] = useState([]);
  const [filteredQueueList, setFilteredQueueList] = useState([]);

  useEffect(() => {
    const fetchQueueData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        const data = await response.json();
        setQueueList(data);
        setFilteredQueueList(data); // Set initial filtered list
      } catch (error) {
        console.error('Error fetching queue data:', error);
      }
    };

    fetchQueueData();
  }, []);

  useEffect(() => {
    if (date) {
      const filteredData = queueList.filter(item => 
        new Date(item.order_date).toLocaleDateString() === new Date(date).toLocaleDateString()
      );
      setFilteredQueueList(filteredData);
    } else {
      setFilteredQueueList(queueList);
    }
  }, [date, queueList]);

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
              {filteredQueueList.map((item) => (
                <tr key={item.queue_number}>
                  <td>{item.queue_number}</td>
                  <td>{item.plate_number}</td>
                  <td>{new Date(item.order_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
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
