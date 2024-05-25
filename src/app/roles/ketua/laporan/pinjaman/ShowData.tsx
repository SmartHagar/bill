/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { FC, useEffect, useState } from "react";
import usePinjaman from "@/stores/crud/Pinjaman";

type Props = {
  search: string;
};

const ShowData: FC<Props> = ({ search }) => {
  // store
  const { setPinjaman, dtPinjaman } = usePinjaman();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [indexBox, setIndexBox] = useState<number>(-1);
  const [slides, setSlides] = useState<any>();

  const fetchDataPinjaman = async () => {
    const res = await setPinjaman({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataPinjaman();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataPinjaman();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Nama Anggota",
    "Tgl. Pinjam",
    "Nominal",
    "Lama (Bulan)",
    "Angsuran",
  ];
  const tableBodies = [
    "anggota.nm_anggota",
    "tgl_pinjam",
    "nominal",
    "lama_pinjam",
    "angsuran",
  ];

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {/* table */}
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
              ubah={false}
              hapus={false}
              setIndexBox={setIndexBox}
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
