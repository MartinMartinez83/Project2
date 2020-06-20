const db = require("./models");
const cities = require("./models/cities");
let cityNames = [];
db.sequelize.sync({ force: true }).then(() => {
  db.Cities.bulkCreate([
    {
      cityName: "Alta",
    },
    {
        cityName: "Bluffdale",
      },
      {
        cityName: "Brighton",
      },
      {
        cityName: "Cottonwood Heights",
      },
      {
        cityName: "Draper",
      },
      {
        cityName: "Herriman",
      },
      {
        cityName: "Holladay",
      },
      {
        cityName: "Kearns",
      },
      {
        cityName: "Magna",
      },
      {
        cityName: "Midvale",
      },
      {
        cityName: "Millcreek",
      },
      {
        cityName: "Murray",
      },
      {
        cityName: "Riverton",
      },
      {
        cityName: "Salt Lake City",
      },
      {
        cityName: "Sandy",
      },
      {
        cityName: "South Jordan",
      },
      {
        cityName: "Taylorsville",
      },
      {
        cityName: "West Jordan",
      },
      {
        cityName: "West Valley City",
      }

  ]);
});
