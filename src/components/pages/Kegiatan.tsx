/** @format */

import { BASE_URL } from "@/services/baseURL";
import useKegiatanApi from "@/stores/api/Kegiatan";
import KegiatanTypes from "@/types/KegiatanTypes";
import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import LightPlugins from "../lightBox/LightPlugins";

type Props = {};

const Kegiatan = (props: Props) => {
  // state
  const [gallery, setGallery] = useState<any>();
  const [indexBox, setIndexBox] = useState<number>(-1);
  // store
  const { setKegiatan, dtKegiatan } = useKegiatanApi();

  useEffect(() => {
    setKegiatan({});
  }, [setKegiatan]);

  // add gallery
  const slide = (data: KegiatanTypes[]) => {
    const dtImages = data?.map((row: KegiatanTypes) => {
      return {
        src: `${BASE_URL}/${row?.gambar}`,
        title: row.ket,
        width: 800,
        height: 600,
      };
    });
    setGallery(dtImages);
  };

  useEffect(() => {
    dtKegiatan?.data?.data && slide(dtKegiatan?.data?.data);
  }, [dtKegiatan]);
  return (
    <section className="py-24 min-h-screen bg-gradient-to-r from-gray-100 to-gray-50 bg-opacity-50">
      <div className="container">
        <div className="flex items-center justify-center mb-14">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl/snug font-bold capitalize text-gray-800 mb-1">
              Kegiatan Pada Koperasi
            </h2>
            <p className="text-base text-gray-600">Galeri kegiatan</p>
          </div>
        </div>
        <PhotoAlbum
          layout="rows"
          photos={gallery}
          onClick={({ index: current }) => setIndexBox(current)}
        />
        {/* lightBox */}
        <LightPlugins
          index={indexBox}
          setIndex={setIndexBox}
          slides={gallery}
        />
      </div>
    </section>
  );
};

export default Kegiatan;
