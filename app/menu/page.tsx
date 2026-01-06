import Link from "next/link";

import { Button } from "@/components/ui/button";
import { menu } from "../data";

export const metadata = {
  title: "Menu Page",
  description:
    "Explore our delicious pizza menu and order your favorite pizza online! Fast delivery and great taste.",
  authors: [{ name: "mitali" }],
  keywords: ["pizza", "delivery", "food", "order", "online"],
};

const Menupage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 md:w-1/3 md:h-full bg-cover p-8" 
          style={{backgroundImage:`url(${category.img})`}}
        >
          <div
            className={`w-full md:w-1/2 ${category.color === "white" ? "text-white" : "text-black"}`}
          >
            <h1 className="uppercase font-bold text-3xl">
              {category.title}
            </h1>
            <p className="text-sm my-8">
              {category.desc}
            </p>
            <Button 
              
              className={`bg-${category.color === "white" ? "white text-black" : "black text-white"}  hover:bg-gray-700`}
              >
              Explore
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menupage;