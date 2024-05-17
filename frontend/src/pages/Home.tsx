import {
  Banner,
  Container,
  CarouselBrand,
  CarouselProduct,
  CarouselBlog,
} from "@/components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CreditCard, Gift, Headset, Truck } from "lucide-react";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="space-y-4 bg-slate-100 py-4 px-2">
        <Container>
          <Carousel className="w-full bg-slate-50 py-4 rounded-lg shadow-sm ">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group flex gap-x-4 items-center justify-center cursor-pointer">
                  <Truck className="w-10 h-10 group-hover:-mt-1" />
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">Free Shipping</h3>
                    <span className="hidden sm:block">
                      On all orders over $75.00
                    </span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group flex gap-x-4 items-center justify-center cursor-pointer">
                  <Gift className="w-10 h-10 group-hover:-mt-1" />
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">
                      Daily Surprise Gift
                    </h3>
                    <span className="hidden sm:block">Save up to 50% off</span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group flex gap-x-4 items-center justify-center cursor-pointer">
                  <Headset className="w-10 h-10 group-hover:-mt-1" />
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">Support 24/7</h3>
                    <span className="hidden sm:block">Shop with an expert</span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group flex gap-x-4 items-center justify-center cursor-pointer">
                  <CreditCard className="w-10 h-10 group-hover:-mt-1" />
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold">Secure Payments</h3>
                    <span className="hidden sm:block">
                      100% Protected Payments
                    </span>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <CarouselProduct title="Popular Products" />
          <CarouselBrand />
          <CarouselBlog />
        </Container>
      </div>
    </>
  );
};

export default Home;
