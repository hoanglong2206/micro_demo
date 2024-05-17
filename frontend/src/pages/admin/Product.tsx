import { Button } from "@/components/ui/button";
import { ProductTable, CustomModal } from "@/components";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Product = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="w-full">
        <div className="flex justify-between items-center gap-x-4">
          <div className="">
            <p className="font-semibold text-2xl tracking-wide">Products</p>
            <div className="flex items-center">
              <p className="text-sm text-muted-foreground">Manage products</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} variant={"outline"}>
            <Plus className="h-5 w-5 mr-1" />
            Add Product
          </Button>
        </div>
        <hr className="my-4" />
        <ProductTable data={[]} />
      </div>
      <CustomModal size="max-w-6xl" open={open} onClose={() => setOpen(false)}>
        <div className="grid xl:grid-cols-7 gap-4">
          <div className="xl:col-span-3 flex flex-col gap-y-4">
            <Label
              htmlFor="mainImage"
              className="flex items-center justify-center w-[320px] h-[180px] bg-gray-200 rounded-lg"
            >
              Main Image
            </Label>
            <Input type="file" id="mainImage" className="hidden" />
            <div className="flex items-center justify-center gap-x-4">
              <Label
                htmlFor="image1"
                className="flex items-center justify-center w-full h-[120px] bg-gray-200 rounded-lg"
              >
                Sub Images
              </Label>
              <Input type="file" multiple id="image1" className="hidden" />
            </div>
          </div>
          <div className="xl:col-span-4 flex flex-col gap-y-4">
            <div className="flex items-center justify-center gap-x-8">
              <div className="space-y-1 w-1/2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" />
              </div>
              <div className="space-y-1 w-1/2">
                <Label htmlFor="brand">Brand</Label>
                <Input type="text" id="brand" name="brand" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-8">
              <div className="space-y-1 w-1/2">
                <Label htmlFor="category">Category</Label>
                <Input type="text" id="category" name="category" />
              </div>
              <div className="space-y-1 w-1/2">
                <Label htmlFor="brand">Brand</Label>
                <Input type="text" id="brand" />
              </div>
            </div>
            <div className="space-y-1 w-full">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default Product;
