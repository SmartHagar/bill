/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import React, { FC, useCallback, useEffect, useState } from "react";
import usePinjaman from "@/stores/crud/Pinjaman";
import PinjamanTypes from "@/types/PinjamanTypes";
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
  const { setPinjaman, dtPinjaman } = usePinjaman();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataPinjaman = useCallback(async () => {
    setIsLoading(true);
    await setPinjaman({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  }, [setPinjaman, page, limit, search]); // Menggunakan dependensi yang relevan di sini
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataPinjaman();
  }, [search, fetchDataPinjaman]);

  useEffect(() => {
    fetchDataPinjaman();

    return () => {};
  }, [page, limit, fetchDataPinjaman]);

  // table
  const headTable = [
    "No",
    "Tgl. Pinjam",
    "Nominal",
    "Lama (Bulan)",
    "Angsuran",
    "Status",
    "Aksi",
  ];
  const tableBodies = [
    "tgl_pinjam",
    "nominal",
    "lama_pinjam",
    "angsuran",
    "status",
  ];

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
              dataTable={dtPinjaman.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtPinjaman?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtPinjaman?.current_page}
                totalPages={dtPinjaman?.last_page}
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
