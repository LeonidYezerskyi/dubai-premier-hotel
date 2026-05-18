import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Experience refined luxury in our Royal Gold Suite at Dubai Premier Hotel. Designed for couples, this room features elegant gold and cream tones, premium marble finishes, and sophisticated Arabian-inspired details. Enjoy a plush king-size bed, ambient lighting, and breathtaking views of the Dubai skyline through floor-to-ceiling windows. A perfect blend of opulence and comfort for an unforgettable stay.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 450,
    discount: 35,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Stay in our Modern Minimal Suite, a calm and elegant space designed with clean lines and neutral tones. This room offers a peaceful atmosphere with soft textures, high-end materials, and panoramic city views. Perfect for guests who appreciate simplicity, clarity, and modern aesthetics in the heart of Dubai.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 400,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Inspired by the Arabian desert, this Desert Luxury Room blends warm sand tones, natural textures, and soft ambient lighting. Ideal for families or small groups, it offers a cozy yet premium environment with spacious layout and comfortable bedding, creating a relaxing retreat after a day in Dubai.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 600,
    discount: 50,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Enjoy breathtaking city views in our Skyline Panoramic Suite. Featuring expansive glass walls and modern luxury furnishings, this room is designed to showcase Dubai’s iconic skyline, especially at night. A perfect choice for guests who want a visually stunning and premium experience.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 450,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "Designed for productivity and comfort, our Business Executive Room combines sleek design with functionality. Featuring a dedicated workspace, ergonomic seating, and elegant dark-toned interiors, it is ideal for business travelers seeking both efficiency and relaxation.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 900,
    discount: 120,
    image: imageUrl + "cabin-006.jpg",
    description:
      "Create unforgettable moments in our Romantic Deluxe Room. With warm lighting, soft textures, and an intimate atmosphere, this room is perfect for couples. Enjoy a cozy bed, elegant decor, and a relaxing ambiance designed for comfort and connection.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 700,
    discount: 150,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Our spacious Family Suite is perfect for larger groups or families. Designed with comfort and practicality in mind, it features multiple sleeping areas, warm tones, and a welcoming layout. A great balance of luxury and convenience for a shared stay in Dubai.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1500,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "Step into the future with our Futuristic Smart Room. This high-tech space features smart lighting, modern design, and sleek surfaces throughout. Designed for guests who love innovation, this room offers a unique and immersive luxury experience unlike any other in Dubai Premier Hotel.",
  },
];
