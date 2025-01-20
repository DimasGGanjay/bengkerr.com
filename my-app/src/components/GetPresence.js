import React, { useState, useEffect } from 'react';

const GetPresence = () => {
  const [presenceData, setPresenceData] = useState([]);
  const [filterDate, setFilterDate] = useState(new Date().toISOString().slice(0, 10));
  const [isLoading, setIsLoading] = useState(false);

  // Mengambil data presensi berdasarkan tanggal
  const fetchPresenceData = async (date) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5000/api/presences?date=${date}`);
      if (response.ok) {
        const data = await response.json();
        setPresenceData(data);
      } else {
        console.error('Error fetching presence data:', response.statusText);
        alert('Gagal memuat data presensi');
      }
    } catch (error) {
      console.error('Error fetching presence data:', error);
      alert('Terjadi kesalahan saat memuat data presensi');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data ketika tanggal berubah
  useEffect(() => {
    fetchPresenceData(filterDate);
  }, [filterDate]);

  return (
    <div className="presensi-container">
      <h3>Hasil Presensi Mekanik</h3>
      <div className="date-selector">
        <label htmlFor="filter-date">Tanggal: </label>
        <input
          type="date"
          id="filter-date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nama Mekanik</th>
              <th>Id Mekanik</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {presenceData.length > 0 ? (
              presenceData.map((item) => (
                <tr key={item.mechanic_id}>
                  <td>{item.name}</td>
                  <td>{item.mechanic_id}</td>
                  <td>{item.status === 'present' ? 'Hadir' : 'Tidak Hadir'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Tidak ada data presensi untuk tanggal ini.</td>
              </tr>
            )}
          </tbody>

        </table>
      )}
    </div>
  );
};

export default GetPresence;
