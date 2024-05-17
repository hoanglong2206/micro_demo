import { Product } from "@/interfaces";
import { formatPrice, truncateText } from "@/lib/utils";
import { ExternalLink, Heart, ShoppingBag } from "lucide-react";
import Rating from "@mui/material/Rating";
import { Button } from "../ui/button";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Expand, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CartProductType } from "./ProductInfo";
import { ProductImages, ProductAction, CustomModal } from "@/components";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const navigate: NavigateFunction = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: data.id,
    name: data.name,
    category: data.category,
    brand: data.brand,
    price: data.price,
    size: data.size[0].name,
    color: data.size[0].color[0].name,
    quantity: 1,
  });

  const handleAddToCart = () => {
    console.log(cartProduct);
  };
  return (
    <>
      <div className=" bg-slate-50 dark:bg-slate-700 rounded-md transition text-sm shadow-md space-y-2">
        <div className="relative group w-full cursor-pointer">
          <div
            onClick={() => {
              navigate(`/product-detail/${data.id}`);
            }}
            className="aspect-square overflow-hidden relative w-full"
          >
            <img
              src={data.imageCover}
              alt={data.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="opacity-0 group-hover:opacity-75 transition absolute w-full px-6 bottom-24">
            <div className="flex gap-x-6 justify-center">
              <button className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
                <Expand
                  onClick={() => setOpen(true)}
                  size={20}
                  className="text-gray-600"
                />
              </button>
              <button className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
                <ShoppingCart size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2">
          <div className="space-y-1">
            <h3 className="text-base font-medium text-slate-700">
              {data.brand}
            </h3>
            <h4
              onClick={() => {
                navigate(`/product-detail/${data.id}`);
              }}
              className="text-lg font-semibold cursor-pointer hover:text-slate-700"
            >
              {truncateText(data.name, 18)}
            </h4>
          </div>
          <Rating name="rating" value={data.rating} precision={0.1} readOnly />
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-slate-800">
              {formatPrice(data.price)}
            </span>

            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <CustomModal size="max-w-3xl" open={open} onClose={() => setOpen(false)}>
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <ProductImages data={data} />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl ">{data.name}</h2>
            <hr className="my-3" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-red-500">
                ${data.price}
              </span>
              <span className="text-sm line-through ">${data.price + 50}</span>
            </div>
            <hr className="my-3" />
            <ProductAction
              data={data}
              cartProduct={cartProduct}
              setCartProduct={setCartProduct}
            />
            <hr className="my-3" />

            <div className="flex items-center justify-evenly gap-x-2">
              <Button onClick={handleAddToCart} className="w-1/3">
                Add To Cart <ShoppingCart className="w-5 h-5 ml-2" />
              </Button>

              <Button variant={"outline"} className="w-1/3">
                Buy Now <ShoppingBag className="w-5 h-5 ml-2" />
              </Button>

              <Button
                onClick={() => {
                  navigate(`/product-detail/${data.id}`);
                }}
                variant={"outline"}
                className="w-1/3"
              >
                View Detail
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default ProductCard;
