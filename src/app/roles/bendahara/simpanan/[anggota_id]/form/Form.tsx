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
import useSimpanan from "@/stores/crud/Simpanan";
import SimpananTypes from "@/types/SimpananTypes";
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
  const [tgl_simpanan, setTgl_simpanan] = useState<string | Date>("");
  // store
  const { addData, updateData } = useSimpanan();
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<SimpananTypes>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("anggota_id", anggota_id);
    setValue("tgl_simpanan", nowMoment.format("YYYY-MM-DD"));
    setTgl_simpanan(nowMoment.format("MM/DD/YYYY"));
    setValue("nominal", 0);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("anggota_id", dtEdit.anggota_id);
      setValue("tgl_simpanan", dtEdit.tgl_simpanan);
      setTgl_simpanan(dtEdit.tgl_simpanan);
      setValue("nominal", dtEdit.nominal);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<SimpananTypes> = async (row) => {
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
      title="Form Pinjaman"
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
            tgl_simpanan={tgl_simpanan}
            setTgl_simpanan={setTgl_simpanan}
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
