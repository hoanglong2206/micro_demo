import { OrderTable } from "@/components";

const Order = () => {
  return (
    <div className="w-full">
      <div className="flex justify-start items-center gap-x-4">
        <div className="">
          <p className="font-semibold text-2xl tracking-wide">Orders</p>
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">Manage orders</p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <OrderTable data={[]} />
    </div>
  );
};

export default Order;
