import { Product } from "@/interfaces";
import { useState } from "react";

interface ProductImagesProps {
  data: Product;
}

const ProductImages = ({ data }: ProductImagesProps) => {
  const [mainImage, setMainImage] = useState<string>(data.imageCover);
  return (
    <div className="flex flex-col gap-y-2">
      <div className="col-span-5 relative aspect-square">
        <img src={mainImage} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="flex items-center gap-x-2">
        <div
          className={`w-1/5 border  ${
            mainImage === data.imageCover
              ? "border-teal-300"
              : "border-transparent"
          }`}
        >
          <img
            src={data.imageCover}
            onClick={() => setMainImage(data.imageCover)}
            alt=""
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
        {data.images.map((image, index) => (
          <div
            key={index}
            className={`w-1/5 border ${
              mainImage === image ? "border-teal-300" : "border-transparent"
            }`}
          >
            <img
              src={image}
              onClick={() => setMainImage(image)}
              alt=""
              className="w-full h-full object-contain cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
