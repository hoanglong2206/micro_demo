import { Rating } from "@mui/material";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Product } from "@/interfaces";
import { ProductAction, ProductImages, Loader } from "@/components";
import { Badge } from "@/components/ui/badge";
import { toast } from "react-toastify";
import { hideLoader, showLoader } from "@/context/slices/loader";
import customAxios from "@/config/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "@/context/slices/cart";
import { RootState } from "@/context/store/store";

export type CartProductType = {
  _id: string;
  size: string;
  color: string;
  qty: number;
};

interface ProductInfoProps {
  data: Product;
}

const tags = ["headphone", "electronics", "Apple"];

const ProductInfo = ({ data }: ProductInfoProps) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    _id: data.id,
    size: data.size[0].name,
    color: data.size[0].color[0].name,
    qty: 1,
  });

  const dispatch = useDispatch();
  const loader = useSelector((state: RootState) => state.loader);

  const handleAddToCart = async () => {
    try {
      console.log(cartProduct);
      dispatch(showLoader());
      const res = await customAxios.put("/product/cart", cartProduct);
      setTimeout(() => {
        dispatch(hideLoader());
      }, 1000);

      if (res.status === 200) {
        dispatch(
          addProductToCart({
            quantity: res.data.unit,
            product: {
              id: res.data.product._id,
              name: res.data.product.name,
              brand: res.data.product.brand,
              size: res.data.product.size,
              color: res.data.product.color,
              price: res.data.product.price,
              imageCover: res.data.product.imageCover,
              quantity: res.data.unit,
            },
          })
        );
        dispatch;
        toast.success("Product added to cart");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {loader.isLoading ? (
        <Loader />
      ) : (
        <div className="lg:grid lg:grid-cols-2 lg:items-start gap-x-12 space-y-8">
          <ProductImages data={data} />
          <div className="flex flex-col gap-1 text-sm font-medium space-y-2">
            <h2 className="text-3xl ">{data.name}</h2>
            <hr className="my-3" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-red-500">
                ${data.price}
              </span>
              <span className="text-sm line-through ">${data.price + 50}</span>
            </div>
            <div className="flex items-center gap-2">
              <Rating name="rating" value={5} precision={0.5} readOnly />
              <div className="text-slate-400">{2} reviews</div>
            </div>
            <hr className="my-3" />
            <div className="flex items-center gap-x-2">
              CATEGORY :
              <span className="uppercase text-slate-400">{data.category}</span>
            </div>
            <div>
              BRAND :
              <span className="uppercase text-slate-400"> {data.brand}</span>
            </div>
            <div className="flex items-center gap-x-2">
              TAG:
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div
              className={`${
                data?.inStock ? "text-teal-500" : "text-rose-500"
              } uppercase `}
            >
              {data?.inStock ? "In stock" : "Out of stock"}
            </div>
            <hr className="my-3" />
            <ProductAction
              data={data}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
            />
            <hr className="my-3" />
            {/* <p className="flex items-center gap-x-2 text-teal-400 ">
          <CircleCheck className="h-5 w-5" />
          <span className="text-base">Product added to cart</span>
        </p>
        <Button variant={"outline"} className="w-1/2 md:w-1/3">
          View Cart <ShoppingBag className="w-5 h-5 ml-2" />
        </Button> */}
            <div className="flex items-center justify-evenly gap-x-8">
              <Button onClick={handleAddToCart} className="w-1/3">
                Add To Cart <ShoppingCart className="w-5 h-5 ml-2" />
              </Button>

              <Button variant={"outline"} className="w-1/3">
                Buy Now <ShoppingBag className="w-5 h-5 ml-2" />
              </Button>

              <Button variant={"outline"} className="w-1/3">
                Add to Wishlist
                <Heart className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
