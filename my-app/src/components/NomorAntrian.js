import React, { useEffect, useState } from 'react';

const NomorAntrian = () => {
    const [nomorAntrian, setNomorAntrian] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user'); // Ambil data user dari localStorage
        if (!user) {
            setError('User data tidak ditemukan.');
            setLoading(false);
            return;
        }

        const { userId } = JSON.parse(user); // Parse JSON untuk mendapatkan userId
        if (!userId) {
            setError('User ID tidak valid.');
            setLoading(false);
            return;
        }

        const fetchNomorAntrian = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/orders/queue/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` // Sertakan token dalam header
                    }
                });
                if (!response.ok) {
                    const message = await response.text();
                    throw new Error(`Error: ${message}`);
                }
                const data = await response.json();
                setNomorAntrian(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNomorAntrian();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>Nomor Antrian</h2>
            {nomorAntrian ? (
                <div>
                    <p>Nomor Antrian: {nomorAntrian.queue_number}</p>
                    <p>Tanggal Pesanan: {nomorAntrian.order_date}</p>
                    <p>Status: {nomorAntrian.status}</p>
                </div>
            ) : (
                <p>Anda belum memiliki nomor antrian.</p>
            )}
        </div>
    );
};

export default NomorAntrian;
