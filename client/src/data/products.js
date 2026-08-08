import macbook from "../assets/products/macbook.png";
import keyboard from "../assets/products/keyboard.png";
import headphones from "../assets/products/headphones.png";
import monitor from "../assets/products/monitor.png";
import mouse from "../assets/products/mouse.png";
import hub from "../assets/products/hub.png";
import ipad from "../assets/products/ipad.png";
import watch from "../assets/products/watch.png";

const products = [
  {
    id: 1,
    name: "MacBook Pro M4",
    brand: "Apple",
    category: "Laptop",
    price: 1999,
    oldPrice: 2199,
    rating: 4.9,
    image: macbook,
    badge: "New",
    description:
      "Experience powerful performance with the Apple M4 chip, Liquid Retina Display, 16GB RAM, and all-day battery life for professionals.",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    brand: "Logitech",
    category: "Keyboard",
    price: 149,
    oldPrice: 179,
    rating: 4.8,
    image: keyboard,
    badge: "Sale",
    description:
      "Mechanical RGB gaming keyboard with customizable lighting, fast response switches, and durable aluminum build.",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    brand: "Sony",
    category: "Headphones",
    price: 249,
    oldPrice: 299,
    rating: 4.7,
    image: headphones,
    badge: "Hot",
    description:
      "Premium wireless headphones featuring Active Noise Cancellation, crystal clear sound, and long battery life.",
  },
  {
    id: 4,
    name: "4K Monitor",
    brand: "Samsung",
    category: "Monitor",
    price: 499,
    oldPrice: 549,
    rating: 4.9,
    image: monitor,
    badge: "Best",
    description:
      "Ultra HD 4K monitor with vibrant colors, thin bezels, and smooth performance for gaming and creative work.",
  },
    {
    id: 5,
    name: "Gaming Mouse",
    brand: "Razer",
    category: "Accessories",
    price: 89,
    oldPrice: 109,
    rating: 4.8,
    image: mouse,
    badge: "Sale",
    description:
      "Ergonomic gaming mouse with RGB lighting, high precision optical sensor, and programmable buttons.",
  },
  {
    id: 6,
    name: "USB-C Hub",
    brand: "Anker",
    category: "Accessories",
    price: 59,
    oldPrice: 79,
    rating: 4.6,
    image: hub,
    badge: "New",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and fast charging support.",
  },
  {
    id: 7,
    name: "iPad Air M3",
    brand: "Apple",
    category: "Tablet",
    price: 799,
    oldPrice: 899,
    rating: 4.9,
    image: ipad,
    badge: "Hot",
    description:
      "Powerful Apple iPad Air with M3 chip, stunning Liquid Retina display, and Apple Pencil support.",
  },
  {
    id: 8,
    name: "Smart Watch",
    brand: "Apple",
    category: "Wearables",
    price: 399,
    oldPrice: 449,
    rating: 4.8,
    image: watch,
    badge: "Best",
    description:
      "Track your fitness, health, and notifications with a premium smartwatch featuring an always-on display.",
  },
];

export default products;