import {
  camera,
  tv,
  headphone,
  speaker,
  watch,
  tab,
  tab1,
  tab2,
  tab3,
} from "@/assets/shoppings";
import { Product } from "@/interfaces";

export const products: Product[] = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "Olympus Pen E-PL9 Kit With 14-42, EZ Lens, Camera",
    brand: "Sony",
    tags: ["camera", "electronics", "photography"],
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
    price: 2999,
    category: "camera",
    rating: 4,
    inStock: true,
    size: [
      {
        name: "S",
        color: [
          {
            name: "Black",
            code: "#000000",
            quantity: 10,
          },
          {
            name: "White",
            code: "#ffffff",
            quantity: 5,
          },
          {
            name: "Red",
            code: "#ff0000",
            quantity: 5,
          },
        ],
      },
      {
        name: "M",
        color: [
          {
            name: "Black",
            code: "#000000",
            quantity: 10,
          },
          {
            name: "White",
            code: "#ffffff",
            quantity: 5,
          },
        ],
      },
    ],
    imageCover: camera,
    images: [camera, camera, camera],
    comments: [
      {
        id: "64a654593e91b8e73a351e9c",
        comment: "This is a great camera!",
        rating: 4,
        createdDate: "2021-10-10T10:00:00",
        user: {
          id: "64a654593e91b8e73a351e9c",
          name: "John Doe",
          email: "johndoe@test.com",
          gender: "male",
          photo: "https://xsgames.co/randomusers/avatar.php?g=male",
          role: "user",
        },
        likes: 10,
      },
      {
        id: "64a654593e91b8e73a351e9d",
        comment: "Amazing camera! I love it!",
        rating: 5,
        createdDate: "2021-10-10T10:00:00",
        user: {
          id: "64a654593e91b8e73a351e9d",
          name: "Jane Doe",
          email: "janedoe@test.com",
          gender: "female",
          photo: "https://xsgames.co/randomusers/avatar.php?g=female",
          role: "user",
        },
        likes: 20,
      },
    ],
  },
  {
    id: "64a654593e91b8e73a351e9d",
    name: "Samsung 55 Inch 4K Smart TV",
    brand: "Samsung",
    tags: ["tv", "electronics", "samsung"],
    description:
      "The Samsung 55 Inch 4K Smart TV is a great TV for the price. It has a beautiful display, excellent sound quality, and a ton of smart features. The Samsung 55 Inch 4K Smart TV is a great TV for the price. It has a beautiful display, excellent sound quality, and a ton of smart features.",
    price: 799,
    category: "tv",
    rating: 4.5,
    inStock: true,
    size: [
      {
        name: "S",
        color: [
          {
            name: "Black",
            code: "#000000",
            quantity: 10,
          },
          {
            name: "White",
            code: "#ffffff",
            quantity: 5,
          },
        ],
      },
    ],
    imageCover: tv,
    images: [tv, tv, tv],
    comments: [],
  },
  {
    id: "64a654593e91b8e73a351e9e",
    name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    brand: "Sony",
    tags: ["headphone", "sony", "music"],
    description:
      "The Sony WH-1000XM4 Wireless Noise Cancelling Headphones are the best noise cancelling headphones on the market. They have fantastic sound quality, excellent noise cancelling, and a comfortable design. The Sony WH-1000XM4 Wireless Noise Cancelling Headphones are the best noise cancelling headphones on the market. They have fantastic sound quality, excellent noise cancelling, and a comfortable design.",
    price: 349,
    category: "headphone",
    rating: 5,
    inStock: true,
    size: [
      {
        name: "S",
        color: [
          {
            name: "Black",
            code: "#000000",
            quantity: 10,
          },
          {
            name: "White",
            code: "#ffffff",
            quantity: 5,
          },
        ],
      },
    ],
    imageCover: headphone,
    images: [headphone, headphone, headphone],
    comments: [],
  },
  {
    id: "64a654593e91b8e73a351e9f",
    name: "Apple One SL - Microphone-Free Smart Speaker",
    brand: "Apple",
    tags: ["speaker", "electronics", "Apple"],
    description:
      "The Apple One SL is a fantastic smart speaker. It has great sound quality, a sleek design, and works with all of the major smart assistants. The Apple One SL is a fantastic smart speaker. It has great sound quality, a sleek design, and works with all of the major smart assistants.",
    price: 179,
    category: "speaker",
    rating: 4.5,
    inStock: true,
    size: [
      {
        name: "S",
        color: [
          {
            name: "Black",
            code: "#000000",
            quantity: 10,
          },
          {
            name: "White",
            code: "#ffffff",
            quantity: 5,
          },
        ],
      },
    ],
    imageCover: speaker,
    images: [speaker, speaker, speaker],
    comments: [],
  },
  {
    id: "64a654593e91b8e73a351e9g",
    name: "Apple Watch Series 7 GPS, 41mm",
    brand: "Apple",
    tags: ["watch", "apple"],
    description:
      "The Apple Watch Series 7 is the best smartwatch on the market. It has a beautiful display, excellent fitness tracking features, and a ton of apps. The Apple Watch Series 7 is the best smartwatch on the market. It has a beautiful display, excellent fitness tracking features, and a ton of apps.",
    price: 399,
    category: "watch",
    rating: 4,
    inStock: true,
    size: [
      {
        name: "S",
        color: [
          {
            name: "Black",
            code: "#000000",
            quantity: 10,
          },
          {
            name: "White",
            code: "#ffffff",
            quantity: 5,
          },
        ],
      },
    ],
    imageCover: watch,
    images: [watch, watch, watch],
    comments: [],
  },
  {
    id: "64a654593e91b8e73a351e9h",
    name: "Samsung Galaxy Tab S7 FE 12.4 Inch 64GB",
    brand: "Samsung",
    tags: ["tablet", "samsung"],
    description:
      "The Samsung Galaxy Tab S7 FE is a fantastic tablet. It has a beautiful display, excellent battery life, and a ton of great features. The Samsung Galaxy Tab S7 FE is a fantastic tablet. It has a beautiful display, excellent battery life, and a ton of great features.",
    price: 429,
    category: "tab",
    rating: 4.5,
    inStock: true,
    size: [
      {
        name: "S",
        color: [
          {
            name: "Black",
            code: "#000000",
            quantity: 10,
          },
          {
            name: "White",
            code: "#ffffff",
            quantity: 5,
          },
        ],
      },
    ],
    imageCover: tab,
    images: [tab, tab1, tab2, tab3],
    comments: [],
  },
];
