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
  return (
    <>
      <InputFile
        label="Bukti Pembayaran"
        name="bukti_bayar"
        register={register}
        accept="image/*"
        required
        errors={errors.bukti_bayar}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.bukti_bayar}
        myFile={myFile}
        setMyFile={setMyFile}
      />
    </>
  );
};

export default BodyForm;
