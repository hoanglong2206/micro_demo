import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { Cart, ProductCart } from "@/interfaces";
import { formatPrice } from "@/lib/utils";
import { toast } from "react-toastify";
import customAxios from "@/config/customAxios";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "@/context/slices/loader";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { removeCart } from "@/context/slices/cart";

interface CartCheckoutProps {
  data: Cart;
  randomId: string;
}

const CartCheckout = ({ data, randomId }: CartCheckoutProps) => {
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  const handleCheckout = async () => {
    try {
      dispatch(showLoader());
      const res = await customAxios.post("/shopping/order", {
        txtNumber: randomId,
      });
      setTimeout(() => {
        dispatch(hideLoader());
      }, 1000);

      if (res.status === 200) {
        toast.success("Order placed successfully");
        dispatch(removeCart());
        navigate("/orders");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="col-span-1 self-start">
        <h3 className="text-base font-semibold">Payment Information</h3>
        <hr className="my-3 w-full" />
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Order ID: {randomId}
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(randomId);
                  }}
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </CardTitle>
              <CardDescription>Date: November 23, 2023</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Order Details</div>
              <ul className="grid gap-3">
                {data.products.map((product: ProductCart) => (
                  <li
                    key={product.id}
                    className="flex items-center justify-between gap-x-2"
                  >
                    <span className="text-muted-foreground">
                      {product.name} x <span>{product.quantity}</span>
                    </span>
                    <span>{formatPrice(product.price * product.quantity)}</span>
                  </li>
                ))}
              </ul>
              <Separator className="my-2" />
              <ul className="grid gap-3">
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Total</span>
                  <span>
                    {formatPrice(
                      data.products.reduce(
                        (acc: number, product: ProductCart) => {
                          return acc + product.price * product.quantity;
                        },
                        0
                      )
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
            <Button onClick={handleCheckout} className="w-full">
              Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default CartCheckout;
