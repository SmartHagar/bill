/** @format */
"use client";
import InputDate from "@/components/input/InputDate";
import InputDateIncludeIntervals from "@/components/input/InputDateIncludeIntervals";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputRupiah from "@/components/input/InputRupiah";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
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
  tgl_simpanan: any;
  setTgl_simpanan: any;
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
  tgl_simpanan,
  setTgl_simpanan,
}) => {
  return (
    <>
      <InputDate
        label="Tgl. Simpan"
        name="tgl_simpanan"
        control={control}
        startDate={tgl_simpanan}
        setStartDate={setTgl_simpanan}
        required
        errors={errors.tgl_simpanan}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputRupiah
        label="Nominal"
        name="nominal"
        control={control}
        required
        errors={errors.nominal}
        addClass="col-span-4 lg:col-span-2"
      />
      <InputTextDefault
        label="Keterangan"
        name="ket_simpanan"
        register={register}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
