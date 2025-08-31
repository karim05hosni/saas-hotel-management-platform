// Hotel entity and DTOs
// This file will contain Hotel-related data transfer objects and validation schemas

class HotelDTO {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.address = data.address;
    this.city = data.city;
    this.country = data.country;
    this.phone = data.phone;
    this.email = data.email;
    this.website = data.website;
    this.isActive = data.isActive;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

class CreateHotelDTO {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.address = data.address;
    this.city = data.city;
    this.country = data.country;
    this.phone = data.phone;
    this.email = data.email;
    this.website = data.website;
  }
}

class UpdateHotelDTO {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.address = data.address;
    this.city = data.city;
    this.country = data.country;
    this.phone = data.phone;
    this.email = data.email;
    this.website = data.website;
    this.isActive = data.isActive;
  }
}

module.exports = {
  HotelDTO,
  CreateHotelDTO,
  UpdateHotelDTO
};
