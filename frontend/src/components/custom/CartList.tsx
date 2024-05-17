import { CartItem } from "@/components";
import { Button } from "@/components/ui/button";

const CartList = () => {
  return (
    <div className="col-span-3">
      <h3 className="text-base font-semibold">
        You have <span className=" text-gray-500">3 items</span> in cart
      </h3>
      <hr className="my-3 w-full" />
      <div className="space-y-2">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <hr className="my-3 w-full" />

      <div className="flex items-center justify-between">
        <Button variant={"outline"}>Continue Shopping</Button>
        <Button variant={"outline"}>Clear Cart</Button>
      </div>
    </div>
  );
};

export default CartList;
