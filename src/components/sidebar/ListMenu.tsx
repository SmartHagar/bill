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
const createUrl = (path: string) => `/roles/admin${path}`;
const createUrlAnggota = (path: string) => `/roles/anggota${path}`;
const createUrlBendahara = (path: string) => `/roles/bendahara${path}`;
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

const anggotaMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrlAnggota("/"),
    icon: <BsHouseDoor />,
  },
  {
    name: "Pasien",
    href: createUrlAnggota("/pasien"),
    icon: <BsPeople />,
  },
  {
    name: "Resep",
    href: createUrlAnggota("/resep"),
    icon: <BsPeople />,
  },
];
const bendaharaMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrlAnggota("/"),
    icon: <BsHouseDoor />,
  },
  {
    name: "Pasien",
    href: createUrlAnggota("/pasien"),
    icon: <BsPeople />,
  },
  {
    name: "Resep",
    href: createUrlAnggota("/resep"),
    icon: <BsPeople />,
  },
];

export default ListMenu;

export { anggotaMenu, bendaharaMenu };
