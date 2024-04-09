/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import Form from "./form/Form";
import ModalDelete from "@/components/modal/ModalDelete";
import { Toaster } from "react-hot-toast";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSearch";
import usePembayaran from "@/stores/crud/Pembayaran";
import BtnDefault from "@/components/button/BtnDefault";
import Cookies from "js-cookie";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Pembayaran = () => {
  // store
  const { removeData } = usePembayaran();
  // state
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [idDel, setIdDel] = useState<number | string>();
  const [dtEdit, setDtEdit] = useState<any>();
  const [search, setSearch] = useState("");
  const [tambah, setTambah] = useState(false);
  const [anggota, setAnggota] = useState<any>({});
  // get cookies
  const anggotaFromCookie = Cookies.get("anggota");
  useEffect(() => {
    if (anggotaFromCookie) {
      setAnggota(JSON.parse(anggotaFromCookie));
    }
  }, [anggotaFromCookie]); // Gunakan dependensi kosong agar useEffect hanya dijalankan setelah komponen dipasang

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
      const { data } = await removeData(idDel as number);
      toastShow({
        event: data,
      });
      setShowDelete(false);
    } else setShowDelete(true);
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
        {/* keterangan */}
        <div className="mb-4 flex justify-between">
          <p>Silahkan Mengolah data Pembayaran</p>
          {tambah && (
            <div>
              <BtnDefault onClick={handleTambah}>Tambah Data</BtnDefault>
            </div>
          )}
        </div>
        <InputTextSearch
          placeholder="Cari Data"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData
        setDelete={setDelete}
        setEdit={setEdit}
        search={search}
        anggota_id={anggota.id}
        setTambah={setTambah}
      />
    </div>
  );
};

export default Pembayaran;
