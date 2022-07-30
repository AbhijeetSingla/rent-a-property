import { v4 as uuid } from "uuid";
const data = {
  properties: [
    {
      id: uuid(),
      type: "House",
      state: "California",
      location: {
        address: "2622 Ridge Road",
        city: "Los Angeles",
        state: "California"
      },
      date: "30-10-2022",
      beds: "9",
      cover: "house-1.webp",
      area: "20",
      price: 8038
    },
    {
      id: uuid(),
      type: "Flat",
      state: "California",
      location: {
        address: "2622 Ridge Road",
        city: "Sacramento",
        state: "California"
      },
      date: "23-11-2022",
      beds: "8",
      cover: "house-2.webp",
      area: "20",
      price: 5038
    },
    {
      id: uuid(),
      type: "Flat",
      state: "Michigan",
      location: {
        address: "2622 Ridge Road",
        city: "Detroit",
        state: "Michigan"
      },
      date: "23-11-2022",
      beds: "8",
      cover: "house-3.webp",
      area: "20",
      price: 6038
    },
    {
      id: uuid(),
      type: "House",
      state: "New York State",
      location: {
        address: "2622 Ridge Road",
        city: "New York",
        state: "New York state"
      },
      date: "22-10-2022",
      beds: "8",
      cover: "house-4.webp",
      area: "20",
      price: 2038
    },
    {
      id: uuid(),
      type: "House",
      state: "California",
      location: {
        address: "2622 Ridge Road",
        city: "Los Angeles",
        state: "California"
      },
      date: "23-11-2022",
      beds: "7",
      cover: "house-5.webp",
      area: "20",
      price: 7038
    },
    {
      id: uuid(),
      type: "Flat",
      state: "Massachusetts",
      location: {
        address: "2622 Ridge Road",
        city: "Boston",
        state: "Massachusetts"
      },
      date: "21-10-2022",
      beds: "5",
      cover: "house-6.webp",
      area: "20",
      price: 9038
    },
    {
      id: uuid(),
      type: "Flat",
      state: "Florida",
      location: {
        address: "2622 Ridge Road",
        city: "Miami",
        state: "Florida"
      },
      date: "22-08-2022",
      beds: "4",
      cover: "house-7.webp",
      area: "20",
      price: 4038
    },
    {
      id: uuid(),
      type: "Flat",
      state: "New Mexico",
      location: {
        address: "2622 Ridge Road",
        city: "Taos",
        state: "New Mexico"
      },
      date: "10-10-2022",
      beds: "5",
      cover: "house-8.webp",
      area: "20",
      price: 9038
    },
    {
      id: uuid(),
      type: "Flat",
      state: "Florida",
      location: {
        address: "2622 Ridge Road",
        city: "Orlando",
        state: "Florida"
      },
      date: "22-05-2022",
      beds: "6",
      cover: "house-9.webp",
      area: "20",
      price: 2038
    }
  ]
};

export default data;