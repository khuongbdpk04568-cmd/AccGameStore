import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ user, cartCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🎮 AccGameStore
        </Link>
        <nav className="navbar">
          <Link to="/">Trang chủ</Link>
          <Link to="/shop">Cửa hàng</Link>
          {user ? (
            <>
              <span>👤 {user.fullName}</span>
              <Link to="/admin">Admin</Link>
            </>
          ) : (
            <>
              <Link to="/login">Đăng nhập</Link>
              <Link to="/register">Đăng ký</Link>
            </>
          )}
        </nav>
        <div className="cart-icon">
          <Link to="/checkout">🛒 Giỏ ({cartCount})</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
