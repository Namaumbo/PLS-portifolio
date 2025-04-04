"use client";

import { Outlet } from "react-router-dom";
import NavBarComponent from "./components/header";
import FooterComponent from "./components/footer";

const Layout = () => {
  return (
    <>
      <NavBarComponent/>
      <Outlet />
      <div className="mt-10">
        < FooterComponent/>
      </div>
    </>
  );
};

export default Layout;
