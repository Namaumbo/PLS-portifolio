"use client";

import { Outlet } from "react-router-dom";
import NavBarComponent from "./components/header";
import FooterComponent from "./components/footer";

const Layout = () => {
  return (
    <>
      <div
        className="bg-black"
        style={{
          background:
            "rgb(0, 0, 0) radial-gradient(rgba(72, 72, 72, 0.712) 10%, transparent 1%)",
          backgroundSize: "11px 11px",
          backgroundAttachment: "fixed",
        }}
      >
        <NavBarComponent />
        <div className="container mx-auto p-5">
          <Outlet />
        </div>
        <div className="mt-10">
          <FooterComponent />
        </div>
      </div>
    </>
  );
};

export default Layout;
