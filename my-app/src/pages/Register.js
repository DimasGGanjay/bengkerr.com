import React, { useState } from 'react';
import '../styles/Register.css'; // Ensure to import CSS

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validate input
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        const confirmRegister = window.confirm(`Apakah Anda yakin ingin mendaftar dengan\nnama : ${username}\nemail : ${email}\nnomor telepon : ${phone}\npassword : ${password}. \n\nJika anda yakin silahkan tekan OK dan masukkan kembali email dan password anda di halaman login?`);
        if (!confirmRegister) {
       
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, phone, password }),
            });

            const data = await response.json();
            if (response.ok) {
                setSuccess(data.message);
                setTimeout(() => {
                    window.location.href = '/pages/Login'; // Redirect ke halaman login setelah pendaftaran berhasil
                }, 2000); // Tunggu 2 detik sebelum redirect
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            setError('Failed to register. Please try again.');
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <form onSubmit={handleRegister}>
                    <div className="form-group-register">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-register">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-register">
                        <label htmlFor="phone">No. Telp</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-register">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group-register">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="checkbox-register">
                        <label>
                            <input type="checkbox" required /><span>  </span>
                            agree to the terms and conditions
                        </label>
                    </div>
                    <button type="submit" className="login-button">
                        Register
                    </button>
                </form>
                <p>Already have an account? <a href="/pages/Login">Login here</a></p>
            </div>
        </div>
    );
};

export default Register;