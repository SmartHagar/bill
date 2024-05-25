/** @format */
"use client";
import { useState } from "react";

import ShowData from "./ShowData";
import { Toaster } from "react-hot-toast";
import InputTextSearch from "@/components/input/InputTextSearch";
import BtnDefault from "@/components/button/BtnDefault";
import { BASE_URL } from "@/services/baseURL";
// simpanan
// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Simpanan = () => {
  // state
  const [search, setSearch] = useState("");

  const handleCetak = () => {
    const lapSimpanan = `${BASE_URL}/laporan/simpanan`;
    window.open(lapSimpanan, "_blank");
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <Toaster />
        {/* keterangan */}
        <div className="mb-4 flex justify-between">
          <p>Data simpanan</p>
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

export default Simpanan;
