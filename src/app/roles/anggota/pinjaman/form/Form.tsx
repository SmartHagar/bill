/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import BtnDefault from "@/components/button/BtnDefault";
import usePinjaman from "@/stores/crud/Pinjaman";
import PinjamanTypes from "@/types/PinjamanTypes";
import submitData from "@/services/submitData";
import moment from "moment";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
  anggota_id: number;
};

const Form = ({ showModal, setShowModal, dtEdit, anggota_id }: Props) => {
  const nowMoment = moment();
  // state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tgl_pinjam, setTgl_pinjam] = useState<string | Date>("");
  // store
  const { addData, updateData } = usePinjaman();
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<PinjamanTypes>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("anggota_id", anggota_id);
    setValue("tgl_pinjam", nowMoment.format("YYYY-MM-DD"));
    setTgl_pinjam(nowMoment.format("MM/DD/YYYY"));
    setValue("nominal", 0);
    setValue("angsuran", 0);
    setValue("status", "proses");
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("anggota_id", dtEdit.anggota_id);
      setValue("tgl_pinjam", dtEdit.tgl_pinjam);
      setTgl_pinjam(dtEdit.tgl_pinjam);
      setValue("nominal", dtEdit.nominal);
      setValue("angsuran", dtEdit.angsuran);
      setValue("status", dtEdit.status);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<PinjamanTypes> = async (row) => {
    // add anggota_id in row
    row.anggota_id = anggota_id;
    console.log({ row });
    // return;
    //  submit data
    submitData({
      row,
      dtEdit,
      setIsLoading,
      setShowModal,
      addData,
      updateData,
      resetForm,
      toastShow,
    });
  };

  return (
    <ModalDefault
      title="Form Dosen"
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextDefault name="id" register={register} type="hidden" />

        <div className="grid grid-cols-4 gap-2 mb-4">
          <BodyForm
            register={register}
            errors={errors}
            dtEdit={dtEdit}
            control={control}
            watch={watch}
            setValue={setValue}
            showModal={showModal}
          />
        </div>
        <div>
          {isLoading ? (
            <LoadingSpiner />
          ) : (
            <BtnDefault onClick={handleSubmit(onSubmit)}>Simpan</BtnDefault>
          )}
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
