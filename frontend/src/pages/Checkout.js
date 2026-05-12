import React, { useState } from 'react';
import Cart from '../components/Cart';
import './Pages.css';

function Checkout({ cart }) {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOrder = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert('❌ Vui lòng điền đầy đủ thông tin');
      return;
    }
    alert(`✅ Đơn hàng được tạo!\nTổng tiền: ${total.toLocaleString('vi-VN')} VND\nPP thanh toán: ${paymentMethod}`);
  };

  return (
    <div className="page checkout-page">
      <h1>🛒 Giỏ hàng & Thanh toán</h1>
      
      <Cart items={cart} onRemove={() => {}} />

      {cart.length > 0 && (
        <div className="checkout-form">
          <h2>Thông tin giao hàng</h2>
          <div className="form-group">
            <label>Họ tên:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nhập họ tên"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0988123456"
            />
          </div>
          <div className="form-group">
            <label>Địa chỉ:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Nhập địa chỉ"
            />
          </div>

          <h2>Phương thức thanh toán</h2>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              💳 Chuyển khoản ngân hàng
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="momo"
                checked={paymentMethod === 'momo'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              📱 Ví MoMo
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              🚚 Thanh toán khi nhận hàng
            </label>
          </div>

          <div className="order-summary">
            <h3>Tổng tiền: {total.toLocaleString('vi-VN')} VND</h3>
            <button className="btn-primary" onClick={handleOrder}>
              ✅ Đặt hàng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
