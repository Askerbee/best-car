export interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  images?: string[];
  type: string;
  year: number;
  transmission: string;
  fuel: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
}

export const carData: Car[] = [
  {
    id: 1,
    name: "Ford Kuga",
    price: 4499,
    image: "images/cars/kuga/main.jpg",
    images: [
      "images/cars/kuga/1.jpg",
      "images/cars/kuga/2.jpg",
      "images/cars/kuga/3.jpg",
      "images/cars/kuga/4.jpg",
      "images/cars/kuga/5.jpg"
    ],
    type: "SUV",
    year: 2014,
    transmission: "Automatic",
    fuel: "Gasoline",
    rating: 5,
    reviewCount: 42,
    featured: true
  },
  {
    id: 2,
    name: "Volkswagen Polo",
    price: 2999,
    image: "images/cars/polo/main.jpg",
    images: [
      "images/cars/polo/1.jpg",
      "images/cars/polo/2.jpg",
      "images/cars/polo/3.jpg",
      "images/cars/polo/4.jpg"
    ],
    type: "Sedan",
    year: 2012,
    transmission: "Automatic",
    fuel: "Gasoline",
    rating: 5,
    reviewCount: 76,
    featured: true
  },
  {
    id: 3,
    name: "Volkswagen Tiguan",
    price: 4499,
    image: "images/cars/tiguan/main.jpg",
    images: [
      "images/cars/tiguan/1.jpg",
      "images/cars/tiguan/2.jpg",
      "images/cars/tiguan/3.jpg",
      "images/cars/tiguan/4.jpg",
      "images/cars/tiguan/5.jpg"
    ],
    type: "SUV",
    year: 2012,
    transmission: "Manual",
    fuel: "95",
    rating: 5,
    reviewCount: 58,
    featured: true
  },
  {
    id: 4,
    name: "Hyundai Solaris",
    price: 2999,
    image: "images/cars/solaris/main.jpg",
    images: [
      "images/cars/solaris/1.jpg",
      "images/cars/solaris/2.jpg",
      "images/cars/solaris/3.jpg",
      "images/cars/solaris/4.jpg"
    ],
    type: "Sedan",
    year: 2014,
    transmission: "Automatic",
    fuel: "95",
    rating: 5,
    reviewCount: 45,
    featured: true
  }
];