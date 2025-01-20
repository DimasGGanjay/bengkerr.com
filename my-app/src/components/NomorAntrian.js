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

                // Cek apakah data ada dan statusnya bukan "completed"
                if (!data || data.status === 'completed') {
                    setNomorAntrian(null);
                } else {
                    setNomorAntrian(data);
                }
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
        <div className='nomor-antrian-container'>
            <h2>Nomor Antrian Aktif</h2>
            {nomorAntrian ? (
                <div className='nomor-antrian'>
                    <h1>{nomorAntrian.queue_number}</h1>
                    <h3>Tanggal: {new Date(nomorAntrian.order_date).toLocaleDateString('id-ID')}</h3>
                    <p>Status: {nomorAntrian.status}</p>
                </div>
            ) : (
                <p>Anda tidak dalam antrian.</p>
            )}
        </div>
    );
};

export default NomorAntrian;
