/** @format */
"use client";
import InputDateIncludeIntervals from "@/components/input/InputDateIncludeIntervals";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
import useProdiApi from "@/stores/api/Prodi";
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
  tgl: Date | string;
  setTgl: any;
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
  tgl,
  setTgl,
  myFile,
  setMyFile,
}) => {
  // menghitung kebelakang
  function subDays(date: Date, days: number) {
    return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
  }
  // menghitung kedepan
  function addDays(date: Date, days: number) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  return (
    <>
      <InputDateIncludeIntervals
        label="Tgl. Berita Acara"
        name="tgl"
        control={control}
        startDate={tgl}
        setStartDate={setTgl}
        required
        errors={errors.tgl}
        addClass="col-span-4 lg:col-span-2"
        includeDateIntervals={[
          { start: subDays(new Date(), 14), end: new Date() },
        ]}
      />

      <InputTextDefault
        label="Jumlah MHS"
        name="jmlh_mhs"
        register={register}
        required
        errors={errors.jmlh_mhs}
        type="number"
        addClass="col-span-4 lg:col-span-2"
      />

      <InputTextDefault
        label="Materi (Kuliah Perpertemuan)"
        name="materi"
        register={register}
        required
        errors={errors.materi}
        addClass="col-span-4"
      />

      <SelectDefault
        label="Sistem Belajar"
        defaultOption="Pilih Sistem Belajar"
        register={register}
        errors={errors}
        name="sistem"
        options={[
          { value: "Daring", label: "Daring (Online)" },
          { value: "Luring", label: "Luring (Tatap Muka)" },
        ]}
        addClass="col-span-4"
      />

      <InputFile
        label="Foto (Aktivitas BBM di Kelas)"
        name="foto"
        register={register}
        accept="image/*"
        required
        errors={errors.foto}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.foto}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
