import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import { ProductCart, CartCheckout } from "@/interfaces";
import { formatPrice } from "@/lib/utils";
import { Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import customAxios from "@/config/customAxios";
import { format } from "date-fns";

const Order = () => {
  const [order, setOrder] = useState<CartCheckout[]>([]);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data: CartCheckout[] = [];
        const res = await customAxios.get("/shopping/orders");
        res.data.map((orderItem: CartCheckout) => {
          data.push({
            orderId: orderItem.orderId,
            status: orderItem.status,
            createdAt: orderItem.createdAt,
            amount: orderItem.amount,
            items: orderItem.items,
          });
        });

        setOrder(
          data.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrder();
  }, []);
  console.log(order);

  return (
    <Container>
      <div className="space-y-4 overflow-x-auto">
        <h3 className="font-bold text-3xl">Shopping Order</h3>
        <hr className="my-3 w-full" />
        <div className="flex flex-col items-center gap-y-4">
          {order.map((orderItem, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-2 px-4 py-2 rounded-sm bg-slate-100 min-x-[1000px]"
            >
              <div className="flex items-center gap-2 text-md">
                <span className="font-semibold text-lg">Order ID:</span>
                {orderItem.orderId}
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(orderItem.orderId);
                  }}
                  size="icon"
                  variant="outline"
                  className="h-6 w-6"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy Order ID</span>
                </Button>
              </div>
              <div className="flex flex-col gap-y-1">
                {orderItem.items.map((item, index) => (
                  <OrderItem key={index} data={item.product} />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-4">
                  <div className="font-semibold">Total: </div>
                  <div>{formatPrice(orderItem.amount)}</div>
                </div>
                <div className="flex gap-x-4">
                  <div className="font-semibold">Status: </div>
                  {
                    <div
                      className={`${
                        orderItem.status === "received"
                          ? "bg-green-500"
                          : orderItem.status === "pending"
                          ? "bg-yellow-500"
                          : orderItem.status === "cancelled"
                          ? "bg-red-500"
                          : "bg-gray-500"
                      } px-2 rounded-full text-white`}
                    >
                      {orderItem.status}
                    </div>
                  }
                </div>
                <div className="flex gap-x-4">
                  <div>
                    {format(
                      new Date(orderItem.createdAt),
                      "dd/MM/yyyy HH:mm:ss"
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Order;

const OrderItem = ({ data }: { data: ProductCart }) => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center bg-slate-50 py-2 px-4 rounded-md">
      <div className="justify-self-start flex col-span-1 ">
        <Link to={`/product-detail/${data.id}`}>
          <div className="relative aspect-square w-32">
            <img src={data.imageCover} alt="image" className="object-contain" />
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-y-4 col-span-3">
        <div className="flex items-center">
          <Link to={"#"} className="text-lg font-semibold">
            {data.name}
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="justify-self-center font-semibold">
            <div className="flex flex-col gap-y-2">
              <div className="font-semibold text-base">Price</div>
              <div className="h-8 flex items-center">
                {formatPrice(data.price)}
              </div>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="flex flex-col gap-y-2 font-semibold">
              <div className="font-semibold text-base">Color</div>
              <div className="flex gap-x-4 items-center text-base h-8 justify-center">
                {data.color}
              </div>
            </div>
          </div>
          <div className="justify-self-center font-semibold hidden md:flex">
            <div className="flex flex-col gap-y-2">
              <div className="font-semibold text-base">Size</div>
              <div className="h-8 flex items-center justify-center">
                {data.size}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
