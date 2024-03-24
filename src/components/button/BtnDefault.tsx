/** @format */

import React, { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  addClass?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const BtnDefault: FC<Props> = ({
  children,
  onClick,
  addClass = "bg-green hover:bg-green/80 text-dark-blue",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`${addClass} rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BtnDefault;
