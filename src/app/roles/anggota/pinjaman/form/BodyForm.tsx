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
};

const BodyForm: FC<Props> = ({
  register,
  errors,
  control,
  dtEdit,
  watch,
  setValue,
  showModal,
}) => {
  // watch nominal dan lama_pinjam

  const nominal = watch("nominal", 0);
  const lama_pinjam = watch("lama_pinjam", 0);
  useEffect(() => {
    const angsuran = nominal / lama_pinjam || 0;
    // bulatkan ke atas
    const angsuranRounded = Math.ceil(angsuran);
    // console.log({ angsuran });
    setValue("angsuran", angsuranRounded);
  }, [nominal, lama_pinjam, setValue]);

  return (
    <>
      <InputRupiah
        label="Nominal"
        name="nominal"
        control={control}
        required
        errors={errors.nominal}
        addClass="col-span-4 lg:col-span-2"
      />
      <div className="lg:col-span-1 flex items-center gap-2">
        <InputTextDefault
          label="Lama"
          name="lama_pinjam"
          register={register}
          required
          errors={errors.lama_pinjam}
          valueAsNumber
          min={0}
          max={12}
          type="number"
          addClass="col-span-4"
        />
        <span className="mt-5 text-xs">Bulan</span>
      </div>

      <InputRupiah
        label="Angsuran"
        name="angsuran"
        control={control}
        required
        errors={errors.angsuran}
        readOnly
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
