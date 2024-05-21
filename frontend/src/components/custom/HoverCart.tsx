import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store/store";
import cartEmptyImage from "@/assets/preview.png";

const HoverCart = () => {
  const navigate: NavigateFunction = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
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
          {cart.cart.quantity > 0 && (
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-white">
              {cart.cart.quantity}
            </span>
          )}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[280px] z-999" align="end">
        {cart.cart.products.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold">Shopping</h3>
              <Link to="/cart" className="text-xs font-medium">
                View Cart
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              {cart.cart.products.map((product) => (
                <div key={product.id} className="flex items-center space-x-4">
                  <img
                    src={product.imageCover}
                    alt={product.name}
                    className="w-12 h-12 rounded-md"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                      {product.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                      {product.quantity} x {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <img src={cartEmptyImage} alt="cart empty" className="w-40" />
            <div className="text-xl">Your cart is empty</div>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCart;
