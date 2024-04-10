/** @format */
"use client";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import PaginationDefault from "@/components/pagination/PaginationDefault";
import TablesDefault from "@/components/tables/TablesDefault";
import React, { FC, useEffect, useState } from "react";
import useAnggota from "@/stores/crud/Anggota";
import AnggotaTypes from "@/types/AnggotaTypes";
import { BsInfo, BsInfoCircle } from "react-icons/bs";
import ModalDefault from "@/components/modal/ModalDefault";
import Detail from "./Detail";
import slide from "./slide";
import LightPlugins from "../../../../components/lightBox/LightPlugins";

type DeleteProps = {
  id?: number | string;
  isDelete: boolean;
};

type Props = {
  setDelete: ({ id, isDelete }: DeleteProps) => void;
  setEdit: (row: any) => void;
  search: string;
};

const ShowData: FC<Props> = ({ setDelete, setEdit, search }) => {
  // store
  const { setAnggota, dtAnggota } = useAnggota();
  // state
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dtDetail, setDtDetail] = useState<any>();
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
    "Aksi",
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
  const costume = (row: AnggotaTypes) => {
    return (
      <BsInfoCircle
        className="self-center cursor-pointer select-none"
        onClick={() => handleDetail(row)}
      />
    );
  };
  const handleDetail = (row: AnggotaTypes) => {
    setDtDetail(row);
    setShowModal(true);
  };
  useEffect(() => {
    setSlides(slide(dtAnggota.data));
  }, [dtAnggota.data]);
  return (
    <div className="flex-1 flex-col max-w-full h-full overflow-auto">
      {/* detail */}
      <ModalDefault
        showModal={showModal}
        setShowModal={setShowModal}
        title="Detail Anggota"
      >
        <Detail dtDetail={dtDetail} />
      </ModalDefault>
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
              setEdit={setEdit}
              setDelete={setDelete}
              ubah={true}
              hapus={true}
              costume={costume}
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
