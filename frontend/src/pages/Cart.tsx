import { CartClient, Container } from "@/components";
import customAxios from "@/config/customAxios";
import { Cart as CartType, ProductCart } from "@/interfaces";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState<CartType>({
    products: [],
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const products: ProductCart[] = [];
        const res = await customAxios.get("/customer/shoping-details");
        console.log(res.data.cart);

        res.data.cart.map((item: any) => {
          products.push({
            id: item.product._id,
            name: item.product.name,
            size: item.product.size,
            color: item.product.color,
            brand: item.product.brand,
            price: item.product.price,
            imageCover: item.product.imageCover,
            quantity: item.unit,
          });
        });

        setCart({ products });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Container>
      <CartClient data={cart} />
      <hr className="my-3" />
    </Container>
  );
};

export default Cart;
