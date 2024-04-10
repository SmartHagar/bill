/** @format */

import React from "react";
import Form from "./Form";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="min-h-screen flex bg-login  bg-cover bg-center">
      <div className="bg-white/[0.1] backdrop-blur-sm w-full md:max-w-md">
        <Form />
      </div>
      <div className=" w-full hidden md:flex"></div>
    </div>
  );
};

export default Login;
