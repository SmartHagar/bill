/** @format */
"use client";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useAnggota from "@/stores/crud/Anggota";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import BtnDefault from "@/components/button/BtnDefault";
import AnggotaTypes from "@/types/AnggotaTypes";
import submitData from "@/services/submitData";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // state
  const [myFile, setMyFile] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // store
  const { addData, updateData } = useAnggota();
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<AnggotaTypes>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("nik", "");
    setValue("nm_anggota", "");
    setValue("jenkel", "");
    setValue("jabatan", "");
    setValue("no_hp", "");
    setValue("alamat", "");
    setValue("foto", "");
    setValue("email", "");
    setMyFile(null);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("nik", dtEdit.nik);
      setValue("nm_anggota", dtEdit.nm_anggota);
      setValue("jenkel", dtEdit.jenkel);
      setValue("jabatan", dtEdit.jabatan);
      setValue("no_hp", dtEdit.no_hp);
      setValue("alamat", dtEdit.alamat);
      setValue("foto", dtEdit.foto);
      setValue("email", dtEdit.user.email);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<AnggotaTypes> = async (row) => {
    // add user in dtEdit
    dtEdit && (row.user_id = dtEdit.user_id);
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
      title="Form Anggota"
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
            myFile={myFile}
            setMyFile={setMyFile}
          />
        </div>
        <div>
          {isLoading ? (
            <LoadingSpiner />
          ) : (
            <BtnDefault onClick={handleSubmit(onSubmit)} type="submit">
              Simpan
            </BtnDefault>
          )}
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
