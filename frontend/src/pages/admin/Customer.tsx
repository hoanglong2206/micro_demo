import { CustomerTable } from "@/components";

const Customer = () => {
  return (
    <div className="w-full">
      <div className="flex justify-start items-center gap-x-4">
        <div className="">
          <p className="font-semibold text-2xl tracking-wide">Customers</p>
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">Manage Customers</p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <CustomerTable data={[]} />
    </div>
  );
};

export default Customer;
