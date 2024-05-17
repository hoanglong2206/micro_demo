import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import banner1 from "@/assets/main-banner.jpg";
import banner2 from "@/assets/main-banner-1.jpg";
import catBanner1 from "@/assets/catbanner-01.jpg";
import catBanner2 from "@/assets/catbanner-02.jpg";
import catBanner3 from "@/assets/catbanner-03.jpg";
import catBanner4 from "@/assets/catbanner-04.jpg";
import { BannerCard } from "@/components";

type bannerType = {
  banner: string;
  coupon: string;
  name: string;
  title: string;
};

const data: bannerType[] = [
  {
    banner: catBanner1,
    coupon: "20%",
    name: "Laptops Max",
    title: "BEST SALE",
  },
  {
    banner: catBanner2,
    coupon: "30%",
    name: "IPad Air",
    title: "NEW ARRIVALS",
  },
  {
    banner: catBanner3,
    coupon: "40%",
    name: "Smartwatch 7",
    title: "POWER !!",
  },
  {
    banner: catBanner4,
    coupon: "50%",
    name: "AirPods Max",
    title: "FREE ENGRAVING",
  },
  {
    banner: banner1,
    coupon: "20%",
    name: "iPad S13 Pro",
    title: "SUPERCHARGED FOR PROS",
  },
  {
    banner: banner2,
    coupon: "30%",
    name: "MacBook Pro 2021",
    title: "THE ULTIMATE PRO TOOL",
  },
];

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 lg:px-16 px-8 py-4">
      <Carousel
        className="w-full rounded-xl"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="relative">
            <BannerCard
              isButton
              banner={data[4].banner}
              coupon={data[4].coupon}
              name={data[4].name}
              title={data[4].title}
            />
          </CarouselItem>
          <CarouselItem className="relative">
            <BannerCard
              isButton
              banner={data[5].banner}
              coupon={data[5].coupon}
              name={data[5].name}
              title={data[5].title}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <BannerCard
            banner={data[0].banner}
            coupon={data[0].coupon}
            name={data[0].name}
            title={data[0].title}
          />
        </div>
        <div className="relative">
          <BannerCard
            banner={data[1].banner}
            coupon={data[1].coupon}
            name={data[1].name}
            title={data[1].title}
          />
        </div>
        <div className="relative">
          <BannerCard
            banner={data[2].banner}
            coupon={data[2].coupon}
            name={data[2].name}
            title={data[2].title}
          />
        </div>
        <div className="relative">
          <BannerCard
            banner={data[3].banner}
            coupon={data[3].coupon}
            name={data[3].name}
            title={data[3].title}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
