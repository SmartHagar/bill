/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import useAnggotaApi from "@/stores/api/Anggota";
import AnggotaTypes from "@/types/AnggotaTypes";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  search: string;
};

const ShowData: FC<Props> = ({ search }) => {
  // store
  const { setAnggotaSimpanan, dtAnggota } = useAnggotaApi();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // router
  const router = useRouter();

  const fetchDataAnggota = async () => {
    const res = await setAnggotaSimpanan({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataAnggota();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataAnggota();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // table
  const headTable = [
    "No",
    "Jml. Simpanan",
    "NIK",
    "Nama",
    "Jenkel",
    "Alamat",
    "No. HP",
    "Jabatan",
  ];
  const tableBodies = [
    "jmlh_simpanan",
    "nik",
    "nm_anggota",
    "jenkel",
    "alamat",
    "no_hp",
    "jabatan",
  ];

  const rowClick = (row: AnggotaTypes) => {
    router.push(`/roles/bendahara/simpanan/${row.id}`);
  };

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
              dataTable={dtAnggota.data}
              page={page}
              limit={limit}
              ubah={false}
              hapus={false}
              rowClick={rowClick}
            />
          </div>
          {dtAnggota?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtAnggota?.current_page}
                totalPages={dtAnggota?.last_page}
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
