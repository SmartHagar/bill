/** @format */
"use client";
import "@/assets/css/style.min.css";
import FooterComp from "@/components/footer/FooterComp";
import HeaderNav from "@/components/header/HeaderNav";
import Anggota from "@/components/pages/Anggota";
import Home from "@/components/pages/Home";
import Kegiatan from "@/components/pages/Kegiatan";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { forwardRef, useEffect, useState } from "react";

type Props = {};

// Komponen ForwardedElement dengan displayName dan ref forwarding
const ForwardedElement = forwardRef<
  HTMLDivElement,
  { name: string; children: React.ReactNode }
>((props, ref) => {
  return (
    <Element name={props.name}>
      <div ref={ref}>{props.children}</div>
    </Element>
  );
});
ForwardedElement.displayName = "ForwardedElement";

const HomePage = (props: Props) => {
  const [homeRef, homeInView] = useInView({ threshold: 0.1 });
  const [kegiatanRef, kegiatanInView] = useInView({ threshold: 0.1 });
  const [anggotaRef, anggotaInView] = useInView({ threshold: 0.1 });
  // state
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (homeInView || kegiatanInView || anggotaInView) {
      setOpen(false);
    }
  }, [homeInView, kegiatanInView, anggotaInView]);
  return (
    <div>
      {/* header */}
      <HeaderNav open={open} setOpen={setOpen} />
      {/* Home */}
      <ForwardedElement name="home" ref={homeRef}>
        <Home />
      </ForwardedElement>
      {/* Kegiatan */}
      <ForwardedElement name="kegiatan" ref={kegiatanRef}>
        <Kegiatan />
      </ForwardedElement>
      {/* Anggota */}
      <ForwardedElement name="anggota" ref={anggotaRef}>
        <Anggota />
      </ForwardedElement>
      {/* footer */}
      <div className="h-11 items-center flex border-t mt-8">
        <FooterComp />
      </div>
    </div>
  );
};

export default HomePage;
