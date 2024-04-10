/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { api } from "@/services/baseURL";
// api pembayaran
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
  anggota_id?: number | string;
};

type Store = {
  dtPembayaran: any;
  setPembayaran: ({ page, limit, search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setPembayaranAll: ({ search }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setPembayaranStatus: ({
    page,
    limit,
    search,
    status,
    anggota_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
};

const usePembayaranApi = create(
  devtools<Store>((set, get) => ({
    dtPembayaran: [],
    setPembayaran: async ({ page = 1, limit = 10, search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pembayaran`,
          params: {
            limit,
            page,
            search,
          },
        });
        set((state) => ({ ...state, dtPembayaran: response.data }));
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
    setPembayaranAll: async ({ search }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pembayaran/all`,
          params: {
            search,
          },
        });
        set((state) => ({ ...state, dtPembayaran: response.data }));
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
    setPembayaranStatus: async ({
      page = 1,
      limit = 10,
      search,
      status = "terima",
      anggota_id,
    }) => {
      try {
        const response = await api({
          method: "get",
          url: `/pembayaran/status`,
          params: {
            limit,
            page,
            search,
            status,
            anggota_id,
          },
        });
        set((state) => ({ ...state, dtPembayaran: response.data.data }));
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

export default usePembayaranApi;
