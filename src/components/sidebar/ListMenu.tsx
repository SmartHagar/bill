/** @format */
import MenuTypes from "@/types/MenuTypes";
import {
  BsAsterisk,
  BsBandaid,
  BsBank,
  BsBasket,
  BsBuildingAdd,
  BsBuildingDash,
  BsHouseDoor,
  BsLamp,
  BsPeople,
  BsSafe,
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
    href: createUrlAnggota(""),
    icon: <BsHouseDoor />,
  },
  {
    name: "Pinjaman",
    href: createUrlAnggota("/pinjaman"),
    icon: <BsPeople />,
  },
  {
    name: "Angsuran",
    href: createUrlAnggota("/pembayaran"),
    icon: <BsPeople />,
  },
];
const bendaharaMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrlBendahara(""),
    icon: <BsHouseDoor />,
  },
  {
    name: "Simpanan",
    href: createUrlBendahara("/simpanan"),
    icon: <BsSafe />,
  },
  {
    name: "Pinjaman",
    href: createUrlBendahara("/pinjaman"),
    icon: <BsBank />,
  },
  {
    name: "Bukti Kirim",
    href: createUrlBendahara("/bukti"),
    icon: <BsBank />,
  },
  {
    name: "Pembayaran",
    href: createUrlBendahara("/pembayaran"),
    icon: <BsBank />,
  },
];

export default ListMenu;

export { anggotaMenu, bendaharaMenu };
