import { Outlet } from "react-router-dom";
import { useState } from "react";
import { HeaderAdmin, SidebarAdmin } from "@/components";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      <SidebarAdmin sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-auto">
        <HeaderAdmin
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="h-full">
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
