import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Pages.css';

function Shop({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [filterGame, setFilterGame] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [filterGame]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // const url = `${process.env.REACT_APP_API_URL}/products${filterGame ? `?game=${filterGame}` : ''}`;
      // const response = await axios.get(url);
      // setProducts(response.data);
      
      // Demo data
      setProducts([
        {
          id: 1,
          name: 'Acc Free Fire Level 50',
          game: 'Free Fire',
          accountLevel: '50',
          price: 150000,
          currency: 'VND',
          description: 'Tài khoản level 50 với skin hiếm',
          available: true,
          image: '🔥'
        },
        {
          id: 2,
          name: 'Acc Liên Quân Rank Vàng',
          game: 'Liên Quân',
          accountLevel: 'Vàng',
          price: 200000,
          currency: 'VND',
          description: 'Rank Vàng 3 sao, tướng đầy đủ',
          available: true,
          image: '⚔️'
        },
        {
          id: 3,
          name: 'Acc PUBG Full Gears',
          game: 'PUBG',
          accountLevel: 'Max',
          price: 250000,
          currency: 'VND',
          description: 'Tài khoản max level với gears hoàn chỉnh',
          available: true,
          image: '🎯'
        }
      ]);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert('✅ Đã thêm vào giỏ hàng!');
  };

  return (
    <div className="page shop-page">
      <h1>🛍️ Cửa hàng</h1>
      
      <div className="filter-section">
        <select 
          value={filterGame} 
          onChange={(e) => setFilterGame(e.target.value)}
          className="filter-select"
        >
          <option value="">Tất cả trò chơi</option>
          <option value="Free Fire">Free Fire</option>
          <option value="Liên Quân">Liên Quân</option>
          <option value="PUBG">PUBG</option>
        </select>
      </div>

      {loading ? (
        <p className="loading">Đang tải...</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
