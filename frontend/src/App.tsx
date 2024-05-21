import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  NotFound,
  Cart,
  ProductDetail,
  Shopping,
  Profile,
  Order as OrderPage,
} from "@/pages";
import { DefaultLayout, AdminLayout } from "@/layouts";
import { Customer, Product, Message, Order, Dashboard } from "@/pages/admin";
import { UserProtect } from "@/routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <UserProtect>
              <Cart />
            </UserProtect>
          }
        />
        <Route
          path="/profile"
          element={
            <UserProtect>
              <Profile />
            </UserProtect>
          }
        />
        <Route
          path="/orders"
          element={
            <UserProtect>
              <OrderPage />
            </UserProtect>
          }
        />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="product" element={<Product />} />
        <Route path="customer" element={<Customer />} />
        <Route path="order" element={<Order />} />
        <Route path="message" element={<Message />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
