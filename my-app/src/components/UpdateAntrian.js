import React, { useEffect, useState } from 'react';

const UpdateAntrian = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fungsi untuk mengambil daftar antrian
    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/orders'); // Endpoint untuk mengambil data antrian
            if (!response.ok) {
                throw new Error('Gagal mengambil data antrian');
            }
            const data = await response.json();
            setOrders(data);
            setLoading(false);
        } catch (err) {
            setError('Gagal mengambil data antrian');
            setLoading(false);
        }
    };

    // Fungsi untuk mengupdate status antrian
    const updateOrderStatus = async (orderId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Gagal mengubah status antrian');
            }

            const result = await response.json();
            alert(result.message);

            // Refresh daftar antrian setelah update
            fetchOrders();
        } catch (err) {
            alert('Gagal mengubah status antrian');
        }
    };

    // Menjalankan fetchOrders saat komponen pertama kali dimuat
    useEffect(() => {
        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Daftar Antrian</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nomor Antrian</th>
                        <th>Nomor Plat</th>
                        <th>Tanggal</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.order_id}>
                            <td>{index + 1}</td>
                            <td>{order.queue_number}</td>
                            <td>{order.plate_number}</td>
                            <td>{order.order_date}</td>
                            <td>{order.status}</td>
                            <td>
                                {order.status === 'pending' && (
                                    <button onClick={() => updateOrderStatus(order.order_id)}>
                                        Tandai sebagai Selesai
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UpdateAntrian;
