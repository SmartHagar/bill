/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { BsKey } from "react-icons/bs";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

type Props = {};

const HeaderNav = (props: Props) => {
  const dutation = 100;
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Mendapatkan nilai Y dari scroll
      const newScrollY = window.scrollY || window.pageYOffset;
      // Memperbarui nilai scrollY dalam state
      setScrollY(newScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // navbar nav-sticky
  return (
    <header
      id="navbar-sticky"
      className={`navbar ${scrollY > 50 && "nav-sticky"}`}
    >
      <div className="container">
        <nav>
          {/* <Link href="" className="logo">
            <img
              src="@/assets/images/logo-dark.png"
              className="h-10 logo-dark"
              alt="Opixo Logo"
            />
            <img
              src="@/assets/images/logo-light.png"
              className="h-10 logo-light"
              alt="Opixo Logo"
            />
          </Link> */}
          <div className="lg:hidden flex items-center ms-auto px-2.5">
            <button
              className="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-gray-300 bg-slate-300/30"
              type="button"
              id="hs-unstyled-collapse"
              data-hs-collapse="#mobileMenu"
              data-hs-type="collapse"
            >
              <i className="uil uil-bars text-2xl"></i>
            </button>
          </div>
          <div
            id="mobileMenu"
            className="hs-collapse overflow-hidden transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
          >
            <ul id="navbar-navlist" className="navbar-nav">
              <li className="nav-item">
                <ScrollLink
                  to="home"
                  className="nav-link"
                  spy={true}
                  smooth="easeInOutQuint"
                  duration={dutation}
                >
                  Home
                </ScrollLink>
              </li>

              <li className="nav-item">
                <ScrollLink
                  to="kegiatan"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={dutation}
                >
                  Kegiatan
                </ScrollLink>
              </li>

              <li className="nav-item">
                <ScrollLink
                  to="anggota"
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={dutation}
                >
                  Anggota
                </ScrollLink>
              </li>
            </ul>
            <div className="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-gray-200 lg:border-none">
              <a href="#" className="nav-btn">
                <BsKey className="h-5 w-5 me-2" />
                Login
              </a>
            </div>
          </div>
          <Link
            href="/auth/login"
            className="hidden lg:flex items-center bg-light-blue px-4 py-2 rounded-lg text-white cursor-pointer"
          >
            <BsKey className="h-5 w-5 me-2" />
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
