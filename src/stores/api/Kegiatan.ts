/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api kegiatan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtKegiatan: any;
  setKegiatan: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setKegiatanAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setKegiatanSimpanan: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useKegiatanApi = create(
  devtools<Store>((set, get) => ({
    dtKegiatan: [],
    setKegiatan: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kegiatan`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtKegiatan: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setKegiatanAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kegiatan/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtKegiatan: response.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
    setKegiatanSimpanan: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kegiatan/simpanan`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtKegiatan: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response.data,
        };
      }
    },
  }))
);

export default useKegiatanApi;
