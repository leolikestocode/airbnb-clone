// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IPlace } from "../../types/general";

const data: IPlace[] = [
  {
    img: "https://a0.muscache.com/im/pictures/0c8c129a-dba0-46c3-a9b5-980b5884894c.jpg?im_w=720",
    location: "São Sebastião",
    title: "Best option in São Sebastião",
    description:
      "4 guests · 3 bedrooms · 2 beds · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.73,
    guests: 4,
    price: "£30",
    long: -45.7026917,
    lat: -23.7010556,
    reviews: 3,
  },
  {
    img: "https://a0.muscache.com/im/pictures/ef3fce22-8c99-4b4b-a0d0-aaf780784679.jpg?im_w=720",
    location: "São Sebastião",
    title: "Beach house",
    description:
      "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
    star: 4.3,
    guests: 2,
    price: "£40",
    long: -45.5687767,
    lat: -23.7659544,
    reviews: 15,
  },
  {
    img: "https://a0.muscache.com/im/pictures/eead4e96-004f-4b83-9b09-8086c30c2a5e.jpg?im_w=720",
    location: "São Sebastião",
    title: "Tree house in São Sebastião Beach",
    description:
      "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
    star: 3.8,
    guests: 4,
    price: "£35",
    long: -45.7526917,
    lat: -23.7259544,
    reviews: 12,
  },
  {
    img: "https://a0.muscache.com/im/pictures/361472da-2f2c-4659-84c1-dc5c0061abc7.jpg?im_w=720",
    location: "São Sebastião",
    title: "House in São Sebastião",
    description:
      "2 guest · 5 bedroom · 5 beds · 3 bathrooms · Free parking · Washing Machine",
    star: 4.8,
    guests: 2,
    price: "£15",
    long: -45.7926917,
    lat: -23.4959544,
    reviews: 42,
  },
  {
    img: "https://a0.muscache.com/im/pictures/26261edc-e7e4-4f97-b32d-d1e966a6fbc2.jpg?im_w=720",
    location: "São Sebastião",
    title: "Chalet with stunning sea views",
    description:
      "2 guest · 1 bedroom · 1 bed  · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.1,
    guests: 2,
    price: "£55",
    long: -45.7726917,
    lat: -23.7159544,
    reviews: 38,
  },
  {
    img: "https://a0.muscache.com/im/pictures/miso/Hosting-30954632/original/783a77b7-023b-43f7-b13a-d92db651ef29.jpeg?im_w=720",
    location: "São Sebastião",
    title: "Spacious Peaceful Modern Bedroom",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning",
    star: 5.0,
    guests: 3,
    price: "£60",
    long: -45.7726917,
    lat: -23.6259544,
    reviews: 5,
  },
  {
    img: "https://a0.muscache.com/im/pictures/168d6b93-60e4-4fa7-89d2-653fe1c43c45.jpg?im_w=720",
    location: "São Sebastião",
    title: "Charming flat with hot tub",
    description:
      "3 guest · 1 bedroom · 3 bed · 1.5 shared bathrooms · Wifi · Washing Machine",
    star: 4.23,
    guests: 3,
    price: "£65",
    long: -45.7126917,
    lat: -23.7609544,
    reviews: 9,
  },
  {
    img: "https://a0.muscache.com/im/pictures/4bce4bf9-7562-492f-a790-3f458c5cb913.jpg?im_w=720",
    location: "São Sebastião",
    title: "Great quiet loft",
    description:
      "3 guest · 1 bedroom · 2 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 4.19,
    guests: 3,
    price: "£92",
    long: -45.7926917,
    lat: -23.7009544,
    reviews: 7,
  },
  {
    img: "https://a0.muscache.com/im/pictures/bfa7eb9f-42c0-44d6-8dba-fc63eb4a8867.jpg?im_w=720",
    location: "São Sebastião",
    title: "Private en-suite Hotel room",
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
    star: 2.35,
    guests: 3,
    price: "£46",
    long: -45.7086917,
    lat: -23.7009544,
    reviews: 7,
  },
  {
    img: "https://a0.muscache.com/im/pictures/21b021dd-e65a-4411-9cb7-b2bed2f2bbb6.jpg?im_w=720",
    location: "São Sebastião",
    title: "Superior Double room",
    description:
      "4 guest · 1 bedroom · 4 bed · 1.5 shared bathrooms · Free parking · Washing Machine",
    star: 2.8,
    guests: 4,
    price: "£78",
    long: -45.7026917,
    lat: -23.7659544,
    reviews: 7,
  },
  {
    img: "https://a0.muscache.com/im/pictures/ea1bbf62-5460-47c8-88dc-4125e42037d6.jpg?im_w=720",
    location: "São Sebastião",
    title: "Cheap place",
    description:
      "3 guest · 1 bedroom · 1 bed · Wifi · Kitchen · Washing Machine",
    star: 4.13,
    guests: 3,
    price: "£56",
    long: -45.6096917,
    lat: -23.4609544,
    reviews: 7,
  },
  {
    img: "https://a0.muscache.com/im/pictures/3c9b16ef-c4b1-4a60-a47b-72ca6a8efa15.jpg?im_w=720",
    location: "São Sebastião",
    title: "Loft, peace and quiet",
    description:
      "2 guest · 1 bedroom · 1 bed  · Wifi · Kitchen · Free parking · Washing Machine",
    star: 3.95,
    guests: 2,
    price: "£74",
    long: -45.3096917,
    lat: -23.7690044,
    reviews: 7,
  },
  {
    img: "https://a0.muscache.com/im/pictures/ef9d94cd-305a-44ad-bd81-0139a88138fe.jpg?im_w=720",
    location: "São Sebastião",
    title: "Beautifully designed en suite bedroom",
    description:
      "3 guest · 1 bedroom · 1 bed · Wifi · Kitchen · Washing Machine",
    star: 3.85,
    guests: 1,
    price: "£76",
    long: -45.7026917,
    lat: -23.7409544,
    reviews: 7,
  },
  {
    img: "https://a0.muscache.com/im/pictures/97e3f20f-4c87-4523-81b9-944a2aa0244c.jpg?im_w=720",
    location: "São Sebastião",
    title: "Standard house",
    description:
      "3 guest · 1 bedroom · 1 bed · Wifi · Kitchen · Free parking · Washing Machine",
    star: 3.15,
    guests: 3,
    price: "£105",
    long: -45.8926917,
    lat: -23.7459544,
    reviews: 7,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPlace[]>
) {
  res
    .status(200)
    .json(data.filter((item) => item.guests === Number(req.query.guests)));
}
