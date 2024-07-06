/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { FC, useCallback, useEffect, useState } from "react";
import usePembayaran from "@/stores/crud/Pembayaran";
import hitungTotal from "./hitungTotal";
import showRupiah from "@/services/rupiah";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
  anggota_id: number;
  setTambah: any;
};

const ShowData: FC<Props> = ({
  setDelete,
  setEdit,
  search,
  anggota_id,
  setTambah,
}) => {
  // store
  const { setPembayaran, dtPembayaran } = usePembayaran();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<any>(null);

  const fetchDataPembayaran = useCallback(async () => {
    if (anggota_id) {
      setIsLoading(true);
      await setPembayaran({
        page,
        limit,
        search,
        anggota_id,
      });
      setIsLoading(false);
    }
  }, [setPembayaran, page, limit, search, anggota_id]); // Menggunakan dependensi yang relevan di sini
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

  useEffect(() => {
    const pembayaran = dtPembayaran.data;
    pembayaran?.length > 0 && setTotal(hitungTotal(pembayaran));

    return () => {};
  }, [dtPembayaran.data]);

  console.log({ total });

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
            {total && (
              <div className="text-lg">
                <p>Total Angsuran: {showRupiah(total.totalAngsuran)}</p>
                <p>Sisa Angsuran: {showRupiah(total.sisaAngsuran)}</p>
              </div>
            )}
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
