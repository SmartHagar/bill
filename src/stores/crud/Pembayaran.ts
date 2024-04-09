/** @format */

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { crud } from "@/services/baseURL";
import useLogin from "@/stores/auth/login";
import PembayaranTypes from "@/types/PembayaranTypes";

// crud pembayaran

type Props = {
  page?: number;
  limit?: number;
  search?: string;
  tipe?: string;
  sortby?: string;
  order?: string;
  anggota_id?: number | string;
  status_pinjam?: string;
  status_bayar?: string;
};

type Store = {
  dtPembayaran: any;
  showPembayaran: any;
  setPembayaran: ({
    page,
    limit,
    search,
    sortby,
    order,
    anggota_id,
    status_pinjam,
    status_bayar,
  }: Props) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  setShowPembayaran: (id: string | number) => Promise<{
    status: string;
    data?: {};
    error?: {};
  }>;
  addData: (data: any) => Promise<{ status: string; data?: any; error?: any }>;
  removeData: (
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
  updateData: (
    id: number | string,
    data: any
  ) => Promise<{ status: string; data?: any; error?: any }>;
  setFormData: any;
};

const usePembayaran = create(
  devtools<Store>((set, get) => ({
    setFormData: (row: PembayaranTypes) => {
      const formData = new FormData();
      formData.append("terima_pinjam_id", row.terima_pinjam_id as string);
      formData.append("tgl_bayar", row.tgl_bayar as string);
      formData.append("bukti_bayar", row.bukti_bayar as string);
      formData.append("status_bayar", row.status_bayar as string);
      formData.append("bukti_bayar", row.bukti_bayar);
      return formData;
    },
    dtPembayaran: [],
    showPembayaran: [],
    setPembayaran: async ({
      page = 1,
      limit = 10,
      search,
      sortby,
      order,
      anggota_id,
      status_pinjam = "lunas",
      status_bayar,
    }) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/pembayaran`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            limit,
            page,
            search,
            sortby,
            order,
            anggota_id,
            status_pinjam,
            status_bayar,
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
          error: error.response?.data,
        };
      }
    },
    setShowPembayaran: async (id) => {
      try {
        const token = await useLogin.getState().setToken();
        const response = await crud({
          method: "get",
          url: `/pembayaran/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log({ response });
        set((state) => ({ ...state, showPembayaran: response.data.data }));
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
      const formData = row?.bukti_bayar ? get().setFormData(row) : row;
      try {
        const token = await useLogin.getState().setToken();
        const res = await crud({
          method: "post",
          url: `/pembayaran`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });
        set((prevState: any) => ({
          dtPembayaran: {
            last_page: prevState.dtPembayaran.last_page,
            current_page: prevState.dtPembayaran.current_page,
            data: [res.data.data, ...prevState.dtPembayaran.data],
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
          url: `/pembayaran/${id}`,
          headers: { Authorization: `Bearer ${token}` },
        });
        set((prevState: any) => ({
          dtPembayaran: {
            last_page: prevState.dtPembayaran.last_page,
            current_page: prevState.dtPembayaran.current_page,
            data: prevState.dtPembayaran.data.filter(
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
      delete row.id;
      const formData = row?.bukti_bayar ? get().setFormData(row) : row;
      const token = await useLogin.getState().setToken();
      const headersImg = {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await crud({
          url: `/pembayaran/${id}`,
          method: "post",
          headers: row?.bukti_bayar
            ? headersImg
            : {
                Authorization: `Bearer ${token}`,
              },
          data: formData,
          params: {
            _method: "PUT",
          },
        });
        set((prevState: any) => ({
          dtPembayaran: {
            last_page: prevState.dtPembayaran.last_page,
            current_page: prevState.dtPembayaran.current_page,
            data: prevState.dtPembayaran.data.map((item: any) => {
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

export default usePembayaran;
