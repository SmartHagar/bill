/** @format */
"use client";
import InputFile from "@/components/input/InputFile";
import InputTextDefault from "@/components/input/InputTextDefault";
import { FC } from "react";

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
        label="Gambar"
        name="gambar"
        register={register}
        accept="image/*"
        required
        errors={errors.gambar}
        addClass="col-span-4"
        setValue={setValue}
        fileEdit={dtEdit?.gambar}
        myFile={myFile}
        setMyFile={setMyFile}
      />

      <InputTextDefault
        label="Ket"
        name="ket"
        register={register}
        addClass="col-span-4"
      />
    </>
  );
};

export default BodyForm;
