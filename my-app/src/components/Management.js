import React, { useEffect, useState } from 'react';

const DashboardManagement = () => {
  const [users, setUsers] = useState([]);
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    // Mengambil data pelanggan aktif
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users'); // Sesuaikan endpoint
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Mengambil data mekanik aktif
    const fetchMechanics = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/mechanics'); // Endpoint baru untuk mekanik
        const data = await response.json();
        setMechanics(data);
      } catch (error) {
        console.error('Error fetching mechanics:', error);
      }
    };

    fetchUsers();
    fetchMechanics();
  }, []);

  return (
    <div className="dashboard-panel">
      <div className="customer-list">
        <h3>Daftar Pelanggan Aktif</h3>
        <table className="customer-table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.user_id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="customer-list">
        <h3>Daftar Mekanik Aktif</h3>
        <table className="customer-table">
          <thead>
            <tr>
              <th>Nama Mekanik</th>
              <th>Email</th>
              <th>Telepon</th>
            </tr>
          </thead>
          <tbody>
            {mechanics.map(mechanic => (
              <tr key={mechanic.mechanic_id}>
                <td>{mechanic.name}</td>
                <td>{mechanic.email}</td>
                <td>{mechanic.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardManagement;
