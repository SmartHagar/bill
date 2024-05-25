/** @format */

import { BASE_URL } from "@/services/baseURL";
import AnggotaTypes from "@/types/AnggotaTypes";

const slide = (data: AnggotaTypes[]) => {
  const dtImages = data?.map((row: AnggotaTypes) => {
    return {
      src: `${BASE_URL}/${row?.foto}`,
      title: row.nm_anggota,
      description: row.jabatan,
      width: 3840,
      height: 5760,
    };
  });
  console.log({ dtImages });
  return dtImages;
};

export default slide;
