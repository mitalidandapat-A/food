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

export type MenuItem = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: "white" | "black";
};

export const menu: MenuItem[] = [
  {
    id: 1,
    slug: "pasta",
    title: "Italian Pasta",
    desc: "A delicious pasta with fresh ingredients.",
    img: "/images/category2.jpg",
    color: "white",
  },
  {
    id: 2,
    slug: "pizza",
    title: "Cheese Pizza",
    desc: "A delicious pizza with fresh ingredients.",
    img: "/images/menu_2.jpg",
    color: "black",
  },
  {
    id: 3,
    slug: "burger",
    title: "Juicy Burger",
    desc: "A delicious burger with fresh ingredients.",
    img: "/images/category5.jpg",
    color: "white",
  },
];


export const Pizzas : Products = [
  {   
    id: 1,
    titel: "Sicilian ",
    desc: "A delicious cheese pizza with fresh ingredients.",
    img: "/images/menu9.jpg",
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
    id: 2,
    titel: "Margherita",
    desc: "A delicious cheese pizza with fresh ingredients.",
    img: "/images/menu_10.jpg",  
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
    titel: "Cheese Pasta",   
    desc: "A delicious cheese pasta with fresh ingredients.",   
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
    ]
  },
  {           
    id: 4,
    titel: "Chowmein",
    desc: "A delicious chowmein with fresh ingredients.",
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
    titel: "Spaghetti",
    desc: "A delicious spaghetti with fresh ingredients.",
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
    titel: "Pizza",
    desc: "A delicious pizza with fresh ingredients.",
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
];