import React, { useEffect, useState } from 'react';
import '../styles/OrderPage.css';

function OrderPage() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [queueNumber, setQueueNumber] = useState([]);
  const [selectedQueueNumber, setSelectedQueueNumber] = useState('');
  const [motor, setMotor] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [complaint, setComplaint] = useState('');
  const [serviceImage, setServiceImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userData = JSON.parse(localStorage.getItem('user'));

  const fetchQueueNumbers = async (selectedDate) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/orders/available-queues?date=${selectedDate}`
      );
      const data = await response.json();
      setQueueNumber(data.availableNumbers || []);
    } catch (error) {
      console.error('Error fetching queue numbers:', error);
      alert('Gagal memuat nomor antrian.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchServices = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/services');
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
      alert('Gagal memuat layanan.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (date) fetchQueueNumbers(date);
    fetchServices();
  }, [date]);

  const handleServiceChange = (e) => {
    const selectedServiceId = e.target.value;
    setSelectedService(selectedServiceId);

    const selectedServiceData = services.find(
      (service) => service.service_id === parseInt(selectedServiceId)
    );
    setServiceImage(selectedServiceData ? selectedServiceData.image : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService || !date || !motor || !plateNumber || !selectedQueueNumber) {
      alert('Harap isi semua bidang yang diperlukan.');
      return;
    }

    const isValidPlate = /^[A-Z]{1,2}\s\d{1,4}\s[A-Z]{1,3}$/.test(plateNumber);
    if (!isValidPlate) {
      alert('Nomor plat tidak valid! Contoh: B 1234 XYZ');
      return;
    }

    const orderData = {
      user_id: userData.userId,
      service_id: selectedService,
      date,
      motor,
      plate_number: plateNumber,
      complaint,
      queue_number: selectedQueueNumber,
    };

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order berhasil dikirim!');
      } else {
        alert('Gagal mengirim order. Anda sudah memiliki oder pending');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Terjadi kesalahan saat mengirim order.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="order-container">
      <h1>Form Booking Service</h1>
      <div className="order-content">
        <div className="service-image-placeholder">
          {serviceImage ? (
            <img src={serviceImage} alt="Gambar Layanan" className="service-image-placeholder" />
          ) : (
            <p>Layanan Belum Dipilih</p>
          )}
        </div>

        <div className="booking-form1">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Pilih Layanan</label>
              <select value={selectedService} onChange={handleServiceChange}>
                <option value="">Pilih Layanan</option>
                {services.map((service) => (
                  <option key={service.service_id} value={service.service_id}>
                    {service.title}
                  </option>
                ))}
              </select>

              <label>Nama</label>
              <input type="text" value={userData.username} readOnly />

              <label>No Telp</label>
              <input type="text" value={userData.phone} readOnly />
            </div>

            <div className="form-group2">
              <label>Tgl</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]} // Set tanggal minimal ke hari ini
              />
            </div>

            <div className="form-group">
              <label>Nomor Antrian Tersedia</label>
              <p>{isLoading ? 'Memuat nomor antrian...' : 'Jika tidak ada silahkan pilih tanggal lain'}</p>
              <select
                value={selectedQueueNumber}
                onChange={(e) => setSelectedQueueNumber(e.target.value)}
                disabled={!queueNumber.length || isLoading}
              >
                <option value="">Pilih Nomor Antrian</option>
                {queueNumber.map((queue) => (
                  <option key={queue} value={queue}>
                    {queue}
                  </option>
                ))}
              </select>
            </div>


            <div className="form-group">
              <label>Motor</label>
              <select value={motor} onChange={(e) => setMotor(e.target.value)}>
                <option value="">Pilih Motor</option>
                <optgroup label="Honda">
                  <option value="Honda Beat">Honda Beat</option>
                  <option value="Honda Vario 125">Honda Vario 125</option>
                  <option value="Honda Vario 150">Honda Vario 150</option>
                  <option value="Honda Scoopy">Honda Scoopy</option>
                  <option value="Honda CBR150R">Honda CBR150R</option>
                  <option value="Honda CBR250RR">Honda CBR250RR</option>
                  <option value="Honda PCX">Honda PCX</option>
                  <option value="Honda Supra X 125">Honda Supra X 125</option>
                </optgroup>
                <optgroup label="Yamaha">
                  <option value="Yamaha Mio">Yamaha Mio</option>
                  <option value="Yamaha NMAX">Yamaha NMAX</option>
                  <option value="Yamaha Aerox">Yamaha Aerox</option>
                  <option value="Yamaha XMAX">Yamaha XMAX</option>
                  <option value="Yamaha R15">Yamaha R15</option>
                  <option value="Yamaha R25">Yamaha R25</option>
                  <option value="Yamaha Vixion">Yamaha Vixion</option>
                  <option value="Yamaha MT-25">Yamaha MT-25</option>
                </optgroup>
              </select>

              <label>Nomor Plat</label>
              <input
                type="text"
                placeholder="Contoh: B 1234 XYZ"
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


            <button type="submit" className="booking-button" disabled={isSubmitting}>
              {isSubmitting ? 'Mengirim...' : 'Order'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
