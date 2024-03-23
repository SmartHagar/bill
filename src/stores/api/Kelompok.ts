/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api kelompok
type Props = {
  page?: number;
  limit?: number;
  search?: string;
};

type Store = {
  dtKelompok: any;
  setKelompok: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setKelompokAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const useKelompokApi = create(
  devtools<Store>((set, get) => ({
    dtKelompok: [],
    setKelompok: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kelompok`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtKelompok: response.data }));
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
    setKelompokAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/kelompok/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtKelompok: response.data }));
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

export default useKelompokApi;
