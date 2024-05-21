import {
  Container,
  ProductInfo,
  ProductNotFound,
  ProductReviews,
} from "@/components";
import { useParams } from "react-router-dom";
import { Product } from "@/interfaces";
import customAxios from "@/config/customAxios";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await customAxios.get(`/product/${id}`);
        const data: Product = {
          id: res.data._id,
          name: res.data.name,
          price: res.data.price,
          imageCover: res.data.imageCover,
          images: res.data.images,
          category: res.data.category,
          brand: res.data.brand,
          size: res.data.size,
          description: res.data.description,
          inStock: res.data.inStock,
          createdAt: res.data.createdAt,
        };
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

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
        <ProductReviews />
        <hr className="my-10" />
      </div>
    </Container>
  );
};

export default ProductDetail;
