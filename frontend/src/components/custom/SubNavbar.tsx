import { MenuNavbar, SearchBar } from "@/components";

const SubNavbar = () => {
  return (
    <div className="flex items-center justify-between gap-x-8">
      <MenuNavbar visible />
      <SearchBar visible={false} />
    </div>
  );
};

export default SubNavbar;
