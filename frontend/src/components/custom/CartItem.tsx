import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { ProductCart } from "@/interfaces";
import { formatPrice } from "@/lib/utils";
import customAxios from "@/config/customAxios";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "@/context/slices/cart";
import { toast } from "react-toastify";

interface CartItemProps {
  data: ProductCart;
}

const CartItem = ({ data }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = async () => {
    try {
      const res = await customAxios.delete(`/product/cart/${data.id}`);
      if (res.status === 200) {
        dispatch(
          removeProductFromCart({ quantity: data.quantity, id: data.id })
        );
        toast.success("Product removed from cart");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 gap-4 items-center bg-slate-50 py-2 px-4 rounded-md">
      <div className="justify-self-start flex gap-x-4 col-span-1 md:col-span-2">
        <Link to={`/product-detail/${data.id}`}>
          <div className="relative aspect-square w-32">
            <img src={data.imageCover} alt="image" className="object-contain" />
          </div>
        </Link>
        <div className="md:flex flex-col justify-center gap-y-2 hidden">
          <Link to={"#"} className="text-lg font-semibold">
            {data.brand}
          </Link>
          <div className="font-medium">
            <span className="text-gray-500">Color: </span>
            {data.color}
          </div>
          <div className="font-medium">
            <span className="text-gray-500">Size: </span>
            {data.size}
          </div>
        </div>
      </div>
      <div className="justify-self-center font-semibold">
        <div className="flex flex-col gap-y-4">
          <div className="font-semibold text-base">Price</div>
          <div className="h-8 flex items-center">{formatPrice(data.price)}</div>
        </div>
      </div>
      <div className="justify-self-center">
        <div className="flex flex-col gap-y-4">
          <div className="font-semibold text-base">Quantity</div>
          <div className="flex gap-x-4 items-center text-base">
            <Button size={"icon"} className="h-8 w-8" variant={"outline"}>
              <Minus className="h-4 w-4" />
            </Button>
            <div>{data.quantity}</div>
            <Button size={"icon"} className="h-8 w-8" variant={"outline"}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="justify-self-center font-semibold hidden md:flex">
        <div className="flex flex-col gap-y-4">
          <div className="font-semibold text-base">Total</div>
          <div className="h-8 flex items-center">
            {formatPrice(data.price * data.quantity)}
          </div>
        </div>
      </div>
      <div className="justify-self-center">
        <Button onClick={handleRemoveFromCart} size={"icon"} variant={"ghost"}>
          <Trash2 className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
