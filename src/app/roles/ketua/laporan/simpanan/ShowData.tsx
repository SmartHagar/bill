/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { FC, useEffect, useState } from "react";
import useAnggotaApi from "@/stores/api/Anggota";

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

  const fetchDataSimpanan = async () => {
    const res = await setAnggotaSimpanan({
      page,
      limit,
      search,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataSimpanan();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);
  // ketika search berubah
  useEffect(() => {
    setPage(1);
    fetchDataSimpanan();
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
              dataTable={dtAnggota.data}
              page={page}
              limit={limit}
              ubah={false}
              hapus={false}
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
