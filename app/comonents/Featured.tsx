import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { featuredProducts } from "../data";
import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    <div className="text-red-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-10  transition-all duration-300  ">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden p-6 rounded-md shadow-lg  ">
          <Image
            src={product.img}
            alt={product.titel}
            width={500}
            height={300}
            className="h-48 w-full object-cover hover:scale-110 transition-all duration-500 "
          />

          <CardHeader className="text-xl  uppercase items-center text-center ">
            <CardTitle className="font-bold ">{product.titel}</CardTitle>
            <CardDescription className="p-2">{product.desc}</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col  items-center text-center">
            <span className="font-semibold text-xl ">${product.price}</span>
            <Button className="mt-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600">Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Featured;
