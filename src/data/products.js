const products = [
  {
    id: 1,
    name: "Ultra Coffee Beans",
    description: "Premium roasted coffee beans with rich aroma.",
    imageUrl: "https://picsum.photos/200/300?random=1",
    videoUrl: "https://example.com/video1.mp4",
    price: 9.99,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: "Wireless Headphones",
    description: "Bluetooth headphones with noise cancellation.",
    imageUrl: "https://picsum.photos/200/300?random=2",
    videoUrl: "https://example.com/video2.mp4",
    price: 49.99,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: "Sports Water Bottle",
    description: "Durable stainless steel bottle for hydration.",
    imageUrl: "https://picsum.photos/200/300?random=3",
    videoUrl: "https://example.com/video3.mp4",
    price: 14.50,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Ergonomic RGB gaming mouse with 7 buttons.",
    imageUrl: "https://picsum.photos/200/300?random=4",
    videoUrl: "https://example.com/video4.mp4",
    price: 29.90,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    name: "Eco Notebook",
    description: "Recycled paper notebook for daily notes.",
    imageUrl: "https://picsum.photos/200/300?random=5",
    videoUrl: "https://example.com/video5.mp4",
    price: 6.20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    name: "Yoga Mat",
    description: "Non-slip yoga mat for exercises and stretching.",
    imageUrl: "https://picsum.photos/200/300?random=6",
    videoUrl: "https://example.com/video6.mp4",
    price: 21.99,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    name: "LED Table Lamp",
    description: "Minimalist lamp with adjustable brightness.",
    imageUrl: "https://picsum.photos/200/300?random=7",
    videoUrl: "https://example.com/video7.mp4",
    price: 17.75,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    name: "Casual Backpack",
    description: "Lightweight backpack suitable for school and travel.",
    imageUrl: "https://picsum.photos/200/300?random=8",
    videoUrl: "https://example.com/video8.mp4",
    price: 34.10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 9,
    name: "Smart Fitness Band",
    description: "Track your activity, sleep, and heart rate.",
    imageUrl: "https://picsum.photos/200/300?random=9",
    videoUrl: "https://example.com/video9.mp4",
    price: 55.45,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 10,
    name: "Wooden Sunglasses",
    description: "Stylish eco-friendly sunglasses.",
    imageUrl: "https://picsum.photos/200/300?random=10",
    videoUrl: "https://example.com/video10.mp4",
    price: 25.60,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 11,
    name: "Portable Fan",
    description: "Rechargeable mini fan for hot days.",
    imageUrl: "https://picsum.photos/200/300?random=11",
    videoUrl: "https://example.com/video11.mp4",
    price: 12.40,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 12,
    name: "Running Shoes",
    description: "Lightweight running shoes with breathable mesh.",
    imageUrl: "https://picsum.photos/200/300?random=12",
    videoUrl: "https://example.com/video12.mp4",
    price: 69.99,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 13,
    name: "Cookware Set",
    description: "Non-stick pots and pans set for cooking.",
    imageUrl: "https://picsum.photos/200/300?random=13",
    videoUrl: "https://example.com/video13.mp4",
    price: 89.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 14,
    name: "Bluetooth Speaker",
    description: "360° stereo sound portable speaker.",
    imageUrl: "https://picsum.photos/200/300?random=14",
    videoUrl: "https://example.com/video14.mp4",
    price: 39.20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 15,
    name: "Office Chair",
    description: "Comfortable ergonomic chair with lumbar support.",
    imageUrl: "https://picsum.photos/200/300?random=15",
    videoUrl: "https://example.com/video15.mp4",
    price: 120.00,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 16,
    name: "Digital Alarm Clock",
    description: "LED display clock with multiple alarm sounds.",
    imageUrl: "https://picsum.photos/200/300?random=16",
    videoUrl: "https://example.com/video16.mp4",
    price: 18.90,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 17,
    name: "Stainless Steel Knife Set",
    description: "Razor-sharp kitchen knife set with block.",
    imageUrl: "https://picsum.photos/200/300?random=17",
    videoUrl: "https://example.com/video17.mp4",
    price: 75.20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 18,
    name: "Graphic Hoodie",
    description: "Comfortable hoodie with stylish graphic print.",
    imageUrl: "https://picsum.photos/200/300?random=18",
    videoUrl: "https://example.com/video18.mp4",
    price: 32.50,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 19,
    name: "Electric Toothbrush",
    description: "Rechargeable brush with multiple cleaning modes.",
    imageUrl: "https://picsum.photos/200/300?random=19",
    videoUrl: "https://example.com/video19.mp4",
    price: 44.70,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 20,
    name: "Smart Desk Organizer",
    description: "Desk organizer with phone charging dock.",
    imageUrl: "https://picsum.photos/200/300?random=20",
    videoUrl: "https://example.com/video20.mp4",
    price: 28.30,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = products;
