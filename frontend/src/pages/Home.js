import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <h1>🎮 Chào mừng đến AccGameStore</h1>
        <p>Cửa hàng bán tài khoản game uy tín hàng đầu</p>
        <p>Free Fire | Liên Quân | PUBG</p>
        <Link to="/shop" className="btn-primary">🛍️ Mua ngay</Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🔒 An toàn & Bảo mật</h3>
          <p>Tất cả tài khoản được xác minh 100%</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Giao dịch nhanh</h3>
          <p>Nhận tài khoản trong vòng 5 phút</p>
        </div>
        <div className="feature-card">
          <h3>💬 Hỗ trợ 24/7</h3>
          <p>Đội ngũ support sẵn sàng giúp bạn</p>
        </div>
        <div className="feature-card">
          <h3>💰 Giá rẻ nhất</h3>
          <p>Giá cạnh tranh, ưu đãi hàng ngày</p>
        </div>
      </div>

      <div className="games-section">
        <h2>Các trò chơi có sẵn</h2>
        <div className="games-grid">
          <div className="game-item">
            <span className="game-icon">🔥</span>
            <h3>Free Fire</h3>
            <p>Acc level cao, skin hiếm</p>
          </div>
          <div className="game-item">
            <span className="game-icon">⚔️</span>
            <h3>Liên Quân Mobile</h3>
            <p>Acc rank cao, tướng đầy đủ</p>
          </div>
          <div className="game-item">
            <span className="game-icon">🎯</span>
            <h3>PUBG Mobile</h3>
            <p>Acc gears, BP cao</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
