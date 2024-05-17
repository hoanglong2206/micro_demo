import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { brands } from "@/utils/brands";
import Autoplay from "embla-carousel-autoplay";

const CarouselBrand = () => {
  return (
    <Carousel
      className="w-full bg-slate-50"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {brands.map((brand, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 cursor-pointer "
          >
            <div className="p-1">
              <Card className="border-none shadow-md">
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="object-contain h-full w-full hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselBrand;
