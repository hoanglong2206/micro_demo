import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NotebookTabs, User2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store/store";
import customAxios from "@/config/customAxios";
import { hideLoader, showLoader } from "@/context/slices/loader";
import { logout } from "@/context/slices/auth";

const DropdownUser = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();
  const handleLogout = async () => {
    try {
      dispatch(showLoader());
      const res = await customAxios.get("/customer/logout");
      dispatch(hideLoader());
      if (res.status === 200) {
        dispatch(logout());
        navigate("/auth/login");
      }
    } catch (error: any) {
      dispatch(hideLoader());
      console.log(error.response.data.message);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center gap-4 outline-none">
        <span className="hidden text-right lg:block">
          <span className="block text-base font-medium text-black dark:text-white">
            {user?.username}
          </span>
          <Badge
            className={`
            ${
              user.role === "admin"
                ? "bg-red-400 hover:bg-red-400/90"
                : "bg-green-500 hover:bg-green-500/90"
            }
            text-white px-2 
          
          `}
          >
            {user.role}
          </Badge>
        </span>

        <Avatar>
          <AvatarImage src={user.photo} alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="z-999 w-52" align="end">
        <DropdownMenuLabel className="text-base">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem>
            <Link to="/profile" className="flex items-center gap-2.5">
              <User2 className="w-5 h-5" />
              <span className="text-base font-medium text-black dark:text-white">
                Profile
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/orders" className="flex items-center gap-2.5">
              <NotebookTabs className="w-5 h-5" />
              <span className="text-base font-medium text-black dark:text-white">
                My Orders
              </span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-base font-medium text-black dark:text-white"
        >
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
