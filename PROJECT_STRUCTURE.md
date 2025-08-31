# Hotel Management System - Project Structure

## 📁 Complete Directory Structure

```
hotel_management_system/
├── 📁 prisma/                          # Database schema and migrations
│   ├── 📄 schema.prisma               # Prisma schema definition
│   └── 📄 seed.js                     # Database seeding script
│
├── 📁 modules/                         # Feature modules (Clean Architecture)
│   ├── 📁 auth/                       # Authentication & Authorization module
│   │   ├── 📁 api/                    # REST API interfaces
│   │   │   └── 📄 routes.js           # Auth API routes
│   │   ├── 📁 controllers/            # Request handlers
│   │   │   └── 📄 (auth controllers)
│   │   ├── 📁 services/               # Business logic
│   │   │   └── 📄 (auth services)
│   │   ├── 📁 repositories/           # Data access layer
│   │   │   ├── 📁 contracts/          # Repository interfaces
│   │   │   │   └── 📄 (repository contracts)
│   │   │   └── 📁 implementations/    # Repository implementations
│   │   │       └── 📄 (repository implementations)
│   │   └── 📁 entities/               # DTOs and models
│   │       └── 📄 User.js             # User entity and DTOs
│   │
│   ├── 📁 hotels-management/          # Hotel management module
│   │   ├── 📁 api/                    # REST API interfaces
│   │   │   └── 📄 routes.js           # Hotels API routes
│   │   ├── 📁 controllers/            # Request handlers
│   │   │   └── 📄 (hotel controllers)
│   │   ├── 📁 services/               # Business logic
│   │   │   └── 📄 (hotel services)
│   │   ├── 📁 repositories/           # Data access layer
│   │   │   ├── 📁 contracts/          # Repository interfaces
│   │   │   │   └── 📄 (repository contracts)
│   │   │   └── 📁 implementations/    # Repository implementations
│   │   │       └── 📄 (repository implementations)
│   │   └── 📁 entities/               # DTOs and models
│   │       └── 📄 (hotel entities)
│   │
│   └── 📁 multi-tenancy/              # Multi-tenant support module
│       ├── 📁 api/                    # REST API interfaces
│       │   └── 📄 routes.js           # Tenancy API routes
│       ├── 📁 controllers/            # Request handlers
│       │   └── 📄 (tenancy controllers)
│       ├── 📁 services/               # Business logic
│       │   └── 📄 (tenancy services)
│       ├── 📁 repositories/           # Data access layer
│       │   ├── 📁 contracts/          # Repository interfaces
│       │   │   └── 📄 (repository contracts)
│       │   └── 📁 implementations/    # Repository implementations
│       │       └── 📄 (repository implementations)
│       └── 📁 entities/               # DTOs and models
│           └── 📄 (tenancy entities)
│
├── 📁 shared/                         # Common utilities and shared code
│   ├── 📁 middlewares/                # Express middlewares
│   │   └── 📄 errorHandler.js         # Global error handling middleware
│   ├── 📁 utils/                      # Utility functions
│   │   └── 📄 logger.js               # Winston logger configuration
│   ├── 📁 errors/                     # Error handling
│   │   └── 📄 AppError.js             # Custom error class
│   └── 📁 validators/                 # Input validation
│       └── 📄 (validation schemas)
│
├── 📁 src/                            # Application entry point
│   └── 📄 index.js                    # Main application file
│
├── 📁 logs/                           # Application logs
│   ├── 📄 error.log                   # Error logs
│   └── 📄 combined.log                # Combined logs
│
├── 📄 package.json                    # Project dependencies and scripts
├── 📄 env.example                     # Environment variables template
├── 📄 .gitignore                      # Git ignore rules
├── 📄 README.md                       # Project documentation
├── 📄 PROJECT_STRUCTURE.md            # This file
├── 📄 jest.config.js                  # Jest testing configuration
└── 📄 jest.setup.js                   # Jest setup file
```

## 🏗️ Architecture Layers

### 1. **API Layer** (`modules/*/api/`)
- **Purpose**: REST API endpoints and route definitions
- **Responsibilities**:
  - Define API routes
  - Handle HTTP requests/responses
  - Input validation
  - Route middleware integration
- **Files**: `routes.js`

### 2. **Controller Layer** (`modules/*/controllers/`)
- **Purpose**: HTTP request processing and response formatting
- **Responsibilities**:
  - Process incoming requests
  - Validate input data
  - Call appropriate services
  - Format responses
  - Handle errors
- **Files**: `authController.js`, `hotelController.js`, etc.

### 3. **Service Layer** (`modules/*/services/`)
- **Purpose**: Business logic implementation
- **Responsibilities**:
  - Implement business rules
  - Orchestrate operations
  - Handle transactions
  - Integrate external services
  - Data transformation
- **Files**: `authService.js`, `hotelService.js`, etc.

### 4. **Repository Layer** (`modules/*/repositories/`)
- **Purpose**: Data access abstraction
- **Responsibilities**:
  - Database operations
  - Query optimization
  - Data mapping
  - Caching strategies
- **Structure**:
  - `contracts/`: Repository interfaces
  - `implementations/`: Concrete implementations

### 5. **Entity Layer** (`modules/*/entities/`)
- **Purpose**: Data Transfer Objects (DTOs) and domain models
- **Responsibilities**:
  - Define data structures
  - Input validation schemas
  - Response formatting
  - Type definitions
- **Files**: `User.js`, `Hotel.js`, etc.

## 🔧 Configuration Files

### **Database Configuration**
- `prisma/schema.prisma`: Database schema definition
- `prisma/seed.js`: Database seeding script

### **Application Configuration**
- `src/index.js`: Main application entry point
- `env.example`: Environment variables template
- `package.json`: Dependencies and scripts

### **Testing Configuration**
- `jest.config.js`: Jest testing framework configuration
- `jest.setup.js`: Test setup and utilities

## 📦 Module Structure

Each module follows the same structure:

```
module-name/
├── api/                    # API layer
├── controllers/            # Controller layer
├── services/               # Service layer
├── repositories/           # Repository layer
│   ├── contracts/          # Interfaces
│   └── implementations/    # Implementations
└── entities/               # Entity layer
```

## 🚀 Getting Started

1. **Install dependencies**: `npm install`
2. **Setup environment**: Copy `env.example` to `.env`
3. **Setup database**: `npm run db:generate && npm run db:push`
4. **Seed database**: `npm run db:seed`
5. **Start development**: `npm run dev`

## 📝 Development Guidelines

### **Adding New Modules**
1. Create module directory under `modules/`
2. Follow the standard layer structure
3. Add routes to main application
4. Implement repository contracts first
5. Add business logic in services
6. Create controllers for API endpoints

### **Adding New Features**
1. Identify the appropriate module
2. Add entities/DTOs if needed
3. Implement repository methods
4. Add business logic in services
5. Create controller methods
6. Add API routes
7. Write tests

### **Code Organization**
- Keep modules independent
- Use dependency injection
- Follow single responsibility principle
- Implement proper error handling
- Add comprehensive logging
- Write unit tests for all layers
