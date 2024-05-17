import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  visible: boolean;
}

const SearchBar = ({ visible }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const onSubmit = (formData: FormData) => {
    const searchValue = formData.get("searchValue") as string;

    console.log(searchValue);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("searchValue", searchValue);

        onSubmit(formData);
      }}
      className={`relative  mx-auto  items-center ${
        visible
          ? "hidden xl:flex min-w-[550px] max-w-[700px]"
          : "flex xl:hidden min-w-[400px] sm:w-[550px]"
      }`}
    >
      <Input
        id="searchValue"
        defaultValue={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      <Button type="submit" variant="outline" className="rounded-l-none">
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default SearchBar;
