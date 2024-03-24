/** @format */

import MenuTypes from "@/types/MenuTypes";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  subMenus: MenuTypes[];
  name: string;
  icon: any;
  slug?: string;
  index: number;
  pathname: string;
  openMenus: any;
};

const SubMenu: FC<Props> = ({
  subMenus,
  name,
  icon,
  slug,
  index,
  pathname,
  openMenus,
}: Props) => {
  const isMenuOpen = openMenus.includes(slug);
  return (
    <div key={index} className="cursor-pointer">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        open={isMenuOpen}
      >
        <summary
          className={`flex items-center justify-between px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-menu-active hover:text-gray-200 }`}
        >
          <div className="flex items-center">
            <span>{icon}</span>
            <span className="mx-2 text-sm font-medium">{name}</span>
          </div>
          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>
        {subMenus &&
          subMenus.map((subMenu, index) => {
            const isActiveSub = pathname === subMenu.href;
            return (
              <div className="ml-4" key={index}>
                {!subMenu.subMenus && (
                  <Link
                    href={subMenu.href || "#"}
                    className={`flex items-center mx-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-menu-active hover:text-gray-200 ${
                      isActiveSub &&
                      "border-b-2 border-menu-active bg-menu-active/50"
                    }`}
                  >
                    <span className="mx-2 text-sm font-medium">
                      {subMenu.name}
                    </span>
                  </Link>
                )}
                {subMenu.subMenus &&
                  SubMenu({
                    subMenus: subMenu.subMenus,
                    name: subMenu.name,
                    icon: subMenu.icon,
                    slug: subMenu.slug,
                    index: index,
                    pathname: pathname,
                    openMenus,
                  })}
              </div>
            );
          })}
      </details>
    </div>
  );
};
export default SubMenu;
