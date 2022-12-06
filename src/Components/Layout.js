import React from "react";
import BottomNav from "../Shared/BottomNav";
import Footers from "../Shared/Footers";
import Navbar from "../Shared/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <main >{children}</main>
      <Footers></Footers>
      <BottomNav/>
    </>
  );
}

export default Layout;
