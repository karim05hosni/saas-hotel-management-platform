// Room entity and DTOs
// This file will contain Room-related data transfer objects and validation schemas

class RoomDTO {
  constructor(data) {
    this.id = data.id;
    this.number = data.number;
    this.type = data.type;
    this.capacity = data.capacity;
    this.price = data.price;
    this.isAvailable = data.isAvailable;
    this.hotelId = data.hotelId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

class CreateRoomDTO {
  constructor(data) {
    this.number = data.number;
    this.type = data.type;
    this.capacity = data.capacity;
    this.price = data.price;
    this.hotelId = data.hotelId;
  }
}

class UpdateRoomDTO {
  constructor(data) {
    this.number = data.number;
    this.type = data.type;
    this.capacity = data.capacity;
    this.price = data.price;
    this.isAvailable = data.isAvailable;
  }
}

module.exports = {
  RoomDTO,
  CreateRoomDTO,
  UpdateRoomDTO
};
