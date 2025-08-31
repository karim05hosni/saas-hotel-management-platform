// Booking entity and DTOs
// This file will contain Booking-related data transfer objects and validation schemas

class BookingDTO {
  constructor(data) {
    this.id = data.id;
    this.checkIn = data.checkIn;
    this.checkOut = data.checkOut;
    this.status = data.status;
    this.totalPrice = data.totalPrice;
    this.guestName = data.guestName;
    this.guestEmail = data.guestEmail;
    this.guestPhone = data.guestPhone;
    this.roomId = data.roomId;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

class CreateBookingDTO {
  constructor(data) {
    this.checkIn = data.checkIn;
    this.checkOut = data.checkOut;
    this.guestName = data.guestName;
    this.guestEmail = data.guestEmail;
    this.guestPhone = data.guestPhone;
    this.roomId = data.roomId;
  }
}

class UpdateBookingDTO {
  constructor(data) {
    this.checkIn = data.checkIn;
    this.checkOut = data.checkOut;
    this.status = data.status;
    this.totalPrice = data.totalPrice;
    this.guestName = data.guestName;
    this.guestEmail = data.guestEmail;
    this.guestPhone = data.guestPhone;
  }
}

module.exports = {
  BookingDTO,
  CreateBookingDTO,
  UpdateBookingDTO
};
