import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";

interface AccordionSidebarProps {
  value: string;
  title: string;
}

const AccordionSidebar = ({ value, title }: AccordionSidebarProps) => {
  return (
    <AccordionItem value={value} className="border-none">
      <AccordionTrigger className="py-2 px-4 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline">
        {title}
      </AccordionTrigger>
      <AccordionContent className="pb-0">
        <ul className="flex flex-col gap-1">
          <li>
            <NavLink
              to={"#"}
              className={`flex items-center rounded-sm py-2 px-6 font-medium  hover:text-neutral-500 duration-75 ease-in-out `}
            >
              Laptops
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={`flex items-center rounded-sm py-2 px-6 font-medium  hover:text-neutral-500 duration-75 ease-in-out`}
            >
              Desktops
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={`flex items-center rounded-sm py-2 px-6 font-medium  hover:text-neutral-500 duration-75 ease-in-out`}
            >
              Video Cameras
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={`flex items-center rounded-sm py-2 px-6 font-medium  hover:text-neutral-500 duration-75 ease-in-out`}
            >
              Printers
            </NavLink>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionSidebar;
