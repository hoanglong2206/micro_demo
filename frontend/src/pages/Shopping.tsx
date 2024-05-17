import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect, useRef } from "react";
import { AlignJustify, Tally4, X } from "lucide-react";
import { ProductList } from "@/components";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const Shopping = () => {
  const [typeList, setTypeList] = useState<string>("grid-col");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const handleResize = () => {
    if (window.innerWidth > 1280) {
      // Adjust this value as needed for your breakpoint
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="grid xl:grid-cols-5 gap-4 xl:px-8 py-4 md:px-24 px-4">
      <div
        ref={sidebar}
        className={`fixed left-0 top-0 col-span-1 overflow-y-hidden duration-150 ease-in-out xl:static xl:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 z-99 w-80 h-full bg-slate-50 rounded-md shadow-md"
            : "-translate-x-full"
        }`}
      >
        <div
          className={`${
            sidebarOpen ? "" : "bg-slate-50 rounded-md shadow-md"
          } flex flex-col gap-y-8 p-4`}
        >
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold tracking-wider text-slate-700">
              Filter by
            </h1>
            <Button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="xl:hidden flex items-center justify-center"
              size={"icon"}
              variant={"ghost"}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex flex-col gap-y-2 mt-4">
            <h2 className="text-base font-semibold tracking-wider">
              Availability
            </h2>
            <div className="items-center flex space-x-2">
              <Checkbox id="in-stock" name="in-stock" />
              <Label
                htmlFor="in-stock"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
              >
                In stock <span>(100+)</span>
              </Label>
            </div>
            <div className="items-center flex space-x-2">
              <Checkbox id="out-of-stock" name="out-of-stock" />
              <Label
                htmlFor="out-of-stock"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
              >
                Out of stock <span>(0)</span>
              </Label>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-semibold tracking-wider">Price</h2>
            <div className="flex items-center justify-center gap-x-2">
              <div>
                <Label htmlFor="min-price" className="text-sm font-medium ml-4">
                  Min
                </Label>
                <div className="flex items-center justify-center gap-x-2">
                  <span className="text-sm font-medium text-slate-400">$</span>
                  <Input
                    type="number"
                    placeholder="Min"
                    className="w-full text-sm focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="max-price" className="text-sm font-medium ml-4">
                  Max
                </Label>
                <div className="flex items-center justify-center gap-x-2">
                  <span className="text-sm font-medium text-slate-400">$</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    className="w-full text-sm focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-semibold tracking-wider">Size</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="items-center flex space-x-2">
                <Checkbox id="xs" name="xs" />
                <Label
                  htmlFor="xs"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                >
                  XS
                </Label>
              </div>
              <div className="items-center flex space-x-2">
                <Checkbox id="s" name="s" />
                <Label
                  htmlFor="s"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                >
                  S
                </Label>
              </div>
              <div className="items-center flex space-x-2">
                <Checkbox id="m" name="m" />
                <Label
                  htmlFor="m"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                >
                  M
                </Label>
              </div>
              <div className="items-center flex space-x-2">
                <Checkbox id="l" name="l" />
                <Label
                  htmlFor="l"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                >
                  L
                </Label>
              </div>
              <div className="items-center flex space-x-2">
                <Checkbox id="xl" name="xl" />
                <Label
                  htmlFor="xl"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                >
                  XL
                </Label>
              </div>
              <div className="items-center flex space-x-2">
                <Checkbox id="xxl" name="xxl" />
                <Label
                  htmlFor="xxl"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600"
                >
                  XXL
                </Label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-base font-semibold tracking-wider">Brand</h2>
            <div className="flex flex-wrap gap-1">
              <div className="items-center flex space-x-2">
                <Checkbox id="sony" name="sony" className="peer sr-only" />
                <Label
                  htmlFor="sony"
                  className="flex h-9 items-center justify-center rounded-md border-2 border-muted bg-slate-200 p-2 hover:bg-slate-100 hover:text-accent-foreground peer-data-[state=checked]:border-slate-400 [&:has([data-state=checked])]:border-slate-400 duration-100 cursor-pointer"
                >
                  Sony
                </Label>
              </div>
              <div className="items-center flex space-x-2">
                <Checkbox
                  id="samsung"
                  name="samsung"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="samsung"
                  className="flex h-9 items-center justify-center rounded-md border-2 border-muted bg-slate-200 p-2 hover:bg-slate-100 hover:text-accent-foreground peer-data-[state=checked]:border-slate-400 [&:has([data-state=checked])]:border-slate-400 duration-100 cursor-pointer"
                >
                  Samsung
                </Label>
              </div>
              <div className="items-center flex space-x-2">
                <Checkbox id="apple" name="apple" className="peer sr-only" />
                <Label
                  htmlFor="apple"
                  className="flex h-9 items-center justify-center rounded-md border-2 border-muted bg-slate-200 p-2 hover:bg-slate-100 hover:text-accent-foreground peer-data-[state=checked]:border-slate-400 [&:has([data-state=checked])]:border-slate-400 duration-100 cursor-pointer"
                >
                  Apple
                </Label>
              </div>
              <div className="items-center flex space-x-2">
                <Checkbox id="oppo" name="oppo" className="peer sr-only" />
                <Label
                  htmlFor="oppo"
                  className="flex h-9 items-center justify-center rounded-md border-2 border-muted bg-slate-200 p-2 hover:bg-slate-100 hover:text-accent-foreground peer-data-[state=checked]:border-slate-400 [&:has([data-state=checked])]:border-slate-400 duration-100 cursor-pointer"
                >
                  Oppo
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 lg:col-span-4 space-y-4">
        <div className="flex items-center justify-between bg-slate-50 px-4 py-2 rounded-md shadow-md">
          <Button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="xl:hidden block text-base tracking-wider"
          >
            Filter
          </Button>

          <div className="flex items-center justify-center gap-x-2">
            <div className="text-base">Sort by:</div>
            <Select>
              <SelectTrigger className="w-[180px] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0">
                <SelectValue placeholder="Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="best-selling">Best Selling</SelectItem>
                  <SelectItem value="low-to-high">Price low to high</SelectItem>
                  <SelectItem value="high-to-low">Price high to low</SelectItem>
                  <SelectItem value="a-z">Alphabetically A-Z</SelectItem>
                  <SelectItem value="z-a">Alphabetically Z-A</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden xl:flex items-center gap-x-2">
            <div className="text-sm font-medium text-slate-400">
              100+ products
            </div>
            <RadioGroup
              defaultValue={typeList}
              className="flex items-center gap-x-2"
              onValueChange={(e) => setTypeList(e)}
            >
              <div>
                <RadioGroupItem
                  value="grid-col"
                  className="peer sr-only"
                  id="grid-col"
                />
                <Label
                  htmlFor={"grid-col"}
                  className="flex w-9 h-9 items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 [&:has([data-state=checked])]:border-teal-400"
                >
                  <Tally4 className="w-6 h-6" />
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="grid-row"
                  className="peer sr-only"
                  id="grid-row"
                />
                <Label
                  htmlFor={"grid-row"}
                  className="flex w-9 h-9 items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-400 [&:has([data-state=checked])]:border-teal-400"
                >
                  <AlignJustify className="w-6 h-6" />
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <ProductList typeList={typeList} />
      </div>
    </div>
  );
};

export default Shopping;
