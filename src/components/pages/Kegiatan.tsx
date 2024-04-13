/** @format */

import React from "react";

type Props = {};

const Kegiatan = (props: Props) => {
  return (
    <section id="service" className="py-24">
      <div className="container">
        <div className="flex items-center justify-center mb-14">
          <div className="max-w-2xl text-center">
            <h5 className="capitalize text-lg  text-gray-800 font-medium mb-2">
              Customer{" "}
              <span className="font-semibold text-primary">Service</span>
            </h5>
            <h2 className="text-3xl/snug font-bold capitalize text-gray-800 mb-1">
              Choose dashboard for every stage of your Customer journey
            </h2>
            <p className="text-base text-gray-600">
              Nemo enim ipsam voluptatem that quia voluptas aut fugit{" "}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="bg-white p-6">
            <span
              className="inline-flex relative z-0 bg-blue-50 h-14 w-14 mb-6"
              style={{ borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%" }}
            >
              <div className="absolute -z-20 top-5 left-5 right-0 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
            </span>
            <h5 className="text-xl font-medium mt-5 text-gray-800">
              Clean Design
            </h5>
            <p className="text-base text-slate-600 mt-4">
              Quisque quis velit quiars ligula aliquet lacinia quis a diam
              quisque pretium nulla nec ultricies magna.
            </p>
          </div>

          <div className="bg-white p-6">
            <span
              className="inline-flex relative z-0 bg-red-50 h-14 w-14 mb-6"
              style={{ borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%" }}
            >
              <div className="absolute -z-20 top-5 left-5 right-0 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                </svg>
              </div>
            </span>
            <h5 className="text-xl font-medium mt-5 text-gray-800">
              Awesome Code
            </h5>
            <p className="text-base text-slate-600 mt-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit sed quia consequuntur nesciunt.
            </p>
          </div>

          <div className="bg-white p-6">
            <span
              className="inline-flex relative z-0 bg-emerald-50 h-14 w-14 mb-6"
              style={{ borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%" }}
            >
              <div className="absolute -z-20 top-5 left-5 right-0 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                </svg>
              </div>
            </span>
            <h5 className="text-xl font-medium mt-5 text-gray-800">
              Creative Idea
            </h5>
            <p className="text-base text-slate-600 mt-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium.
            </p>
          </div>

          <div className="bg-white p-6">
            <span
              className="inline-flex relative z-0 bg-sky-50 h-14 w-14 mb-6"
              style={{ borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%" }}
            >
              <div className="absolute -z-20 top-5 left-5 right-0 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-sky-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
            </span>
            <h5 className="text-xl font-medium mt-5 text-gray-800">
              Unlimited Features
            </h5>
            <p className="text-base text-slate-600 mt-4">
              Et harum quidem rerum facilis est expedita distinctio nam libero
              tempore cum soluta nobis est eligendi.
            </p>
          </div>

          <div className="bg-white p-6">
            <span
              className="inline-flex relative z-0 bg-amber-50 h-14 w-14 mb-6"
              style={{ borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%" }}
            >
              <div className="absolute -z-20 top-5 left-5 right-0 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-amber-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
            </span>
            <h5 className="text-xl font-medium mt-5 text-gray-800">
              Fully Responsive
            </h5>
            <p className="text-base text-slate-600 mt-4">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates.
            </p>
          </div>

          <div className="bg-white p-6">
            <span
              className="inline-flex relative z-0 bg-violet-50 h-14 w-14 mb-6"
              style={{ borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%" }}
            >
              <div className="absolute -z-20 top-5 left-5 right-0 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-violet-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="21.17" y1="8" x2="12" y2="8"></line>
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                </svg>
              </div>
            </span>
            <h5 className="text-xl font-medium mt-5 text-gray-800">
              Finance Friendly
            </h5>
            <p className="text-base text-slate-600 mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kegiatan;
