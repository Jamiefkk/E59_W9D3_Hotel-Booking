use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Super Nicktendo",
    email: "super@nicktendo.com",
    checkedIn: false
  },
  {
    name: "John Croft",
    email: "crofty@nicktendo.com",
    checkedIn: true
  },
  {
    name: "Lucifer",
    email: "snowball@hell.com",
    checkedIn: true
  },

]);