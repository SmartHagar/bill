/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSerch";
import useDetBeritaAcara from "@/stores/crud/DetBeritaAcara";
import { useSearchParams } from "next/navigation";
import { BASE_URL } from "@/services/baseURL";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import useJadwalApiEdom from "@/stores/api/Jadwal";
import ParafDosenMhs from "./ParafDosenMhs";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Dosen = () => {
  // store
  const { removeData, showDetBeritaAcara } = useDetBeritaAcara();
  const { setShowJadwal, dtJadwal } = useJadwalApiEdom();
  // get search params
  const params = useSearchParams();
  // get berita_acara_id
  const berita_acara_id = params.get("berita_acara_id") || "";
  const jadwal_id = params.get("jadwal_id") || "";
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");
  const [loadPdf, setLoadPdf] = useState(false);

  const handleTambah = () => {
    setShowModal(true);
    setDtEdit(null);
  };

  const setEdit = (row: any) => {
    setShowModal(true);
    setDtEdit(row);
  };

  const setDelete = async ({ id, isDelete }: Delete) => {
    setIdDel(id);
    if (isDelete) {
      const { data } = await removeData(idDel);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
  };

  // memanggil showDetBeritaAcara
  useEffect(() => {
    setShowJadwal(jadwal_id);

    return () => {};
  }, [jadwal_id, setShowJadwal]);

  const jadwal = dtJadwal;

  const cetak = () => {
    setLoadPdf(true);
    // download pdf from {baseUrl}/api/berita_acara/cetak
    window.open(`${BASE_URL}/pdf/berita-acara/${berita_acara_id}`);
    setLoadPdf(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        <Form
          dtEdit={dtEdit}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <ModalDelete
          showDel={showDelete}
          setShowDel={setShowDelete}
          setDelete={setDelete}
        />
        <div className="mb-4 flex flex-col-reverse justify-between md:flex-row">
          <div className="flex flex-col w-full">
            <div>
              <span className="w-32 inline-block uppercase">Dosen</span>
              <span>: {jadwal?.dosen?.nama}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">KODE MK</span>
              <span>: {jadwal?.matkul?.kode}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">Mata Kuliah</span>
              <span>: {jadwal?.matkul?.nama}</span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">SKS/SMT/KLS</span>
              <span>
                : {jadwal?.matkul?.sks} / {jadwal?.semester} T.A 2023/2024
              </span>
            </div>
            <div>
              <span className="w-32 inline-block uppercase">Ruangan</span>
              <span>: {jadwal?.ruangan?.kode}</span>
            </div>
          </div>
          <div className="flex lg:justify-normal flex-col gap-4">
            <div className="flex gap-2 self-start md:w-64">
              {loadPdf ? (
                <LoadingSpiner />
              ) : (
                <ButtonPrimary
                  text="Cetak"
                  addClass=" bg-secondary"
                  onClick={cetak}
                />
              )}
              <ButtonPrimary
                text="Tambah Data"
                addClass=""
                onClick={handleTambah}
              />
            </div>
            <div className="flex gap-2 self-start md:w-64">
              <ParafDosenMhs />
            </div>
          </div>
        </div>
        <InputTextSearch
          placeholder="Cari Data"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData setDelete={setDelete} setEdit={setEdit} search={search} />
    </div>
  );
};

export default Dosen;
