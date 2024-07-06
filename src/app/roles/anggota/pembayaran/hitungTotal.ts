/** @format */

import PembayaranTypes from "@/types/PembayaranTypes";

const hitungTotal = (dtPembayaran: PembayaranTypes[]) => {
  const totalAngsuran =
    dtPembayaran &&
    dtPembayaran
      .filter((item) => item.status_bayar === "terima")
      .reduce((total, item) => total + item.terima_pinjam.pinjaman.angsuran, 0);
  const sisaAngsuran =
    dtPembayaran?.length > 0 &&
    dtPembayaran[0].terima_pinjam.pinjaman.nominal - totalAngsuran;

  return { totalAngsuran, sisaAngsuran };
};

export default hitungTotal;
