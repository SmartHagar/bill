/** @format */
"use client";
import InputFile from "@/components/input/InputFile";
import InputRadio from "@/components/input/InputRadio";
import InputTextDefault from "@/components/input/InputTextDefault";
import { SelectDefault } from "@/components/select/SelectDefault";
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
      <InputTextDefault
        label="NIK"
        name="nik"
        register={register}
        required
        errors={errors.nik}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Nama"
        name="nm_anggota"
        register={register}
        required
        errors={errors.nm_anggota}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Email"
        name="email"
        register={register}
        required
        errors={errors.email}
        type="email"
        addClass="col-span-4"
      />
      {/* jenkel */}
      <div className="col-span-4 lg:col-span-2">
        <div className="w-[100%]">
          <label className="block py-2 text-sm font-medium text-gray-700 tracking-wide">
            Jenis Kelamin
          </label>
          <div className="flex gap-2">
            <InputRadio
              id="Laki-laki"
              name="jenkel"
              value="Laki-laki"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Laki-laki"}
            />
            <InputRadio
              id="Perempuan"
              name="jenkel"
              value="Perempuan"
              register={register}
              required
              defaultChecked={dtEdit?.jenkel === "Perempuan"}
            />
          </div>
          {errors?.jenkel?.type === "required" && (
            <p className="text-red-500 font-inter italic text-sm">
              Jenis kelamin tidak boleh kosong
            </p>
          )}
        </div>
      </div>
      <InputTextDefault
        label="No. HP"
        name="no_hp"
        register={register}
        required
        errors={errors.no_hp}
        addClass="col-span-4"
      />
      <InputTextDefault
        label="Alamat"
        name="alamat"
        register={register}
        required
        errors={errors.alamat}
        addClass="col-span-4"
      />
      <SelectDefault
        label="Jabatan"
        defaultOption="Jabatan"
        register={register}
        name="jabatan"
        options={[
          { value: "anggota", label: "Anggota" },
          { value: "bendahara", label: "Bendahara" },
          { value: "ketua", label: "Ketua" },
        ]}
        required
        errors={errors.status}
        addClass="col-span-4"
      />

      <InputFile
        label="Foto"
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
