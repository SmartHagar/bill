/** @format */
"use client";
import "@/assets/css/style.min.css";
import HeaderNav from "@/components/header/HeaderNav";
import Anggota from "@/components/pages/Anggota";
import Home from "@/components/pages/Home";
import Kegiatan from "@/components/pages/Kegiatan";
import React from "react";
import { Element, Events } from "react-scroll";

type Props = {};

const page = (props: Props) => {
  Events.scrollEvent.register("begin", function (to, element) {
    console.log("begin", to, element);
  });

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
    </div>
  );
};

export default page;
