import { Product } from "@/interfaces";

interface ProductImagesProps {
  data: Product;
}

const ProductImages = ({ data }: ProductImagesProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="col-span-5 relative aspect-square">
        <img
          src={data.imageCover}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex items-center gap-x-2">
        {data.images.map((image, index) => (
          <div key={index} className={`w-1/5 border border-teal-300 `}>
            <img
              src={image}
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
