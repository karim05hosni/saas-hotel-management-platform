// Tenant entity and DTOs
// This file will contain Tenant-related data transfer objects and validation schemas

class TenantDTO {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.domain = data.domain;
    this.isActive = data.isActive;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

class CreateTenantDTO {
  constructor(data) {
    this.name = data.name;
    this.domain = data.domain;
  }
}

class UpdateTenantDTO {
  constructor(data) {
    this.name = data.name;
    this.domain = data.domain;
    this.isActive = data.isActive;
  }
}

module.exports = {
  TenantDTO,
  CreateTenantDTO,
  UpdateTenantDTO
};
