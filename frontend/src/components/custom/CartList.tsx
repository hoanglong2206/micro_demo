import { CartItem } from "@/components";
import { Button } from "@/components/ui/button";
import { Cart } from "@/interfaces";

interface CartListProps {
  data: Cart;
}

const CartList = ({ data }: CartListProps) => {
  return (
    <div className="col-span-3">
      <h3 className="text-base font-semibold">
        You have{" "}
        <span className=" text-gray-500">{data.products.length} items</span> in
        cart
      </h3>
      <hr className="my-3 w-full" />
      <div className="space-y-2">
        {data.products.map((product) => (
          <CartItem key={product.id} data={product} />
        ))}
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
