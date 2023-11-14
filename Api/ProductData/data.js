const data = [
  {
    id: "thapaserialnoa",
    name: "NoteBook",
    company: "Classmate",
    price: 210,
    colors: ["#ff0000", "#000000", "#CDD0D0"],
    image: "https://m.media-amazon.com/images/I/81JkOZyEfSL.jpg",
    description:
      "Classmate Origami Notebooks - Single Line, 172 Pages, 240 mm x 180 mm - Pack Of 4",

    category: "notebook",
    featured: true,
  },
  {
    id: "thapaserialnob",
    name: "NoteBook",
    company: "Camlin",
    price: 170,
    colors: ["#000", "#22D3EF"],
    image: "https://m.media-amazon.com/images/I/81iOPVRbITL._SL1500_.jpg",
    description: "Camlin Unruled 392 Pages 29.7 x 21cm Notebook unruled",
    category: "notebook",
    shipping: false,
  },
  {
    id: "thapaserialnoc",
    name: "NoteBook",
    company: "Navneet",

    price: 346,
    colors: ["#22D3EF", "#CDD0D0"],
    image: "https://m.media-amazon.com/images/I/61PrR+rOStL._SL1100_.jpg",
    description:
      "Navneet Youva | Soft Bound Long Book | A4 Size - 21 Cm X 29.7 Cm | Rainbow Design Notebook For Students | Single Line | 172 Pages | Pack Of 6",
    category: "notebook",
  },
  {
    id: "thapaserialnod",
    name: "Montex Pen",
    company: "Montex",
    price: 396,
    colors: ["#000", "#000000", "#CDD0D0"],
    image: "https://m.media-amazon.com/images/I/71aOo3TDb1L._SL1500_.jpg",
    description:
      "Montex Student Fountain Pen (Pack Of 20) With (Free Ink Cartidge Inside Each Pen) By Dtl Company|Blue",
    category: "pen",
    shipping: true,
  },
  {
    id: "thapaserialnoe",
    name: "Reynolds TRIMAX 3",
    company: "Reynolds",
    price: 140,
    colors: ["#000", "#CDD0D0"],
    image: "https://m.media-amazon.com/images/I/71oUYMxZJvL._SL1500_.jpg",
    description:
      " Reynolds TRIMAX 3 CT BLISTER - BLUE | Roller Ball Point Pen set With Comfortable Grip | Pens For Writing | School and Office Stationery | 0.5mm Tip",
    category: "pen",
    shipping: true,
    featured: true,
  },
  {
    id: "thapaserialnof",
    name: " Re-Writable LCD",
    company: "Classmate",
    price: 1199,
    colors: ["#000000", "#CDD0D0"],
    image: "https://m.media-amazon.com/images/I/51FAkEGM8iL._SL1200_.jpg",
    description:
      "Portronics Ruffpad 15 Re-Writable LCD Screen 38.1cm (15-inch) Writing Pad for Drawing, Playing, Handwriting Gifts for Kids & Adults (Grey)",
    category: "Drawing",
    shipping: true,
    featured: true,
  },
  //   {
  //     id: "thapaserialnog",
  //     name: "Asus gseries",
  //     company: "asus",
  //     price: 23999,
  //     colors: ["#CDD0D0", "#000"],
  //     image:
  //       "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description:
  //       "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
  //     category: "laptop",
  //     shipping: true,
  //   },
  //   {
  //     id: "thapaserialnoh",
  //     name: "Accessories",
  //     price: 1099999,
  //     company: "lenova",
  //     colors: ["#000", "#CDD0D0"],
  //     image:
  //       "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description:
  //       "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
  //     category: "accessories",
  //     featured: true,
  //     shipping: true,
  //   },
  //   {
  //     id: "thapaserialnoi",
  //     name: "Iwatch",
  //     price: 39999,
  //     company: "apple",
  //     colors: ["#000000"],
  //     image:
  //       "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description:
  //       "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
  //     category: "watch",
  //     shipping: true,
  //   },
  //   {
  //     id: "thapaserialnoj",
  //     name: "user need",
  //     company: "apple",
  //     price: 300099,
  //     colors: ["#ff0000", "#22D3EF", "#000000"],
  //     image:
  //       "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description:
  //       "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
  //     category: "accessories",
  //   },
  //   {
  //     id: "thapaserialnok",
  //     name: "rolex premium",
  //     company: "rolex",
  //     price: 999999,
  //     colors: ["#000000", "#CDD0D0"],
  //     image:
  //       "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description:
  //       "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
  //     category: "watch",
  //   },
  //   {
  //     id: "thapaserialnol",
  //     name: "galaxy w20",
  //     price: 311999,
  //     company: "samsung",
  //     colors: ["#22D3EF", "#ff0000", "#000000"],
  //     image:
  //       "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     description:
  //       "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
  //     category: "watch",
  //     featured: true,
  //   },
];

