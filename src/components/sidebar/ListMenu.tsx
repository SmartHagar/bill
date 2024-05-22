/** @format */
import MenuTypes from "@/types/MenuTypes";
import {
  BsBank,
  BsFileCheck,
  BsHouseDoor,
  BsPeople,
  BsSafe,
} from "react-icons/bs";
const createUrl = (path: string) => `/roles/admin${path}`;
const createUrlAnggota = (path: string) => `/roles/anggota${path}`;
const createUrlBendahara = (path: string) => `/roles/bendahara${path}`;
const createUrlKetua = (path: string) => `/roles/ketua${path}`;
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
  {
    name: "Kegiatan",
    href: createUrl("/kegiatan"),
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

const ketuaMenu: MenuTypes[] = [
  {
    name: "Home",
    href: createUrlKetua(""),
    icon: <BsHouseDoor />,
  },
  {
    name: "Laporan Anggota",
    href: createUrlKetua("/laporan/anggota"),
    icon: <BsFileCheck />,
  },
  {
    name: "Laporan Simpanan",
    href: createUrlKetua("/laporan/simpanan"),
    icon: <BsFileCheck />,
  },
  {
    name: "Laporan Pinjaman",
    href: createUrlKetua("/laporan/pinjaman"),
    icon: <BsFileCheck />,
  },
];

export default ListMenu;

export { anggotaMenu, bendaharaMenu, ketuaMenu };
