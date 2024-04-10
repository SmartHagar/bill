/** @format */

import { BASE_URL } from "@/services/baseURL";
import PembayaranTypes from "@/types/PembayaranTypes";

const slide = (data: PembayaranTypes[]) => {
  const dtImages = data?.map((row: PembayaranTypes) => {
    return {
      src: `${BASE_URL}/${row?.bukti_bayar}`,
      title: row.tgl_bayar,
      description: row.status_bayar,
      width: 3840,
      height: 5760,
    };
  });
  return dtImages;
};

export default slide;
