/** @format */

import FooterComp from "@/components/footer/FooterComp";
import HeaderComp from "@/components/header/HeaderComp";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex bg-linear">
      {/* sidebar */}
      <div className="fixed left-0 top-0 bottom-0 lg:w-52 text-white">
        <Sidebar />
      </div>
      <div className="ml-52 flex flex-col min-h-screen w-full">
        {/* judul */}
        <div className="text-white h-10 flex items-center justify-center">
          <HeaderComp />
        </div>
        {/* content */}
        <div className="grow px-4 mr-2 bg-white rounded-lg">{children}</div>
        {/* footer */}
        <div className="min-h-12 text-white flex items-center justify-center">
          <FooterComp />
        </div>
      </div>
    </div>
  );
};

export default layout;
