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
import Link from "next/link";

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
    <div className="px-4 py-2 flex flex-col justify-between h-full">
      <div className="flex flex-col justify-center grow">
        <h1 className="font-bold text-center text-2xl mb-5">Your Logo</h1>
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
              <BtnDefault type="submit" onClick={handleSubmit(onSubmit)}>
                Login
              </BtnDefault>
            )}
          </div>
        </form>
      </div>
      <Link href="/" className="py-5">
        <div className="grid grid-cols-2 gap-1">
          <div className="text-center sm:text-left whitespace-nowrap">
            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block align-text-top"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="inline-block ml-1">
                Kembali Ke Halaman Utama
              </span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Form;
