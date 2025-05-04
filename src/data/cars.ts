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
    image: "https://i.ibb.co/hFvVR8JB/kuga3.jpg",
    images: [
      "https://i.ibb.co/V0Q1t88P/IMG-1522.jpg",
      "https://i.ibb.co/tPDGjpFQ/IMG-1526.jpg",
      "https://i.ibb.co/3y1XCV8p/IMG-1527.jpg",
      "https://i.ibb.co/mVqwKv6h/IMG-1529.jpg",
      "https://i.ibb.co/S7K10TLK/IMG-1530.jpg",
      "https://i.ibb.co/Xf5HR0w7/kuga.jpg",
      "https://i.ibb.co/99pfPD6T/kuga1.jpg",
      "https://i.ibb.co/gbXrFH5w/kuga2.jpg",
      "https://i.ibb.co/hFvVR8JB/kuga3.jpg"
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
    image: "https://i.ibb.co/WN1yQwKd/IMG-9986.jpg",
    images: [
      "https://i.ibb.co/WN1yQwKd/IMG-9986.jpg",
      "https://i.ibb.co/GLjLXrQ/IMG-9987.jpg",
      "https://i.ibb.co/F4p8kRHw/IMG-9988.jpg",
      "https://i.ibb.co/gb2Pts3G/IMG-9989.jpg"
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
    image: "https://i.ibb.co/99vTDc95/IMG-9952.jpg",
    images: [
      "https://i.ibb.co/99vTDc95/IMG-9952.jpg",
      "https://i.ibb.co/Cp0bVnhh/IMG-9953.jpg",
      "https://i.ibb.co/mx6Br8N/IMG-9954.jpg",
      "https://i.ibb.co/43Mg6f9/IMG-9955.jpg",
      "https://i.ibb.co/s8Mbq5h/IMG-9956.jpg"
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
    image: "https://i.ibb.co/R4d0tDbB/IMG-9975.jpg",
    images: [
      "https://i.ibb.co/R4d0tDbB/IMG-9975.jpg",
      "https://i.ibb.co/hx41Fb5F/IMG-9976.jpg",
      "https://i.ibb.co/0ydKfLZh/IMG-9977.jpg",
      "https://i.ibb.co/NggS4Rfd/IMG-9978.jpg"
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