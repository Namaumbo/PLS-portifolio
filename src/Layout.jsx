"use client";

import { Outlet } from "react-router-dom";
import NavBarComponent from "./components/header";
import FooterComponent from "./components/footer";

const Layout = () => {
  return (
    <>
      <NavBarComponent />
      <div className="container mx-auto p-5">
        <Outlet />
      </div>

      <div className="mt-10">
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;
