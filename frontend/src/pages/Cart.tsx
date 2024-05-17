import { CarouselProduct, CartClient, Container } from "@/components";

const Cart = () => {
  return (
    <Container>
      <CartClient />
      <hr className="my-3" />
      <CarouselProduct title="You may also like" />
    </Container>
  );
};

export default Cart;
