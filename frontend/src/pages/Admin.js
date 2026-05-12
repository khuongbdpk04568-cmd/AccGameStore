import React, { useState } from 'react';
import './Pages.css';

function Admin() {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([
    { id: 1, name: 'Acc FF Level 50', game: 'Free Fire', price: 150000, available: true },
    { id: 2, name: 'Acc LQ Rank Vàng', game: 'Liên Quân', price: 200000, available: true }
  ]);
  const [formData, setFormData] = useState({
    name: '',
    game: 'Free Fire',
    price: '',
    available: true
  });

  const handleAddProduct = () => {
    if (!formData.name || !formData.price) {
      alert('❌ Vui lòng điền đầy đủ thông tin');
      return;
    }
    setProducts([...products, {
      id: Date.now(),
      ...formData,
      price: parseInt(formData.price)
    }]);
    setFormData({ name: '', game: 'Free Fire', price: '', available: true });
    alert('✅ Thêm sản phẩm thành công!');
  };

  return (
    <div className="page admin-page">
      <h1>👨‍💼 Admin Dashboard</h1>
      
      <div className="admin-tabs">
        <button 
          className={activeTab === 'products' ? 'active' : ''}
          onClick={() => setActiveTab('products')}
        >
          📦 Sản phẩm
        </button>
        <button 
          className={activeTab === 'orders' ? 'active' : ''}
          onClick={() => setActiveTab('orders')}
        >
          📋 Đơn hàng
        </button>
        <button 
          className={activeTab === 'users' ? 'active' : ''}
          onClick={() => setActiveTab('users')}
        >
          👥 Người dùng
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="admin-section">
          <h2>Quản lý sản phẩm</h2>
          
          <div className="add-product">
            <h3>Thêm sản phẩm mới</h3>
            <input
              type="text"
              placeholder="Tên sản phẩm"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <select 
              value={formData.game}
              onChange={(e) => setFormData({...formData, game: e.target.value})}
            >
              <option value="Free Fire">Free Fire</option>
              <option value="Liên Quân">Liên Quân</option>
              <option value="PUBG">PUBG</option>
            </select>
            <input
              type="number"
              placeholder="Giá"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
            />
            <button className="btn-primary" onClick={handleAddProduct}>
              ➕ Thêm
            </button>
          </div>

          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Game</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.game}</td>
                  <td>{product.price.toLocaleString('vi-VN')} VND</td>
                  <td>{product.available ? '✅ Còn hàng' : '❌ Hết hàng'}</td>
                  <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="admin-section">
          <h2>Quản lý đơn hàng</h2>
          <p>📭 Chưa có đơn hàng nào</p>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="admin-section">
          <h2>Quản lý người dùng</h2>
          <p>👥 Chưa có người dùng nào</p>
        </div>
      )}
    </div>
  );
}

export default Admin;
