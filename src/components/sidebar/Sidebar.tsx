/** @format */
"use client";
import { FC, useEffect, useState } from "react";
import ListMenu, { anggotaMenu, bendaharaMenu, ketuaMenu } from "./ListMenu";
import Link from "next/link";
import { BsXLg } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import BtnDefault from "../button/BtnDefault";
import useLogout from "@/stores/auth/logout";
import MenuTypes from "@/types/MenuTypes";
import SubMenu from "./SubMenu";
import LoadingSpiner from "../loading/LoadingSpiner";
import handleLogout from "@/app/auth/logout/logout";

type Props = {
  type?: string | "admin" | "anggota" | "bendahara" | "ketua";
};

const Sidebar: FC<Props> = ({ type = "admin" }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const route = useRouter();
  const [menus, setMenus] = useState<MenuTypes[]>([]);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [loadLogout, setLoadLogout] = useState(false);
  // store
  const { setLogout } = useLogout();

  // ketika pathname berubah
  useEffect(() => {
    setOpen(false);

    return () => {};
  }, [pathname]);
  // ketika type berubah
  useEffect(() => {
    if (type === "admin") {
      setMenus(ListMenu);
    } else if (type === "anggota") {
      setMenus(anggotaMenu);
    } else if (type === "bendahara") {
      setMenus(bendaharaMenu);
    } else if (type === "ketua") {
      setMenus(ketuaMenu);
    }
    return () => {};
  }, [type]);
  // ketika tombol burger di klik
  const handleBurger = () => {
    setOpen(!open);
  };

  // submenu
  const findOpenMenus = (menuList: MenuTypes[]) => {
    for (const menu of menuList) {
      // console.log({ slug, menu });
      if (menu?.href === pathname) {
        const second = pathname?.split("/");
        // if second.length > 0 remove index 0
        second.splice(0, 1);
        setOpenMenus(second);
      }
      // console.log({ menu });
      if (menu.subMenus) {
        // console.log({ menu });
        findOpenMenus(menu.subMenus);
      }
    }
  };

  useEffect(() => {
    menus && findOpenMenus(menus);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menus, pathname]);

  return (
    <>
      <div className="absolute top-0">
        <button
          onClick={handleBurger}
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        className={`z-40 w-full h-screen transition-transform -translate-x-full lg:translate-x-0 ${
          open ? "translate-x-0" : ""
        }`}
        aria-label="Sidebar"
      >
        <div className="sidebar  bg-dark-blue z-50 h-full px-3 pt-4 overflow-y-auto bg-primary/[0.5] text-color-2 flex flex-row-reverse justify-between lg:block">
          <div
            className="text-white cursor-pointer lg:hidden"
            onClick={handleBurger}
          >
            <BsXLg />
          </div>
          <div className="relative h-full sidebar w-full">
            <div className="h-24 sidebar flex items-center">
              <h1 className="text-xl/tight lg:text-2xl font-bold bg-gradient-to-r from-blue via-light-blue to-green text-transparent bg-clip-text">
                KOKENAT
              </h1>
            </div>
            <ul className="space-y-2 w-full">
              {menus &&
                menus.map((menu, index) => {
                  const isActive = pathname === menu.href;
                  const subMenus = menu?.subMenus;
                  const { name, icon, slug } = menu;
                  return subMenus ? (
                    SubMenu({
                      subMenus,
                      name,
                      icon,
                      slug,
                      index,
                      pathname,
                      openMenus,
                    })
                  ) : (
                    <li key={index}>
                      <Link
                        href={menu.href || "#"}
                        className={`flex w-full items-center p-2 text-color-2 hover:bg-white hover:text-dark-blue transition-all duration-700 rounded-lg group ${
                          isActive && "text-green font-bold"
                        }`}
                      >
                        {icon}
                        <span className="ms-3">{name}</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
            {loadLogout ? (
              <LoadingSpiner />
            ) : (
              <div className="absolute bottom-4 flex justify-center left-0 right-0">
                <BtnDefault
                  onClick={() =>
                    handleLogout({ setLogout, setLoadLogout, route })
                  }
                >
                  Logout
                </BtnDefault>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
