import {
  DarkModeButton,
  DropdownUser,
  Logo,
  HoverCart,
  HoverNotification,
  HoverWishlist,
  SubNavbar,
  SearchBar,
  MenuNavbar,
} from "@/components";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Navbar = ({ sidebarOpen, setSidebarOpen }: NavbarProps) => {
  return (
    <div className="sticky top-0 w-full max-w-[1920px] z-9 shadow-sm mx-auto xl:px-20 md:px-10 px-4 py-2 border-b bg-slate-100">
      <div className="flex items-center justify-between gap-x-8">
        <div className="flex gap-x-4 items-center">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            size="icon"
            variant={"ghost"}
            className="flex xl:hidden"
          >
            <Menu className="w-6 h-6" />
          </Button>
          <Logo />
          <MenuNavbar visible={false} />
        </div>
        <SearchBar visible />
        <div className="flex items-center gap-x-3">
          <DarkModeButton />

          <HoverNotification />

          <HoverWishlist />

          <HoverCart />

          <DropdownUser />
        </div>
      </div>
      <hr className="my-3 w-full" />
      <SubNavbar />
    </div>
  );
};

export default Navbar;
