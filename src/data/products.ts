export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Premium Panjabi",
    category: "Panjabi",
    price: 1890,
    image: "https://www.lerevecraze.com/wp-content/uploads/2024/02/mpp16688-4.jpg",
    rating: 4.8,
    colors: ["White", "Off-White"],
    sizes: ["40", "42", "44", "46"],
    inStock: true,
    description: "Our signature white cotton Panjabi with intricate embroidery around the collar. Perfect for Eid and Jummah."
  },
  {
    id: 2,
    name: "Silk Blend Festive Kurta",
    category: "Kurta",
    price: 2650,
    image: "https://www.lerevecraze.com/wp-content/uploads/2024/02/76374889-7fad-4a4a-a05c-507b81823963-600x722.jpg",
    rating: 4.9,
    colors: ["Maroon", "Black", "Emerald"],
    sizes: ["38", "40", "42", "44"],
    inStock: true,
    description: "Experience true Deshi elegance with this premium silk blend kurta. Ideal for wedding seasons and Gaye Holud."
  },
  {
    id: 3,
    name: "Karchupi Work Panjabi",
    category: "Panjabi",
    price: 3200,
    image: "https://www.lerevecraze.com/wp-content/uploads/2025/07/f1f15466-79bf-4b5e-ba3a-ba9c2f7dd862.jpg",
    rating: 4.7,
    colors: ["Navy", "Olive"],
    sizes: ["40", "42", "44"],
    inStock: false,
    description: "Exquisite hand-crafted Karchupi work on a dark navy fabric. Stand out at any cultural event."
  },
  {
    id: 4,
    name: "Handloom Cotton Kurta",
    category: "Kurta",
    price: 1450,
    image: "https://www.lerevecraze.com/wp-content/uploads/2025/05/02992014-d207-4420-a44d-60f028ee7773.jpg",
    rating: 4.5,
    colors: ["Yellow", "Orange"],
    sizes: ["38", "40", "42", "44"],
    inStock: true,
    description: "Bright and comfortable handloom cotton. A staple for Pahela Baishakh and summer festivities."
  },
  {
    id: 5,
    name: "Classic Beige Handloom Panjabi",
    category: "Panjabi",
    price: 1550,
    image: "https://www.lerevecraze.com/wp-content/uploads/2022/09/83cbbcd8f0dcf8a4a5f3f8aa9484dc1f.jpg",
    rating: 4.6,
    colors: ["Beige", "Cream"],
    sizes: ["38", "40", "42", "44"],
    inStock: true,
    description: "A breathable, lightweight handloom Panjabi tailored for comfort and classic style."
  },
  {
    id: 6,
    name: "Premium Jacquard Panjabi",
    category: "Panjabi",
    price: 2100,
    image: "https://www.lerevecraze.com/wp-content/uploads/2022/10/mpp16057-2.jpg",
    rating: 4.3,
    colors: ["Charcoal", "Black"],
    sizes: ["38", "40", "42", "44"],
    inStock: true,
    description: "Premium Jacquard fabric with intricate weave patterns. Perfect for evening wear."
  },
  {
    id: 7,
    name: "Festive Embroidered Panjabi",
    category: "Panjabi",
    price: 2650,
    image: "https://www.lerevecraze.com/wp-content/uploads/2022/11/MPP16017-1.jpg",
    rating: 4.7,
    colors: ["Maroon", "Red"],
    sizes: ["40", "42", "44", "46"],
    inStock: true,
    description: "A stunning festive Panjabi featuring detailed embroidery on the collar and placket."
  },
  {
    id: 8,
    name: "Minimalist Viscose Kurta",
    category: "Kurta",
    price: 1800,
    image: "https://www.lerevecraze.com/wp-content/uploads/2023/01/e07234d1645552d7ce453d98e23fb423.jpg",
    rating: 4.5,
    colors: ["Olive", "Khaki"],
    sizes: ["38", "40", "42"],
    inStock: true,
    description: "Clean, minimalist viscose Kurta with a modern straight cut for everyday wear."
  },
  {
    id: 9,
    name: "Royal Silk Blend Panjabi",
    category: "Panjabi",
    price: 3200,
    image: "https://www.lerevecraze.com/wp-content/uploads/2023/03/eea9866e-3eca-4c97-887e-d1f2d16b1d93.jpg",
    rating: 4.8,
    colors: ["Navy", "Dark Blue"],
    sizes: ["40", "42", "44", "46"],
    inStock: true,
    description: "Luxurious silk blend Panjabi offering a royal aesthetic for weddings and grand events."
  },
  {
    id: 10,
    name: "Geometric Print Panjabi",
    category: "Panjabi",
    price: 1650,
    image: "https://www.lerevecraze.com/wp-content/uploads/2023/03/7a35f8a1-1850-4c12-82f8-e0f23ebca837.jpg",
    rating: 4.4,
    colors: ["Light Blue", "Silver"],
    sizes: ["38", "40", "42", "44"],
    inStock: true,
    description: "Modern geometric prints on soft cotton fabric. A perfect blend of tradition and contemporary art."
  },
  {
    id: 11,
    name: "Classic Cotton Kurta",
    category: "Kurta",
    price: 1350,
    image: "https://www.lerevecraze.com/wp-content/uploads/2023/04/83d557e4-6147-45a1-ad0d-5b523837fb52.jpg",
    rating: 4.4,
    colors: ["Gold", "Yellow"],
    sizes: ["38", "40", "42"],
    inStock: false,
    description: "Everyday comfort in this classic cotton Kurta. Bright and vibrant for festive mornings."
  },
  {
    id: 12,
    name: "Textured Casual Panjabi",
    category: "Panjabi",
    price: 1450,
    image: "https://www.lerevecraze.com/wp-content/uploads/2023/04/0282079d-8deb-4f36-8c4b-697d623ee3ae.jpg",
    rating: 4.6,
    colors: ["Rust", "Brown"],
    sizes: ["40", "42", "44"],
    inStock: true,
    description: "Subtle textured fabric brings a unique tactile feel to this casual everyday Panjabi."
  }
];
