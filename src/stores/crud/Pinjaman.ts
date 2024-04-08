/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";
import PinjamanTypes from "@/types/PinjamanTypes";
// store pinjaman
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  sortby?: string;
  order?: string;
  anggota_id?: number | string;
};

type Store = {
  dtPinjaman: {
    last_page: number;
    current_page: number;
    data: PinjamanTypes[];
  };

  setPinjaman: ({
    page,
    limit,
    search,
    sortby,
    order,
    anggota_id,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  setShowPinjaman: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (
    data: PinjamanTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;

  removeData: (
    id: number | string
  ) => Promise<{ status: string; data?: any; error?: any }>;

  updateData: (
    id: number | string,
    data: PinjamanTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const usePinjaman = create(
  devtools<Store>((set, get) => ({
    dtPinjaman: {
      last_page: 0,
      current_page: 0,
      data: [],
    },
    setPinjaman: async ({
      page = 1,
      limit = 10,
      search,
      sortby,
      order,
      anggota_id,
    }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/pinjaman`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            sortby,
            order,
            anggota_id,
          },
        });
        set((state) => ({ ...state, dtPinjaman: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
    setShowPinjaman: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/pinjaman/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, dtPinjaman: response.data.data }));
        return {
          status: "berhasil",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          error: error.response?.data,
        };
      }
    },
    addData: async (row) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/pinjaman`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtPinjaman: {
            last_page: prevState.dtPinjaman.last_page,
            current_page: prevState.dtPinjaman.current_page,
            data: [res.data.data, ...prevState.dtPinjaman.data],
          },
        }));
        return {
          status: "berhasil tambah",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    removeData: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "delete",
          url: `/pinjaman/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtPinjaman: {
            last_page: prevState.dtPinjaman.last_page,
            current_page: prevState.dtPinjaman.current_page,
            data: prevState.dtPinjaman.data.filter(
              (item: any) => item.id !== id
            ),
          },
        }));
        return {
          status: "berhasil hapus",
          data: res.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
    updateData: async (id, row) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "PUT",
          url: `/pinjaman/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtPinjaman: {
            last_page: prevState.dtPinjaman.last_page,
            current_page: prevState.dtPinjaman.current_page,
            data: prevState.dtPinjaman.data.map((item: any) => {
              if (item.id === id) {
                return {
                  ...item,
                  ...response.data.data,
                };
              } else {
                return item;
              }
            }),
          },
        }));
        return {
          status: "berhasil update",
          data: response.data,
        };
      } catch (error: any) {
        return {
          status: "error",
          data: error.response.data,
        };
      }
    },
  }))
);

export default usePinjaman;
