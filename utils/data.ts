import { Deal, MenuItem } from "./interface";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Single Person Biryani",
    description: "Served with Mint Raita",
    price: 450,
    category: "biryani",
  },
  {
    id: "2",
    name: "2 Person Biryani",
    description: "Served with Mint Raita",
    price: 900,
    category: "biryani",
  },
  {
    id: "3",
    name: "4 Person Biryani",
    description: "Served with Mint Raita",
    price: 1800,
    category: "biryani",
  },
  {
    id: "4",
    name: "Pepsi/7UP (345ML)",
    description: "Chilled soft drink",
    price: 90,
    category: "beverages",
  },
  {
    id: "5",
    name: "Pepsi/7UP (Half Litre)",
    description: "Chilled soft drink",
    price: 140,
    category: "beverages",
  },
  {
    id: "6",
    name: "Pepsi/7UP (1.5 Litre)",
    description: "Family size drink",
    price: 250,
    category: "beverages",
  },
  {
    id: "7",
    name: "Mineral Water (Half Litre)",
    description: "Pure drinking water",
    price: 80,
    category: "beverages",
  },
  {
    id: "8",
    name: "Mineral Water (1.5 Litre)",
    description: "Family size water",
    price: 140,
    category: "beverages",
  },
  {
    id: "9",
    name: "Shami Kabab",
    description: "Traditional desi kabab",
    price: 80,
    category: "extras",
  },
  {
    id: "10",
    name: "Extra Raita",
    description: "Fresh mint raita",
    price: 70,
    category: "extras",
  },
  {
    id: "11",
    name: "Salad",
    description: "Fresh garden salad",
    price: 70,
    category: "extras",
  },
];

export const specialDeals: Deal[] = [
  {
    id: "deal1",
    name: "DEAL # 1",
    description: "Single Person Serving with Mint Raita, 345ml Drink",
    price: 500,
    items: ["Single Person Biryani", "Mint Raita", "345ml Drink"],
  },
  {
    id: "deal2",
    name: "DEAL # 2",
    description:
      "Single Person Serving with Mint Raita, Salad, 1 Shami Kabab and 345ml Drink",
    price: 600,
    items: [
      "Single Person Biryani",
      "Mint Raita",
      "Salad",
      "1 Shami Kabab",
      "345ml Drink",
    ],
  },
  {
    id: "deal3",
    name: "DEAL # 3",
    description: "2 Person Serving with Mint Raita and 500ml Drink",
    price: 1000,
    items: ["2 Person Biryani", "Mint Raita", "500ml Drink"],
  },
  {
    id: "deal4",
    name: "DEAL # 4",
    description:
      "2 Person Serving with Mint Raita, Salad, 2 Shami Kabab and 500ml Drink",
    price: 1200,
    items: [
      "2 Person Biryani",
      "Mint Raita",
      "Salad",
      "2 Shami Kabab",
      "500ml Drink",
    ],
  },
  {
    id: "deal5",
    name: "DEAL # 5",
    description: "4 Person Serving with Mint Raita and 1.5 liter Drink",
    price: 1600,
    items: ["4 Person Biryani", "Mint Raita", "1.5L Drink"],
  },
  {
    id: "deal6",
    name: "DEAL # 6",
    description:
      "4 Person Serving with Mint Raita, Salad, 4 Shami Kabab and 1.5 liter Drink",
    price: 2000,
    items: [
      "4 Person Biryani",
      "Mint Raita",
      "Salad",
      "4 Shami Kabab",
      "1.5L Drink",
    ],
  },
];
