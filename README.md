# Express File Auth Service

A secure and scalable RESTful API service designed for modern web applications. This project unifies essential features such as file management, authentication, and email operations under one roof.

## 🌟 Core Features

### 🔐 Security and Authentication
- Secure authentication system based on JWT (JSON Web Tokens)
- Encrypted data storage and secure session management
- CORS protection and security headers
- Rate limiting and brute force attack protection

### 📁 File Operations
- Support for multiple file uploads
- Automatic image optimization and resizing
- Secure file storage and access control
- File type validation and virus scanning

### 📧 Email Service
- Sending emails in HTML format
- Template-based email system
- Bulk email sending support
- Email verification and tracking system

### 🗄️ Database and Storage
- Scalable data storage with MongoDB
- Efficient data modeling and relational structure
- Automated data backup and recovery
- Database performance optimization

## 🛠️ Technology Stack

### Backend
- Node.js (v14+)
- Express.js (v4.18+)
- MongoDB (v5+)
- Mongoose ODM

### Security
- JWT (JSON Web Tokens)
- bcryptjs
- Helmet.js
- CORS

### File Handling
- Multer
- Sharp
- fs-extra

### Email
- Nodemailer
- HTML Templates

### Validation
- Joi
- Express Validator

## 🚀 Getting Started

### Requirements
- Node.js (v14 or higher)
- MongoDB (v5 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Aqueex/RESTful-API
cd RESTful-API
```

2. Install dependencies:
```bash
npm install
```

3. Set environment variables:
```bash
cp .env.example .env
# Edit the .env file accordingly
```

4. Start the application:
```bash
npm start
```

## 📁 Project Structure

```
├── config/         # Configuration files
├── controllers/    # Business logic controllers
├── middleware/     # Middlewares
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic services
├── utils/          # Utility functions
├── uploads/        # Uploaded files
├── public/         # Static files
└── logs/           # Log files
```

## 🔒 Security Features

- JWT-based authentication
- Encrypted data storage
- CORS protection
- Rate limiting
- Secure file upload handling
- XSS and CSRF protection
- SQL injection prevention
- Secure header configuration

## 📝 API Documentation

### Authentication Endpoints
- `POST /register` - Register a new user
- `POST /login` - User login
- `PATCH /avatarUpload/:id` - Upload profile picture (authentication required)
- `POST /forgot-password` - Send password reset email
- `POST /reset-password` - Reset password
- `GET /protected` - Retrieve user info (authentication required)

### Test Management Endpoints (Admin)
- `POST /testCreate` - Create new test (admin privileges required)
- `POST /questionCreate` - Create test question (admin privileges required)
- `GET /tests/:id` - Retrieve test and questions (admin privileges required)

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Test coverage report
npm run test:coverage
```

## 📈 Performance

- High concurrency request handling
- Caching mechanisms
- Asynchronous process management
- Database query optimization

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/amazing-feature`)  
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)  
4. Push your branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

Project Owner - [@azizcakmak](https://www.linkedin.com/in/azizcakmak/)

Project Link: [GitHub](https://github.com/Aqueex/RESTful-API)
