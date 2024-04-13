/** @format */

import React from "react";

type Props = {};

const Anggota = (props: Props) => {
  return (
    <div id="anggota" className="py-24 bg-slate-50">
      <div className="container overflow-hidden">
        <div className="flex items-center justify-center mb-16">
          <div className="max-w-2xl text-center">
            <h5 className="capitalize text-lg  text-gray-800 font-medium mb-2">
              Our <span className="font-semibold text-primary">Team</span>
            </h5>
            <h2 className="text-3xl/snug font-bold text-gray-800 mb-1">
              Meet our team
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Nemo enim ipsam voluptatem that quia voluptas aut fugit{" "}
            </p>
          </div>
        </div>

        <div className="gap-2">
          <div className="py-12 -my-12 overflow-x-hidden">
            <div className="swiper feedback-swiper !overflow-visible max-w-full max-h-full">
              <div className="swiper-wrapper">
                <div className="swiper-slide mb-12">
                  <div className="relative bg-white rounded-md h-full">
                    <div className="absolute -top-[20%] start-0 translate-x-4 h-24 bg-white p-2 rounded-md overflow-hidden">
                      {/* <img
                        src="assets/images/avatars/img-7.png"
                        alt=""
                        className="rounded-md max-w-full max-h-full"
                      /> */}
                    </div>

                    <div className="px-6 pb-6 pt-16">
                      <p className="font-medium text-gray-500">@maxine</p>
                      <h3 className="text-xl font-bold text-gray-800 mb-0.5">
                        Maxine Gilmer
                      </h3>
                      <p className="font-medium text-gray-500 mb-4">
                        Web designer
                      </p>
                      <p className="text-gray-500">
                        {" "}
                        These alternatives to the classic Lorem Ipsum texts are
                        often amusing and tell short, funny or nonsensical
                        stories. .
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide mb-12">
                  <div className="relative bg-white rounded-md h-full">
                    <div className="absolute -top-[20%] start-0 translate-x-4 h-24 bg-white p-2 rounded-md overflow-hidden">
                      {/* <img
                        src="assets/images/avatars/img-3.png"
                        alt=""
                        className="rounded-md max-w-full max-h-full"
                      /> */}
                    </div>

                    <div className="px-6 pb-6 pt-16">
                      <p className="font-medium text-gray-500">@michael</p>
                      <h3 className="text-xl font-bold text-gray-800 mb-0.5">
                        Michael Ellis
                      </h3>
                      <p className="font-medium text-gray-500 mb-4">
                        UI/UX designer
                      </p>
                      <p className="text-gray-500">
                        We all intend to plan ahead, but too often let the
                        day-to-day minutia get in the way of making a calendar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide mb-12">
                  <div className="relative bg-white rounded-md h-full">
                    <div className="absolute -top-[20%] start-0 translate-x-4 h-24 bg-white p-2 rounded-md overflow-hidden">
                      {/* <img
                        src="assets/images/avatars/img-8.png"
                        alt=""
                        className="rounded-md max-w-full max-h-full"
                      /> */}
                    </div>

                    <div className="px-6 pb-6 pt-16">
                      <p className="font-medium text-gray-500">@ruben</p>
                      <h3 className="text-xl font-bold text-gray-800 mb-0.5">
                        Ruben Gouse
                      </h3>
                      <p className="font-medium text-gray-500 mb-4">
                        Web devloper
                      </p>

                      <p className="text-gray-500">
                        These qualities can be combined perfectly natural.
                        However, things like people look miserable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide mb-12">
                  <div className="relative bg-white rounded-md h-full">
                    <div className="absolute -top-[20%] start-0 translate-x-4 h-24 bg-white p-2 rounded-md overflow-hidden">
                      {/* <img
                        src="assets/images/avatars/img-5.png"
                        alt=""
                        className="rounded-md max-w-full max-h-full"
                      /> */}
                    </div>

                    <div className="px-6 pb-6 pt-16">
                      <p className="font-medium text-gray-500">@francis</p>
                      <h3 className="text-xl font-bold text-gray-800 mb-0.5">
                        Francis Ibikunle
                      </h3>
                      <p className="font-medium text-gray-500 mb-4">Manager</p>

                      <p className="text-gray-500">
                        These alternatives to the classic Lorem Ipsum are often
                        amusing and tell short, funny or nonsensical stories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination z-10 !-start-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anggota;
