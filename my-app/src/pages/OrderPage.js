import React, { useEffect, useState } from 'react';
import '../styles/OrderPage.css';

function OrderPage() {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [motor, setMotor] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [complaint, setComplaint] = useState('');
  const [queueNumber, setQueueNumber] = useState([]);
  const [selectedQueueNumber, setSelectedQueueNumber] = useState('');

  const fetchQueueNumbers = async (selectedDate) => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/available-queues?date=${selectedDate}`);
      const data = await response.json();
      console.log('Fetched queue numbers:', data); // Debugging log
      setQueueNumber(data.availableNumbers || []); // Simpan hanya angka antrian yang tersedia
    } catch (error) {
      console.error('Error fetching queue numbers:', error);
    }
  };

  useEffect(() => {
    if (date) {
      fetchQueueNumbers(date); // Panggil API dengan tanggal yang dipilih
    }
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUsername(userData.username);
      setPhone(userData.phone);
    }

    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      user_id: JSON.parse(localStorage.getItem('user')).userId,
      service_id: selectedService,
      date,
      time,
      motor,
      plate_number: plateNumber,
      complaint,
      queue_number: selectedQueueNumber,
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order submitted successfully!');
      } else {
        alert('Failed to submit order.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <div className="order-container">
      <h1>Form Booking Service</h1>
      <div className="order-content">
        <div className="service-image-placeholder">
          <img src="../assets/main_banner.png" alt="Deskripsi gambar" />
        </div>

        <div className="booking-form1">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Pilih Layanan</label>
              <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                <option value="">Pilih Layanan</option>
                {services.map(service => (
                  <option key={service.service_id} value={service.service_id}>
                    {service.title}
                  </option>
                ))}
              </select>

              <label>Nama</label>
              <input type="text" placeholder="Masukkan Nama" value={username} readOnly />
              <label>No Telp</label>
              <input type="text" placeholder="Masukkan No Telp" value={phone} readOnly />
            </div>

            <div className="form-group2">
              <label>Tgl</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              {/* <label>Jam</label>
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} /> */}
            </div>

            <div className="form-group">
              <label>Motor</label>
              <select value={motor} onChange={(e) => setMotor(e.target.value)}>
                <option value="">Pilih Merk Motor</option>
                <option value="honda">Honda</option>
                <option value="yamaha">Yamaha</option>
                <option value="suzuki">Suzuki</option>
                <option value="kawasaki">Kawasaki</option>
                <option value="ducati">Ducati</option>
                <option value="bmw">BMW</option>
                <option value="ktm">KTM</option>
                <option value="other">Merk Lainnya</option>
              </select>
              <label>Nomor Plat</label>
              <input
                type="text"
                placeholder="Masukkan Nomor Plat"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Keluhan</label>
              <textarea
                placeholder="Masukkan Keluhan"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label>Nomor Antrian Tersedia</label>
              <p>jika tidak ada silahkan ganti tanggal</p>
              <select
                value={selectedQueueNumber}
                onChange={(e) => setSelectedQueueNumber(e.target.value)}
              >
                <option value="">Pilih Nomor Antrian</option>
                {Array.isArray(queueNumber) &&
                  queueNumber.map(queue => (
                    <option key={queue} value={queue}>
                      {queue}
                    </option>
                  ))}
              </select>
            </div>

            <button type="submit" className="booking-button">
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
