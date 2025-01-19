import React, { useState, useEffect } from 'react';

const Presensi = () => {
  const [mechanics, setMechanics] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [presenceData, setPresenceData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Mengambil daftar mekanik
  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/mechanics'); // Endpoint untuk daftar mekanik
        const data = await response.json();
        setMechanics(data);
      } catch (error) {
        console.error('Error fetching mechanics:', error);
        alert('Gagal memuat data mekanik');
      }
    };

    fetchMechanics();
  }, []);

  // Handle perubahan presensi
  const handlePresenceChange = (mechanicId, isPresent) => {
    setPresenceData((prev) => ({
      ...prev,
      [mechanicId]: isPresent,
    }));
  };

  // Submit presensi
  const handleSubmit = async () => {
    // Validasi data
    if (Object.keys(presenceData).length < mechanics.length) {
      alert('Pastikan semua mekanik sudah diberi status presensi.');
      return;
    }

    const dataToSubmit = mechanics.map((mechanic) => ({
      mechanic_id: mechanic.mechanic_id,
      date: selectedDate,
      status: presenceData[mechanic.mechanic_id] ? 'present' : 'absent',
    }));

    console.log('Data to submit:', dataToSubmit);

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5000/api/mechanic-presence', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        alert('Presensi berhasil disimpan');
      } else {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        alert('Terjadi kesalahan saat menyimpan presensi');
      }
    } catch (error) {
      console.error('Error submitting presence:', error);
      alert('Terjadi kesalahan saat menyimpan presensi');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="presensi-container">
      <h3>Presensi Mekanik</h3>
      <div className="date-selector">
        <label htmlFor="date">Tanggal: </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nama Mekanik</th>
            <th>Hadir</th>
            <th>Tidak Hadir</th>
          </tr>
        </thead>
        <tbody>
          {mechanics.map((mechanic) => (
            <tr key={mechanic.mechanic_id}>
              <td>{mechanic.name}</td>
              <td>
                <input
                  type="radio"
                  name={`presence-${mechanic.mechanic_id}`}
                  onChange={() => handlePresenceChange(mechanic.mechanic_id, true)}
                  checked={presenceData[mechanic.mechanic_id] === true}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`presence-${mechanic.mechanic_id}`}
                  onChange={() => handlePresenceChange(mechanic.mechanic_id, false)}
                  checked={presenceData[mechanic.mechanic_id] === false}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit} className="submit-button" disabled={isLoading}>
        {isLoading ? 'Menyimpan...' : 'Simpan Presensi'}
      </button>
    </div>
  );
};

export default Presensi;
