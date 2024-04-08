/** @format */
"use client";
import BtnDefault from "@/components/button/BtnDefault";
import InputTextDefault from "@/components/input/InputTextDefault";
import useLogin from "@/stores/auth/login";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import LoadingSpiner from "@/components/loading/LoadingSpiner";
import InputTextPassword from "@/components/input/InputTextPassword";

type Props = {};

type Inputs = {
  email: string;
  password: string;
};

const Form = (props: Props) => {
  // store
  const { setLogin, cekToken } = useLogin();
  const router = useRouter();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // jika sudah login
  const fetchAuth = async () => {
    const token = Cookies.get("token");
    if (token) {
      const cekAuth = await cekToken();
      // console.log({ cekAuth });
      if (!cekAuth?.error) {
        const role = cekAuth?.data?.role;
        // redirect to login
        router.push(`/roles/${role}`);
      }
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAuth();
    }
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (row) => {
    setIsLoading(true);
    setError("");
    const res = await setLogin(row);
    if (res?.error) {
      console.log(res?.error);
      setError(res?.error?.message);
    } else {
      const { data } = res;
      Cookies.set("token", data.token);
      Cookies.set("role", data.role);
      const anggota = JSON.stringify(data.user.anggota);
      Cookies.set("anggota", anggota);
      // cek jika data pagawai ada
      if (data?.user.anggota) {
        // convert json
        const anggota = JSON.stringify(data.user.anggota);
        console.log({ anggota });
        Cookies.set("anggota", anggota);
      }
      router.push(`/roles/${data.role}`);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="px-5 py-7">
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form action="">
        <div className="pb-2 pt-4">
          <InputTextDefault
            label="Email"
            register={register}
            type="text"
            name="email"
            placeholder="Email"
            required
            errors={errors.email}
          />
        </div>
        <div className="pb-2 pt-4">
          <InputTextPassword
            label="Password"
            register={register}
            type="password"
            name="password"
            placeholder="Password"
            required
            errors={errors.email}
          />
        </div>
        <div className="mt-5">
          {isLoading ? (
            <LoadingSpiner />
          ) : (
            <BtnDefault onClick={handleSubmit(onSubmit)}>Login</BtnDefault>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
