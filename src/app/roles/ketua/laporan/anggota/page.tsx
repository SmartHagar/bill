/** @format */
"use client";
import { useState } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import InputTextSearch from "@/components/input/InputTextSearch";
import BtnDefault from "@/components/button/BtnDefault";
import { BASE_URL } from "@/services/baseURL";
// anggota
// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Anggota = () => {
  // state
  const [search, setSearch] = useState("");

  const handleCetak = () => {
    const lapAnggota = `${BASE_URL}/laporan/anggota`;
    window.open(lapAnggota, "_blank");
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        {/* keterangan */}
        <div className="mb-4 flex justify-between">
          <p>Data anggota</p>
          <div>
            <BtnDefault onClick={handleCetak}>Cetak</BtnDefault>
          </div>
        </div>
        <InputTextSearch
          placeholder="Cari Data"
          onChange={(e) => setSearch(e)}
        />
      </div>

      <ShowData search={search} />
    </div>
  );
};

export default Anggota;
