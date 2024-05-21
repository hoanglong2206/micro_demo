import { CartClient, Container } from "@/components";
import customAxios from "@/config/customAxios";
import { setCart } from "@/context/slices/cart";
import { ProductCart } from "@/interfaces";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store/store";
import { Loader } from "@/components";

const Cart = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state: RootState) => state.loader);

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

        const quantity = res.data.cart.reduce(
          (acc: number, item: any) => acc + item.unit,
          0
        );

        dispatch(setCart({ quantity: quantity, products: products }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCart();
  }, [dispatch]);

  return (
    <>
      {loader.isLoading ? (
        <Loader />
      ) : (
        <Container>
          <CartClient />
          <hr className="my-3" />
        </Container>
      )}
    </>
  );
};

export default Cart;
