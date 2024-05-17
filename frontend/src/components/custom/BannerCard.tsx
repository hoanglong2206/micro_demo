import { Button } from "../ui/button";

interface BannerCardProps {
  banner: string;
  coupon: string;
  name: string;
  title: string;
  isButton?: boolean;
}

const BannerCard = ({
  banner,
  coupon,
  name,
  title,
  isButton,
}: BannerCardProps) => {
  return (
    <>
      <div className="aspect-video rounded-xl overflow-hidden cursor-pointer">
        <img
          src={banner}
          alt="Banner 1"
          className="rounded-xl w-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="absolute top-[15%] left-[5%] space-y-10">
        <div className="space-y-2">
          <h3
            className={`font-semibold tracking-widest ${
              isButton ? "text-base " : "text-sm sm:text-base"
            }`}
          >
            {title}
          </h3>
          <h4
            className={`${
              isButton
                ? "text-2xl md:text-4xl lg:text-3xl xl:text-4xl "
                : "text-xl sm:text-2xl "
            } tracking-wide font-bold
          }`}
          >
            {name}
          </h4>
          <h5 className="text-base tracking-wide">Get {coupon} off</h5>
        </div>
        {isButton && <Button>Shop Now</Button>}
      </div>
    </>
  );
};

export default BannerCard;