module.exports = data;

// const data =
// [
//   {
//       "id": "thapaserialnoa",
//       "name": "Notebooks",
//       "company": "Classmate",
//       "price": 210,
//       "colors": [
//           "#ff0000",
//           "#000000",
//           "#CDD0D0"
//       ],
//       "image": "https://m.media-amazon.com/images/I/81JkOZyEfSL.jpg",
//       "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "mobile",
//       "featured": true
//   },
//   {
//       "id": "thapaserialnob",
//       "name": "samsung s20",
//       "company": "samsung",
//       "price": 5000,
//       "colors": [
//           "#000",
//           "#22D3EF"
//       ],
//       "image": "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "mobile",
//       "shipping": true
//   },
//   {
//       "id": "thapaserialnoc",
//       "name": "Dell Series",
//       "company": "dell",
//       "price": 600000,
//       "colors": [
//           "#22D3EF",
//           "#CDD0D0"
//       ],
//       "image": "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "laptop"
//   },
//   {
//       "id": "thapaserialnod",
//       "name": "Nokia 420",
//       "company": "nokia",
//       "price": 12599,
//       "colors": [
//           "#000",
//           "#000000",
//           "#CDD0D0"
//       ],
//       "image": "https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "mobile",
//       "shipping": true
//   },
//   {
//       "id": "thapaserialnoe",
//       "name": "Mac Pc",
//       "company": "apple",
//       "price": 4000099,
//       "colors": [
//           "#000",
//           "#CDD0D0"
//       ],
//       "image": "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "computer",
//       "shipping": true
//   },
//   {
//       "id": "thapaserialnof",
//       "name": "Macbook Pro",
//       "company": "apple",
//       "price": 42999,
//       "colors": [
//           "#000000",
//           "#CDD0D0"
//       ],
//       "image": "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "laptop",
//       "shipping": true
//   },
//   {
//       "id": "thapaserialnog",
//       "name": "Asus gseries",
//       "company": "asus",
//       "price": 23999,
//       "colors": [
//           "#CDD0D0",
//           "#000"
//       ],
//       "image": "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "laptop",
//       "shipping": true
//   },
//   {
//       "id": "thapaserialnoh",
//       "name": "Accessories",
//       "price": 1099999,
//       "company": "lenova",
//       "colors": [
//           "#000",
//           "#CDD0D0"
//       ],
//       "image": "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "accessories",
//       "featured": true,
//       "shipping": true
//   },
//   {
//       "id": "thapaserialnoi",
//       "name": "Iwatch",
//       "price": 39999,
//       "company": "apple",
//       "colors": [
//           "#000000"
//       ],
//       "image": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "watch",
//       "shipping": true
//   },
//   {
//       "id": "thapaserialnoj",
//       "name": "user need",
//       "company": "apple",
//       "price": 300099,
//       "colors": [
//           "#ff0000",
//           "#22D3EF",
//           "#000000"
//       ],
//       "image": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "accessories"
//   },
//   {
//       "id": "thapaserialnok",
//       "name": "rolex premium",
//       "company": "rolex",
//       "price": 999999,
//       "colors": [
//           "#000000",
//           "#CDD0D0"
//       ],
//       "image": "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "watch"
//   },
//   {
//       "id": "thapaserialnol",
//       "name": "galaxy w20",
//       "price": 311999,
//       "company": "samsung",
//       "colors": [
//           "#22D3EF",
//           "#ff0000",
//           "#000000"
//       ],
//       "image": "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
//       "category": "watch",
//       "featured": true
//   }
// ]

// module.exports = data;
