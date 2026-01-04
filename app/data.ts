type Product = {
  id: number;
  titel: string;
  desc?: string;
  img: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    titel: "Chicken Pizza",
    desc: "A delicious cheese burger with fresh ingredients.",  
    img: "/images/menu_1.jpg",
    price: 9.99,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
      {
        title: "Large",
        additionalPrice: 4,
      },
    ],
  },
    {           
    id: 2,
    titel: "Cheese Pizza",
    desc: "A delicious cheese pizza with fresh ingredients.",
    img: "/images/menu_2.jpg",
    price: 12.99,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
      {
        title: "Large",
        additionalPrice: 4,
      },
    ],
  },
    {           
    id: 3,
    titel: "Cheese Pizza",
    desc: "A delicious cheese pizza with fresh ingredients.",
    img: "/images/menu_3.jpg",
    price: 12.99,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },
      {
        title: "Large",
        additionalPrice: 4,
      },
    ], 
   
  },
    {           
    id: 4,
    titel: "Cheese Pasta",   
    desc: "A delicious cheese pasta with fresh ingredients.",   
    img: "/images/menu_4.jpg",   
    price: 12.99,
    options: [
        {                       
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },      
      {
        title: "Large",
        additionalPrice: 4,      
      },
    ],
    },
    {           
    id: 5,
    titel: "Cheese Pasta",   
    desc: "A delicious cheese pasta with fresh ingredients.",   
    img: "/images/menu_5.jpg",   
    price: 12.99,
    options: [
        {                       
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },      
      {
        title: "Large",
        additionalPrice: 4,      
      },
    ],   
    },
    {           
    id: 6,
    titel: "Cheese Pasta",   
    desc: "A delicious cheese pasta with fresh ingredients.",   
    img: "/images/menu_6.jpg",   
    price: 12.99,
    options: [
        {                       
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },      
      {
        title: "Large",
        additionalPrice: 4,      
      },
    ],
      
    },
    {           
    id: 7,
    titel: "Chowmein",
    desc: "A delicious chowmein with fresh ingredients.",
    img: "/images/menu_7.jpg",
    price: 12.99,
    options: [
        {                       
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },      
      {
        title: "Large",
        additionalPrice: 4,      
      },
    ],
    },
    {           
    id: 8,
    titel: "Spaghetti",
    desc: "A delicious spaghetti with fresh ingredients.",
    img: "/images/menu_8.jpg",
    price: 12.99,
    options: [
        {                       
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 2,
      },      
      {
        title: "Large",
        additionalPrice: 4,      
      },
    ],    
    },
];

