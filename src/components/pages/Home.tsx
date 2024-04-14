/** @format */

import Reveal from "@/utils/Reveal";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-40 pb-96 bg-gradient-to-r from-blue-100 to-blue-50 bg-opacity-50"
    >
      <div className="container relative">
        <div className="text-center">
          <div className="flex justify-center mt-6">
            <div className="max-w-2xl">
              <Reveal>
                <h1 className="text-5xl/tight font-bold mb-10 bg-gradient-to-r from-blue via-light-blue to-dark-blue text-transparent bg-clip-text">
                  Selamat Datang di Website KOKENAT
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-lg text-gray-700 lg:max-w-md mx-auto">
                  Koperasi Kelompok Nelayan Air Tawar
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Container End --> */}

      <div className="shape absolute sm:-bottom-px -bottom-[1px] start-0 end-0 overflow-hidden text-white">
        <svg
          className="w-full h-auto scale-[2.0] origin-top"
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      {/* <!-- end shap --> */}
    </section>
  );
};

export default Home;
