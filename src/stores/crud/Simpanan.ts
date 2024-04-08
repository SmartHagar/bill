/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";
import SimpananTypes from "@/types/SimpananTypes";
// store simpanan
type Props = {
  page?: number;
  limit?: number;
  search?: string;
  sortby?: string;
  order?: string;
  anggota_id?: number | string;
};

type Store = {
  dtSimpanan: {
    last_page: number;
    current_page: number;
    data: SimpananTypes[];
  };

  setSimpanan: ({
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

  setShowSimpanan: (id: number | string) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;

  addData: (
    data: SimpananTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;

  removeData: (
    id: number | string
  ) => Promise<{ status: string; data?: any; error?: any }>;

  updateData: (
    id: number | string,
    data: SimpananTypes
  ) => Promise<{ status: string; data?: any; error?: any }>;
};

const useSimpanan = create(
  devtools<Store>((set, get) => ({
    dtSimpanan: {
      last_page: 0,
      current_page: 0,
      data: [],
    },
    setSimpanan: async ({
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
          url: `/simpanan`,
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
        set((state) => ({ ...state, dtSimpanan: response.data.data }));
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
    setShowSimpanan: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/simpanan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((state) => ({ ...state, dtSimpanan: response.data.data }));
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
          url: `/simpanan`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: row,
        });
        set((prevState) => ({
          dtSimpanan: {
            last_page: prevState.dtSimpanan.last_page,
            current_page: prevState.dtSimpanan.current_page,
            data: [res.data.data, ...prevState.dtSimpanan.data],
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
          url: `/simpanan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState) => ({
          dtSimpanan: {
            last_page: prevState.dtSimpanan.last_page,
            current_page: prevState.dtSimpanan.current_page,
            data: prevState.dtSimpanan.data.filter(
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
          url: `/simpanan/${id}`,
          headers: { Authorization: `Bearer ${token}` },
          data: row,
        });
        set((prevState) => ({
          dtSimpanan: {
            last_page: prevState.dtSimpanan.last_page,
            current_page: prevState.dtSimpanan.current_page,
            data: prevState.dtSimpanan.data.map((item: any) => {
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

export default useSimpanan;
