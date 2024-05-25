/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import { FC, useEffect, useState } from "react";
import useAnggota from "@/stores/crud/Anggota";
import slide from "./slide";
import LightPlugins from "@/components/lightBox/LightPlugins";

type Props = {
  search: string;
};

const ShowData: FC<Props> = ({ search }) => {
  // store
  const { setAnggota, dtAnggota } = useAnggota();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [indexBox, setIndexBox] = useState<number>(-1);
  const [slides, setSlides] = useState<any>();

  const fetchDataAnggota = async () => {
    const res = await setAnggota({
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
    "NIK",
    "Nama",
    "Jenkel",
    "Alamat",
    "No. HP",
    "Jabatan",
    "Foto",
  ];
  const tableBodies = [
    "nik",
    "nm_anggota",
    "jenkel",
    "alamat",
    "no_hp",
    "jabatan",
    "foto",
  ];

  useEffect(() => {
    setSlides(slide(dtAnggota.data));
  }, [dtAnggota.data]);

  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {/* lightBox */}
      <LightPlugins index={indexBox} setIndex={setIndexBox} slides={slides} />
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
              setIndexBox={setIndexBox}
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
