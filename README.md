# Hotel Management System

A modern, scalable hotel management system built with Node.js, Express.js, PostgreSQL, and Prisma, following Clean Architecture principles.

## 🏗️ Architecture

This project follows a **modular clean architecture** pattern with the following structure:

```
root/
├── prisma/                    # Database schema and migrations
├── modules/                   # Feature modules
│   ├── auth/                 # Authentication & Authorization
│   │   ├── api/             # REST API interfaces
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── repositories/    # Data access layer
│   │   │   ├── contracts/   # Repository interfaces
│   │   │   └── implementations/ # Repository implementations
│   │   └── entities/        # DTOs and models
│   ├── hotels-management/   # Hotel management features
│   └── multi-tenancy/       # Multi-tenant support
├── shared/                   # Common utilities
│   ├── middlewares/         # Express middlewares
│   ├── utils/               # Utility functions
│   ├── errors/              # Error handling
│   └── validators/          # Input validation
├── src/                     # Application entry point
└── package.json
```

## 🚀 Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Validation**: Joi
- **Logging**: Winston
- **Security**: Helmet, CORS, Rate Limiting

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hotel_management_system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your database credentials and other configurations.

4. **Database setup**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Or run migrations
   npm run db:migrate
   ```

5. **Start the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📚 Available Scripts

- `npm start` - Start the application in production mode
- `npm run dev` - Start the application in development mode with hot reload
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:seed` - Seed the database with initial data

## 🔧 Configuration

The application uses environment variables for configuration. See `env.example` for all available options:

- `DATABASE_URL` - PostgreSQL connection string
- `PORT` - Server port (default: 3000)
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)

## 🏛️ Clean Architecture Layers

### 1. **API Layer** (`modules/*/api/`)
- REST API endpoints
- Request/response handling
- Input validation
- Route definitions

### 2. **Controller Layer** (`modules/*/controllers/`)
- HTTP request processing
- Response formatting
- Error handling
- Middleware integration

### 3. **Service Layer** (`modules/*/services/`)
- Business logic implementation
- Domain rules
- Transaction management
- External service integration

### 4. **Repository Layer** (`modules/*/repositories/`)
- Data access abstraction
- Database operations
- Query optimization
- Data mapping

### 5. **Entity Layer** (`modules/*/entities/`)
- Data Transfer Objects (DTOs)
- Domain models
- Validation schemas
- Type definitions

## 🔐 Security Features

- **Authentication**: JWT-based authentication
- **Authorization**: Role-based access control
- **Input Validation**: Request validation with Joi
- **Rate Limiting**: API rate limiting
- **Security Headers**: Helmet.js integration
- **CORS**: Cross-origin resource sharing
- **Password Hashing**: bcrypt for password security

## 📊 Database Schema

The system includes the following main entities:

- **Users**: Authentication and user management
- **Hotels**: Multi-tenant hotel information
- **Rooms**: Hotel room management
- **Bookings**: Reservation system

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run specific test file
npm test -- --testNamePattern="auth"
```

## 📝 API Documentation

Once the application is running, you can access:

- **Health Check**: `GET /health`
- **API Documentation**: TODO - Add Swagger/OpenAPI documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.
