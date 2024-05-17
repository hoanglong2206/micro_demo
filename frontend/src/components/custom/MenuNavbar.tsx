import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar";

interface MenuNavbarProps {
  visible?: boolean;
}

import { NavLink, Link, useLocation } from "react-router-dom";
import { ListCollapse } from "lucide-react";

export default function MenuNavbar({ visible }: MenuNavbarProps) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex items-center gap-x-4">
      <Menubar
        className={`${visible ? "hidden xl:flex" : "hidden"} border-none`}
      >
        <MenubarMenu>
          <MenubarTrigger className="flex items-center gap-x-2 ">
            <ListCollapse className="w-5 h-5" />
            Shop Categories
          </MenubarTrigger>
          <MenubarContent className="z-999 ">
            <MenubarSub>
              <MenubarSubTrigger className="p-2">
                Cameras & Videos
              </MenubarSubTrigger>
              <MenubarSubContent>
                <ul className="grid gap-3 p-2 grid-cols-2">
                  <MenubarItem>
                    <Link to={"#"}>DSLR Cameras</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Mirrorless Cameras</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Action Cameras</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Video Cameras</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Camera Lenses</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Camera Accessories</Link>
                  </MenubarItem>
                </ul>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger className="p-2">
                Computers & Laptop
              </MenubarSubTrigger>
              <MenubarSubContent>
                <ul className="grid gap-3 p-2 grid-cols-2">
                  <MenubarItem>
                    <Link to={"#"}>Laptops</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Desktops</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Monitors</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Printers</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Scanners</Link>
                  </MenubarItem>
                  <MenubarItem>
                    <Link to={"#"}>Computer Accessories</Link>
                  </MenubarItem>
                </ul>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Smart Phones</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="p-2">Music & Gaming</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="p-2">Headphones</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="p-2">Accessories</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div
        className={`items-center gap-x-2 ${
          visible
            ? "hidden xl:flex border-l border-slate-200 pl-4"
            : "hidden md:flex xl:hidden"
        }`}
      >
        <NavLink
          to="/"
          className={`min-w-[80px] text-center font-medium rounded-md py-2 px-3 text-neutral-900 hover:bg-slate-200 duration-75 ease-in-out ${
            pathname === "/" && "bg-slate-200"
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={`min-w-[80px] text-center font-medium rounded-md py-2 px-3 text-neutral-900 hover:bg-slate-200 duration-75 ease-in-out ${
            pathname.includes("shop") && "bg-slate-200"
          }`}
        >
          Shop
        </NavLink>
        <NavLink
          to="/blog"
          className={`min-w-[80px] text-center font-medium rounded-md py-2 px-3 text-neutral-900 hover:bg-slate-200 duration-75 ease-in-out ${
            pathname.includes("blog") && "bg-slate-200"
          }`}
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
}
