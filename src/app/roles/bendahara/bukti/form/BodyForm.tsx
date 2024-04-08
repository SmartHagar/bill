/** @format */
"use client";
import InputDateIncludeIntervals from "@/components/input/InputDateIncludeIntervals";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import SelectFromDb from "@/components/select/SelectFromDB";
import usePinjamanApi from "@/stores/api/Pinjaman";
import React, { FC, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

type Props = {
  register: any;
  errors: any;
  dtEdit: any;
  control: any;
  watch: any;
  setValue: any;
  showModal: boolean;
  myFile: any;
  setMyFile: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  myFile,
  setMyFile,
}) => {
  const { setPinjamanStatus, dtPinjaman } = usePinjamanApi();
  const fetchOption = async () => {
    const res = await setPinjamanStatus({
      search: "",
    });
    return res;
  };

  useEffect(() => {
    fetchOption();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);
  return (
    <>
      {dtPinjaman?.data && (
        <SelectFromDb
          label="Pinjaman"
          placeholder="Pilih Pinjaman"
          name="pinjaman_id"
          dataDb={dtPinjaman?.data}
          body={["id", "tgl_pinjam", "anggota.nm_anggota"]}
          control={control}
          required
          errors={errors.pinjaman_id}
          addClass="col-span-4"
        />
      )}
      <InputFile
        label="Bukti"
        name="bukti"
        register={register}
        accept="image/*"
        required
        errors={errors.bukti}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.bukti}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
