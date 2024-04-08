/** @format */

import AnggotaTypes from "@/types/AnggotaTypes";
import React, { FC } from "react";

type Props = {
  dtDetail: AnggotaTypes | null;
};

const Detail: FC<Props> = ({ dtDetail }) => {
  console.log({ dtDetail });
  return (
    <div>
      <div className="flex">
        <span className="w-28">Email</span>
        <span>: {dtDetail?.user?.email}</span>
      </div>
      <div className="flex">
        <span className="w-28">Password</span>
        <span>: {dtDetail?.user?.show_password}</span>
      </div>
    </div>
  );
};

export default Detail;
