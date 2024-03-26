/** @format */
"use client";
import ButtonPrimary from "@/components/button/ButtonPrimary";
import InputTextDefault from "@/components/input/InputTextDefault";
import ModalDefault from "@/components/modal/ModalDefault";
import toastShow from "@/utils/toast-show";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BodyForm from "./BodyForm";
import useDosen from "@/stores/crud/Dosen";
import { useSearchParams } from "next/navigation";
import useDetBeritaAcara from "@/stores/crud/DetBeritaAcara";
import LoadingSpiner from "@/components/loading/LoadingSpiner";

type Props = {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  dtEdit: any;
};

type Inputs = {
  id: number | string;
  berita_acara_id: number | string;
  tgl: string | Date;
  materi: string;
  jmlh_mhs: number | string;
  foto: string;
  sistem: string;
};

const Form = ({ showModal, setShowModal, dtEdit }: Props) => {
  // get search params
  const params = useSearchParams();
  // get berita_acara_id
  const berita_acara_id = params.get("berita_acara_id") || "";
  // state
  const [tgl, setTgl] = useState<string | Date>(new Date("01-01-1980"));
  const [myFile, setMyFile] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // store
  const { addData, updateData } = useDetBeritaAcara();
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  // reset form
  const resetForm = () => {
    setValue("id", "");
    setValue("materi", "");
    setValue("jmlh_mhs", "");
    setValue("tgl", "");
    setValue("foto", "");
    setTgl("");
    setMyFile(null);
  };

  // data edit
  useEffect(() => {
    if (dtEdit) {
      setValue("id", dtEdit.id);
      setValue("materi", dtEdit.materi);
      setValue("jmlh_mhs", dtEdit.jmlh_mhs);
      setValue("tgl", dtEdit.tgl);
      setTgl(new Date(dtEdit.tgl));
      setValue("foto", dtEdit.foto);
      setValue("sistem", dtEdit.sistem);
    } else {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal, dtEdit]);
  // simpan data
  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    setIsLoading(true);
    row.berita_acara_id = berita_acara_id;
    console.log({ row });
    // jika dtEdit tidak kosong maka update
    if (dtEdit) {
      const { data } = await updateData(dtEdit.id, row);
      toastShow({
        event: data,
      });
      setShowModal(false);
    } else {
      const { data } = await addData(row);
      console.log({ data });
      toastShow({
        event: data,
      });
      data?.type !== "success" ? null : resetForm();
    }
    setIsLoading(false);
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
            myFile={myFile}
            setMyFile={setMyFile}
            tgl={tgl}
            setTgl={setTgl}
          />
        </div>
        <div>
          {isLoading ? (
            <LoadingSpiner />
          ) : (
            <ButtonPrimary text="Simpan" onClick={handleSubmit(onSubmit)} />
          )}
        </div>
      </form>
    </ModalDefault>
  );
};

export default Form;
