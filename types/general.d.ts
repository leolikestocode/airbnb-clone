declare module "*" {
  interface IPlace {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    guests: number;
    price: string;
    long: number;
    lat: number;
    reviews: number;
  }

  interface ICoordinates {
    latitude: number;
    longitude: number;
  }

  interface IViewport extends ICoordinates {
    zoom: number;
  }
}
