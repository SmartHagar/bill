/** @format */
"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type Props = {};

const Dashboard = (props: Props) => {
  const [anggota, setAnggota] = useState<any>({});

  const anggotaFromCookie = Cookies.get("anggota");
  useEffect(() => {
    if (anggotaFromCookie) {
      setAnggota(JSON.parse(anggotaFromCookie));
    }
  }, [anggotaFromCookie]); // Gunakan dependensi kosong agar useEffect hanya dijalankan setelah komponen dipasang

  return (
    <div>
      <h1>Selamat Datang Ketua {anggota?.nm_anggota}</h1>
    </div>
  );
};

export default Dashboard;
