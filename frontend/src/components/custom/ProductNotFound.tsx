import { Frown } from "lucide-react";

const ProductNotFound = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-y-2 mt-10">
      <Frown className="h-16 w-16" />
      <h1 className="text-2xl font-semibold">
        Sorry, we couldn't find the product you're looking for.
      </h1>
    </div>
  );
};

export default ProductNotFound;
