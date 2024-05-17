import { ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";

const HoverCart = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <HoverCard>
      <HoverCardTrigger
        asChild
        className="relative flex h-9 items-center justify-center"
      >
        <Button
          onClick={() => navigate("/cart")}
          variant={"outline"}
          className="flex items-center rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="ml-2 text-sm font-medium text-gray-700 dark:text-white">
            10
          </span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[280px] z-999" align="end">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Link className="flex flex-col gap-2.5" to="#">
            <p className="text-sm">
              <span className="text-black dark:text-white">
                Edit your information in a swipe
              </span>
            </p>

            <p className="text-xs">12 May, 2025</p>
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCart;
