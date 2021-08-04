/** @format */

// Insert at least 3 authors with the following fields

// Name: String
// Last name: String
// Date of Birth: Date
// Date of death: Date
// Country: String

db.books.insertMany([
  {
    Name: "Pepe",
    LastName: "Palotes",
    birthday: new Date("1994-01-02"),
    death: new Date("1999-01-29"),
  },
  {
    Name: "Pepa",
    LastName: "Palitos",
    birthday: new Date("1994-01-12"),
    death: new Date("2020-01-29"),
  },
  {
    Name: "Pepin",
    LastName: "Palillos",
    birthday: new Date("1996-11-22"),
    death: new Date("1996-12-29"),
  },
]);
