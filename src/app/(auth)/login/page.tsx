/** @format */

import React from "react";
import Form from "./Form";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="min-h-screen flex">
      <div className="bg-white w-full md:max-w-md">
        <Form />
      </div>
      <div className="border border-blue w-full bg-blue hidden md:flex">
        hallo
      </div>
    </div>
  );
};

export default Login;
