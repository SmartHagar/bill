/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api pinjaman
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
};

type Store = {
  dtPinjaman: any;
  setPinjaman: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setPinjamanAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setPinjamanStatus: ({ page, limit, search, status }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePinjamanApi = create(
  devtools<Store>((set, get) => ({
    dtPinjaman: [],
    setPinjaman: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pinjaman`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtPinjaman: response.data }));
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
    setPinjamanAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pinjaman/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtPinjaman: response.data }));
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
    setPinjamanStatus: async ({
      page = 1,
      limit = 10,
      search,
      status = "terima",
    }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pinjaman/status`,
          params: {
            limit,
            page,
            search,
            status,
          },
        });
        set((state) => ({ ...state, dtPinjaman: response.data }));
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

export default usePinjamanApi;
