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
      <SelectDefault
        label="Status_bayar"
        defaultOption="Status Bayar"
        register={register}
        name="status_bayar"
        options={[
          { value: "proses", label: "Proses" },
          { value: "tolak", label: "Tolak" },
          { value: "terima", label: "Terima" },
        ]}
        required
        errors={errors.status}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
