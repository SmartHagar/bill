/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import React, { FC, useEffect, useState } from "react";
import useSimpanan from "@/stores/crud/Simpanan";
import SimpananTypes from "@/types/SimpananTypes";
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
  anggota_id: number;
};

const ShowData: FC<Props> = ({ setDelete, setEdit, search, anggota_id }) => {
  // store
  const { setSimpanan, dtSimpanan } = useSimpanan();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchDataSimpanan = async () => {
    const res = await setSimpanan({
      page,
      limit,
      search,
      anggota_id,
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
  const headTable = ["No", "Tgl. Simpan", "Nominal", "Ket", "Aksi"];
  const tableBodies = ["tgl_simpanan", "nominal", "ket"];

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
              dataTable={dtSimpanan.data}
              page={page}
              limit={limit}
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
            />
          </div>
          {dtSimpanan?.last_page > 1 && (
            <div className="mt-4">
              <PaginationDefault
                currentPage={dtSimpanan?.current_page}
                totalPages={dtSimpanan?.last_page}
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
