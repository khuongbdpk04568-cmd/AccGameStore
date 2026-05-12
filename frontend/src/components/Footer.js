import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AccGameStore</h3>
          <p>Cửa hàng bán tài khoản game uy tín hàng đầu</p>
        </div>
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>📧 Email: support@accgamestore.com</p>
          <p>📱 SĐT: 0988.xxx.xxx</p>
        </div>
        <div className="footer-section">
          <h3>Hỗ trợ</h3>
          <p><a href="#">Chính sách bảo mật</a></p>
          <p><a href="#">Điều khoản sử dụng</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 AccGameStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
