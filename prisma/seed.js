const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@hotel.com' },
    update: {},
    create: {
      email: 'admin@hotel.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      isActive: true
    }
  });

  console.log('✅ Admin user created:', adminUser.email);

  // Create sample hotel
  const sampleHotel = await prisma.hotel.upsert({
    where: { name: 'Grand Hotel' },
    update: {},
    create: {
      name: 'Grand Hotel',
      description: 'A luxurious 5-star hotel in the heart of the city',
      address: '123 Main Street',
      city: 'New York',
      country: 'USA',
      phone: '+1-555-0123',
      email: 'info@grandhotel.com',
      website: 'https://grandhotel.com',
      isActive: true
    }
  });

  console.log('✅ Sample hotel created:', sampleHotel.name);

  // Create sample rooms
  const roomTypes = ['SINGLE', 'DOUBLE', 'SUITE', 'DELUXE'];
  const rooms = [];

  for (let i = 1; i <= 10; i++) {
    const roomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
    const capacity = roomType === 'SINGLE' ? 1 : roomType === 'DOUBLE' ? 2 : 4;
    const basePrice = roomType === 'SINGLE' ? 100 : roomType === 'DOUBLE' ? 150 : 300;

    const room = await prisma.room.upsert({
      where: { 
        number_hotelId: {
          number: `R${i.toString().padStart(3, '0')}`,
          hotelId: sampleHotel.id
        }
      },
      update: {},
      create: {
        number: `R${i.toString().padStart(3, '0')}`,
        type: roomType,
        capacity,
        price: basePrice + Math.floor(Math.random() * 50),
        isAvailable: true,
        hotelId: sampleHotel.id
      }
    });

    rooms.push(room);
  }

  console.log('✅ Sample rooms created:', rooms.length);

  // Create sample booking
  const sampleBooking = await prisma.booking.create({
    data: {
      checkIn: new Date('2024-02-01'),
      checkOut: new Date('2024-02-03'),
      status: 'CONFIRMED',
      totalPrice: 300.00,
      guestName: 'John Doe',
      guestEmail: 'john.doe@example.com',
      guestPhone: '+1-555-0124',
      roomId: rooms[0].id
    }
  });

  console.log('✅ Sample booking created for:', sampleBooking.guestName);

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
