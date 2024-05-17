import {
  CarouselProduct,
  Container,
  ProductInfo,
  ProductNotFound,
  ProductReviews,
} from "@/components";
import { products } from "@/utils/products";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  if (!product) {
    return <ProductNotFound />;
  }
  return (
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <ProductInfo data={product} />
        <hr className="my-10" />
        <div className="space-y-4">
          <h3 className="font-bold text-3xl">Description</h3>
          <p className="text-lg">{product.description}</p>
        </div>
        <hr className="my-10" />
        <ProductReviews data={product} />
        <hr className="my-10" />
        <CarouselProduct title="Related Products" />
      </div>
    </Container>
  );
};

export default ProductDetail;
