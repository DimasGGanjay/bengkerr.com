import React, { useEffect, useState } from 'react';

const DashboardManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users'); // Adjust the API endpoint as necessary
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setUsers(users.filter(user => user.user_id !== userId));
      } else {
        console.error('Error deleting user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="dashboard-panel">
      <div className="customer-list">
        <h3>Daftar Pelanggan Aktif</h3>
        {users.map(user => (
          <div key={user.user_id} className="customer-item">
            {user.username} - {user.email}
            <button onClick={() => handleDelete(user.user_id)}>Delete</button>
          </div>
        ))}
      </div>
      {/* <div className="spare-parts">
        <h3>Tambah Suku Cadang</h3>
        <div className="spare-part-item">Spare Part 1</div>
      </div> */}
      <div className="mechanic-presence">
        <h3>Presensi Mekanik</h3>
        <div className="mechanic-item">Mechanic 1</div>
      </div>
    </div>
  );
};

export default DashboardManagement;
