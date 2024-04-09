/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import React, { FC, useCallback, useEffect, useState } from "react";
import usePembayaran from "@/stores/crud/Pembayaran";
import PembayaranTypes from "@/types/PembayaranTypes";
import { BsInfo, BsInfoCircle } from "react-icons/bs";
import ModalDefault from "@/components/modal/ModalDefault";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
  setTambah: any;
};

const ShowData: FC<Props> = ({ setDelete, setEdit, search, setTambah }) => {
  // store
  const { setPembayaran, dtPembayaran } = usePembayaran();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataPembayaran = useCallback(async () => {
    setIsLoading(true);
    await setPembayaran({
      page,
      limit,
      search,
      status_bayar: "proses,tolak,terima",
    });
    setIsLoading(false);
  }, [setPembayaran, page, limit, search]); // Menggunakan dependensi yang relevan di sini
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataPembayaran();
  }, [search, fetchDataPembayaran]);

  useEffect(() => {
    fetchDataPembayaran();

    return () => {};
  }, [page, limit, fetchDataPembayaran]);

  // table
  const headTable = ["No", "Tgl. Angsuran", "Status", "Bukti Pembayaran"];
  const tableBodies = ["tgl_bayar", "status_bayar", "bukti_bayar"];

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {isLoading ? (
        <LoadingSpiner />
      ) : (
        <>
          <div className="">
            <TablesDefault
              headTable={headTable}
              tableBodies={tableBodies}
              dataTable={dtPembayaran.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={false}
            />
          </div>
          {dtPembayaran?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtPembayaran?.current_page}
                totalPages={dtPembayaran?.last_page}
                setPage={setPage}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShowData;
