// User entity and DTOs
// This file will contain User-related data transfer objects and validation schemas

class UserDTO {
  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.role = data.role;
    this.isActive = data.isActive;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  // Remove sensitive data for API responses
  toResponse() {
    const { password, ...userData } = this;
    return userData;
  }
}

class CreateUserDTO {
  constructor(data) {
    this.email = data.email;
    this.password = data.password;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.role = data.role || 'USER';
  }
}

class UpdateUserDTO {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.role = data.role;
    this.isActive = data.isActive;
  }
}

module.exports = {
  UserDTO,
  CreateUserDTO,
  UpdateUserDTO
};
