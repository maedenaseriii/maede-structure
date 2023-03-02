import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";

const MainLayout = () => {
  const { pathname } = useLocation();
  const hasHeader = !["/auth"].includes(pathname);

  return (
    <>
      {hasHeader ? <MainHeader /> : null}
      <main className="bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
