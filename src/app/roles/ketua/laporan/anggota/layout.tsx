/** @format */

import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Laporan Anggota",
};

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return <>{props.children}</>;
};

export default layout;
