/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import useAnggotaApi from "@/stores/api/Anggota";
import { useEffect } from "react";
import AnggotaTypes from "@/types/AnggotaTypes";
import Image from "next/image";
import { BASE_URL } from "@/services/baseURL";

type Props = {};

const Anggota = () => {
  // store
  const { setAnggotaAll, dtAnggota } = useAnggotaApi();

  useEffect(() => {
    setAnggotaAll({});
  }, [setAnggotaAll]);

  console.log({ dtAnggota });
  return (
    <div id="anggota" className="pt-24 bg-slate-50 min-h-screen flex">
      <div className="container overflow-hidden flex flex-col grow">
        <div className="flex items-center justify-center mb-16">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl/snug font-bold text-gray-800 mb-1">
              Anggota Koperasi
            </h2>
          </div>
        </div>
        <div className="grow">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {dtAnggota?.data &&
              dtAnggota?.data?.map((item: AnggotaTypes) => (
                <SwiperSlide key={item.id}>
                  <div className="relative h-full w-full">
                    <Image
                      src={`${BASE_URL}/${item.foto}`}
                      alt="anggota"
                      fill
                    />
                    <div className=" z-10 absolute bottom-0 left-0 w-full bg-black/50">
                      <p className="text-center text-white z-50">
                        {item.nm_anggota}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Anggota;
