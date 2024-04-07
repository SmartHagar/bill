/** @format */
import MenuTypes from "@/types/MenuTypes";
import {
  BsAsterisk,
  BsBandaid,
  BsBasket,
  BsBuildingAdd,
  BsBuildingDash,
  BsHouseDoor,
  BsLamp,
  BsPeople,
} from "react-icons/bs";
const createUrl = (path: string) => `/admin${path}`;
const createUrlPetugas = (path: string) => `/petugas${path}`;
const ListMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrl(""),
    icon: <BsHouseDoor />,
  },
  {
    name: "Anggota",
    href: createUrl("/anggota"),
    icon: <BsPeople />,
  },
];

const petugasMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrlPetugas("/"),
    icon: <BsHouseDoor />,
  },
  {
    name: "Pasien",
    href: createUrlPetugas("/pasien"),
    icon: <BsPeople />,
  },
  {
    name: "Resep",
    href: createUrlPetugas("/resep"),
    icon: <BsPeople />,
  },
];

export default ListMenu;

export { petugasMenu };
