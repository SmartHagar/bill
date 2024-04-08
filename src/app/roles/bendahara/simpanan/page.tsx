/** @format */
"use client";
import React, { useEffect, useState } from "react";

import ShowData from "./ShowData";
import toastShow from "@/utils/toast-show";
import InputTextSearch from "@/components/input/InputTextSearch";
import BtnDefault from "@/components/button/BtnDefault";

// type setDelete
type Delete = {
  id?: number | string;
  isDelete: boolean;
};

const Simpanan = () => {
  // state
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div>
        {/* keterangan */}
        <div className="mb-4 flex justify-between">
          <p>
            Silahkan klik pada anggota untuk melihat dan menambahkan simpanan
          </p>
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
