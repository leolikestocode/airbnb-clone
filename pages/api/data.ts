// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  guests: number;
  price: string;
  long: number;
  lat: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      img: "https://a0.muscache.com/im/pictures/0c8c129a-dba0-46c3-a9b5-980b5884894c.jpg?im_w=720",
      location: "Private room in center of London",
      title: "Best option in Ilhabela",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      guests: 1,
      price: "£30 / night",
      long: -0.0022275,
      lat: 51.5421655,
    },
    {
      img: "https://a0.muscache.com/im/pictures/ef3fce22-8c99-4b4b-a0d0-aaf780784679.jpg?im_w=720",
      location: "Private room in center of London",
      title: "Beach house",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen",
      star: 4.3,
      guests: 4,
      price: "£40 / night",
      long: -0.095091,
      lat: 51.48695,
    },
    {
      img: "https://a0.muscache.com/im/pictures/eead4e96-004f-4b83-9b09-8086c30c2a5e.jpg?im_w=720",
      location: "Private room in center of London",
      title: "Tree house in Boiçunga Beach",
      description:
        "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
      star: 3.8,
      guests: 2,
      price: "£35 / night",
      long: -0.135638,
      lat: 51.521916,
    },
    {
      img: "https://a0.muscache.com/im/pictures/26261edc-e7e4-4f97-b32d-d1e966a6fbc2.jpg?im_w=720",
      location: "Private room in center of London",
      title: "Chalet with stunning sea views",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      guests: 2,
      price: "£55 / night",
      long: -0.069961,
      lat: 51.472618,
    },
    {
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-30954632/original/783a77b7-023b-43f7-b13a-d92db651ef29.jpeg?im_w=720",
      location: "Private room in center of London",
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
      star: 5.0,
      guests: 3,
      price: "£60 / night",
      long: -0.08472,
      lat: 51.510794,
    },
    {
      img: "https://a0.muscache.com/im/pictures/168d6b93-60e4-4fa7-89d2-653fe1c43c45.jpg?im_w=720",
      location: "Private room in center of London",
      title: "Charming flat with hot tub",
      description:
        "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
      star: 4.23,
      guests: 3,
      price: "£65 / night",
      long: -0.094116,
      lat: 51.51401,
    },
    {
      img: "https://a0.muscache.com/im/pictures/4bce4bf9-7562-492f-a790-3f458c5cb913.jpg?im_w=720",
      location: "Private room in center of London",
      title: "Loft, peace and quiet",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      guests: 4,
      price: "£90 / night",
      long: -0.109889,
      lat: 51.521245,
    },
  ]);
}
