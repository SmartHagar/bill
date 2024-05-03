/** @format */

import { BASE_URL } from "@/services/baseURL";
import KegiatanTypes from "@/types/KegiatanTypes";

const slide = (data: KegiatanTypes[]) => {
  const dtImages = data?.map((row: KegiatanTypes) => {
    return {
      src: `${BASE_URL}/${row?.gambar}`,
      title: row.ket,
      width: 3840,
      height: 5760,
    };
  });
  console.log({ dtImages });
  return dtImages;
};

export default slide;
