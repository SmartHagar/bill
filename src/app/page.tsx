/** @format */
"use client";
import "@/assets/css/style.min.css";
import FooterComp from "@/components/footer/FooterComp";
import HeaderNav from "@/components/header/HeaderNav";
import Anggota from "@/components/pages/Anggota";
import Home from "@/components/pages/Home";
import Kegiatan from "@/components/pages/Kegiatan";
import { Element } from "react-scroll";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      {/* header */}
      <HeaderNav />
      {/* Home */}
      <Element name="home">
        <Home />
      </Element>
      {/* Kegiatan */}
      <Element name="kegiatan">
        <Kegiatan />
      </Element>
      {/* Anggota */}
      <Element name="anggota">
        <Anggota />
      </Element>
      {/* footer */}
      <div className="h-11 items-center flex border-t mt-8">
        <FooterComp />
      </div>
    </div>
  );
};

export default HomePage;
