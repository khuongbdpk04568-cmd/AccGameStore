# 🎮 AccGameStore - Cửa hàng bán tài khoản game

Một nền tảng e-commerce hoàn chỉnh để bán tài khoản game (Free Fire, Liên Quân, PUBG) với frontend hiện đại và backend API mạnh mẽ.

## 🌟 Tính năng

- ✅ Trang chủ với thông tin chi tiết
- ✅ Cửa hàng với lọc theo game
- ✅ Hệ thống đăng nhập/đăng ký
- ✅ Giỏ hàng và thanh toán
- ✅ Admin dashboard để quản lý sản phẩm
- ✅ API RESTful hoàn chỉnh
- ✅ Database MongoDB
- ✅ Authentication với JWT

## 📁 Cấu trúc dự án

```
AccGameStore/
├── backend/          # Node.js + Express API
│   ├── config/       # Cấu hình
│   ├── models/       # MongoDB schemas
│   ├── controllers/  # Business logic
│   ├── routes/       # API routes
│   ├── middleware/   # Auth middleware
│   ├── .env          # Environment variables
│   └── server.js     # Entry point
├── frontend/         # React SPA
│   ├── public/       # Static files
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── styles/      # CSS files
│   │   ├── App.js       # Main app
│   │   └── index.js     # Entry point
│   └── package.json
├── .gitignore
└── README.md
```

## 🚀 Cách chạy

### Backend

```bash
cd backend
npm install
# Chỉnh sửa .env nếu cần
npm run dev
```

Server sẽ chạy tại `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm start
```

App sẽ mở tại `http://localhost:3000`

## 📦 Yêu cầu

- Node.js (v14+)
- MongoDB (cục bộ hoặc Atlas)
- npm hoặc yarn

## 🔧 Cấu hình

### Backend .env

```env
MONGODB_URI=mongodb://localhost:27017/accgamestore
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development
```

### Frontend .env

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 🛠️ API Endpoints

### Auth
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/profile` - Lấy thông tin user (cần token)

### Products
- `GET /api/products` - Lấy tất cả sản phẩm
- `GET /api/products/:id` - Lấy 1 sản phẩm
- `POST /api/products` - Tạo sản phẩm (admin)
- `PUT /api/products/:id` - Cập nhật sản phẩm (admin)
- `DELETE /api/products/:id` - Xóa sản phẩm (admin)

### Cart
- `POST /api/cart/add` - Thêm vào giỏ
- `GET /api/cart` - Lấy giỏ hàng
- `DELETE /api/cart/:productId` - Xóa khỏi giỏ

## 🚀 Deployment

### Frontend Deploy (Vercel/Netlify)

```bash
npm run build
# Sau đó push build folder lên Vercel hoặc Netlify
```

### Backend Deploy (Heroku/Railway)

```bash
# Heroku
git push heroku main

# Railway
railway up
```

## 📝 License

MIT License - tự do sử dụng cho mục đích cá nhân hoặc thương mại.

## 👨‍💻 Tác giả

AccGameStore Team

## 💬 Hỗ trợ

Nếu có vấn đề, vui lòng tạo issue trên GitHub.
