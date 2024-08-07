/** @format */

import UserTypes from "./UserTypes";

// anggota
interface AnggotaTypes {
  id: string | number;
  user_id: string | number;
  nik: number | string;
  nm_anggota: string;
  jenkel: string;
  alamat: string;
  no_hp: string;
  jabatan: string;
  foto: string;
  email: string;
  user?: UserTypes;
}

export default AnggotaTypes;
