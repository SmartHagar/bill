/** @format */

import PinjamanTypes from "./PinjamanTypes";

// terimaPinjam
interface TerimaPinjamTypes {
  id: string | number;
  pinjaman_id: string | number;
  bukti: string;
  pinjaman: PinjamanTypes;
}

export default TerimaPinjamTypes;
