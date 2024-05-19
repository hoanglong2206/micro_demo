import { ProductCard } from "@/components";
import { Product } from "@/interfaces";

interface ProductListProps {
  typeList: string;
  data: Product[];
}

const ProductList = ({ typeList, data }: ProductListProps) => {
  return (
    <div
      id={typeList}
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
    >
      {data.map((product, index) => (
        <div key={index} className="col-span-1">
          <ProductCard data={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
