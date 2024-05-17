import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { CartProductType } from "./ProductInfo";
import { Product } from "@/interfaces";

interface ProductActionProps {
  data: Product;
  cartProduct: CartProductType;
  setCartProduct: React.Dispatch<React.SetStateAction<CartProductType>>;
}

const ProductAction = ({
  data,
  cartProduct,
  setCartProduct,
}: ProductActionProps) => {
  const IncreaseQuantity = () => {
    setCartProduct({
      ...cartProduct,
      quantity: cartProduct.quantity + 1,
    });
  };

  const DecreaseQuantity = () => {
    setCartProduct({
      ...cartProduct,
      quantity: cartProduct.quantity - 1,
    });
  };
  return (
    <>
      <div className="flex flex-col gap-y-2">
        SIZE
        <RadioGroup
          defaultValue={cartProduct.size}
          onValueChange={(e) =>
            setCartProduct({
              ...cartProduct,
              size: e,
              quantity: 1,
            })
          }
          className="flex items-center gap-x-2"
        >
          {data.size.map((size) => (
            <div key={size.name}>
              <RadioGroupItem
                value={size.name}
                id={size.name}
                className="peer sr-only "
              />
              <Label
                htmlFor={size.name}
                className="flex w-9 h-9 items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 [&:has([data-state=checked])]:border-teal-400 cursor-pointer"
              >
                {size.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-y-2">
        COLOR
        <RadioGroup
          defaultValue={cartProduct.color}
          onValueChange={(e) =>
            setCartProduct({
              ...cartProduct,
              color: e,
              quantity: 1,
            })
          }
          className="flex items-center gap-x-2"
        >
          {data.size
            .find((size) => size.name === cartProduct.size)
            ?.color.map((color) => (
              <div key={color.name}>
                <RadioGroupItem
                  value={color.name}
                  id={color.name}
                  className="peer sr-only "
                />
                <Label
                  htmlFor={color.name}
                  className="flex w-9 h-9 items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 [&:has([data-state=checked])]:border-teal-400 cursor-pointer"
                  style={{ backgroundColor: color.code }}
                ></Label>
              </div>
            ))}
        </RadioGroup>
      </div>
      <div className="flex gap-x-3 items-center">
        <span>QUANTITY :</span>
        <div className="flex gap-x-4 items-center text-base">
          <Button
            onClick={DecreaseQuantity}
            disabled={cartProduct.quantity === 1}
            size={"icon"}
            className="h-8 w-8"
            variant={"outline"}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <div>{cartProduct.quantity}</div>
          <Button
            onClick={IncreaseQuantity}
            disabled={
              data.size
                .find((size) => size.name === cartProduct.size)
                ?.color.find((color) => color.name === cartProduct.color)
                ?.quantity === cartProduct.quantity
            }
            size={"icon"}
            className="h-8 w-8"
            variant={"outline"}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductAction;
