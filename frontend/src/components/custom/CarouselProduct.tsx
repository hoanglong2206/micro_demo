import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "@/interfaces";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface CarouselProductProps {
  title: string;
  data: Product[];
}

export default function CarouselProduct({ title, data }: CarouselProductProps) {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-3xl">{title}</h3>
        <Button onClick={() => navigate("/shop")} variant={"outline"}>
          SEE ALL <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="py-2">
          {data.map((product, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <ProductCard data={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
