/** @format */

import TerimaPinjamTypes from "./TerimaPinjamTypes";

// pembayaran
interface PembayaranTypes {
  id: string | number;
  terima_pinjam_id: string | number;
  tgl_bayar: Date | string;
  bukti_bayar: string;
  status_bayar: string;
  terima_pinjam: TerimaPinjamTypes;
}

export default PembayaranTypes;
