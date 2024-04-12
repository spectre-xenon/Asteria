type item = {
  id: number;
  name: string;
  price: number;
  category: string[];
  full: string;
  outOfStock: boolean;
};

export const items: item[] = [
  {
    id: 0,
    name: "Black-hole\nbath bomb",
    price: 299.99,
    category: ["Cosmetics"],
    full: "https://utfs.io/f/764a15ef-83b6-4f32-aee6-0baff01a049e-ryk3bf.jpg",
    outOfStock: false,
  },

  {
    id: 1,
    name: "Celestial\nwater",
    price: 999.99,
    category: ["Drinks"],
    full: "https://utfs.io/f/63995f1a-409b-4219-ab90-8fa1f887cf7b-43w224.jpg",
    outOfStock: false,
  },
  {
    id: 2,
    name: "Miniature\nsolar system",
    price: 80,
    category: ["Models"],
    full: "https://utfs.io/f/8c5376f1-4348-403c-8873-5f2eef314349-cp8020.jpg",
    outOfStock: false,
  },
  {
    id: 3,
    name: "Portable\nmicro-biome",
    price: 20.99,
    category: ["Models"],
    full: "https://utfs.io/f/a136ba6a-f014-4bcd-948c-486143fb8a36-v9igc7.jpg",
    outOfStock: false,
  },
  {
    id: 4,
    name: "Exotic egg",
    price: 449.99,
    category: ["Food"],
    full: "https://utfs.io/f/16bb7a6d-82a7-47f4-b8aa-f718c9292b85-cyknkv.jpg",
    outOfStock: false,
  },
  {
    id: 5,
    name: "Class S\nweapon",
    price: 99999,
    category: ["Weapons"],
    full: "https://utfs.io/f/e6bd4084-c4cd-4443-b6b4-4ee817c7e64f-e481u4.jpg",
    outOfStock: true,
  },
  {
    id: 6,
    name: "Original\nquasar fire",
    price: 1999.99,
    category: ["Cosmetics"],
    full: "https://utfs.io/f/b266e96f-c0ba-4bda-90d1-330cc1503bb7-rkk6ot.jpg",
    outOfStock: false,
  },
  {
    id: 7,
    name: "Rock Asteroid",
    price: 54,
    category: ["Pets"],
    full: "https://utfs.io/f/c71333aa-4297-4678-baca-4548f58c07b8-7586wx.jpg",
    outOfStock: false,
  },
];
