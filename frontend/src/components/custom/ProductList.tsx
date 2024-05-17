import { products } from "@/utils/products";
import { ProductCard } from "@/components";

interface ProductListProps {
  typeList: string;
}

const ProductList = ({ typeList }: ProductListProps) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {products.map((product, index) => (
        <div key={index} className="col-span-1">
          <ProductCard data={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
