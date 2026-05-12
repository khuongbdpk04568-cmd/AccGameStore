import React, { useState } from 'react';
import axios from 'axios';
import './Pages.css';

function Login({ setUser }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, formData);
      // localStorage.setItem('token', response.data.token);
      // setUser(response.data.user);
      
      // Demo login
      setUser({ fullName: formData.email, email: formData.email });
      alert('✅ Đăng nhập thành công!');
    } catch (error) {
      alert('❌ Đăng nhập thất bại: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page auth-page">
      <div className="auth-container">
        <h1>🔐 Đăng nhập</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </form>
        <p className="auth-link">Chưa có tài khoản? <a href="/register">Đăng ký ngay</a></p>
      </div>
    </div>
  );
}

export default Login;
