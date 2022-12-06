import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import Image from "next/image";
import bg from "../../public/slide-01.jpeg";
import bg1 from "../../public/slide-02.jpeg";
import bg2 from "../../public/slide-03.jpeg";
export default function Carousel() {
  return (
    <div className="2xl:h-[80vh] h-auto lg:h-[100vh] hero">
      <Swiper
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        grabCursor={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <div className="relative shadow-xl sm:overflow-hidden h-full w-full">
            <div className="absolute inset-0">
              <Image
                className="h-full invert-0 w-full object-cover"
                src={bg}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-sky-600 to-cyan-600 mix-blend-multiply" />
            </div>
            <section>
              <div className="relative px-6 lg:px-8">
                <div className="mx-auto inset-y-0  max-w-3xl pt-56 pb-32 sm:pt-64 sm:pb-40">
                  <div>
                    {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                      <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <span className="text-white">
                          Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                          </a>
                        </span>
                      </div>
                    </div> */}
                    <div>
                      <h1 className="text-4xl text-white font-bold tracking-tight sm:text-center sm:text-7xl">
                        Take Care Of Your Health
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-white sm:text-center">
                        At Medina, we are dedicated to diagnosing all kinds of
                        diseases
                      </p>
                      <div className="mt-8 flex gap-x-4 justify-center">
                        <button className="inline-block rounded-xl bg-white px-4 py-1.5 text-base font-semibold leading-7 text-black hover:text-white shadow-sm ring-1  hover:bg-cyan-500">
                          Make An Appointment
                        </button>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                      <svg
                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                          fillOpacity=".3"
                          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                          <linearGradient
                            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9089FC" />
                            <stop offset={1} stopColor="#FF80B5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative shadow-xl sm:overflow-hidden h-full w-full">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src={bg1}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-sky-600 to-cyan-600 mix-blend-multiply" />
            </div>
            <section>
              <div className="relative px-6 lg:px-8">
                <div className="mx-auto inset-y-0  max-w-3xl pt-56 pb-32 sm:pt-64 sm:pb-40">
                  <div>
                    <div>
                      <h1 className="text-4xl text-white font-bold tracking-tight sm:text-center sm:text-7xl">
                        Years Of Experience
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-white sm:text-center">
                        Since our foundation, we've been delivering diagnotic
                        solutions.
                      </p>
                      <div className="mt-8 flex gap-x-4 justify-center">
                        <button className="inline-block rounded-xl bg-white px-4 py-1.5 text-base font-semibold leading-7 text-black hover:text-white shadow-sm ring-1  hover:bg-cyan-500">
                          Make An Appointment
                        </button>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                      <svg
                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                          fillOpacity=".3"
                          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                          <linearGradient
                            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9089FC" />
                            <stop offset={1} stopColor="#FF80B5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative shadow-xl sm:overflow-hidden h-full w-full">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src={bg2}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-sky-600 to-cyan-600 mix-blend-multiply" />
            </div>
            <section>
              <div className="relative px-6 lg:px-8">
                <div className="mx-auto inset-y-0  max-w-3xl pt-56 pb-32 sm:pt-64 sm:pb-40">
                  <div>
                    <div>
                      <h1 className="text-4xl text-white font-bold tracking-tight sm:text-center sm:text-7xl">
                        Qualified Team of Experts
                      </h1>
                      <p className="mt-6 text-lg leading-8 text-white sm:text-center">
                        Our Team of diagnoticians is always ready to help you be
                        healtheir
                      </p>
                      <div className="mt-8 flex gap-x-4 justify-center">
                        <button className="inline-block rounded-xl bg-white px-4 py-1.5 text-base font-semibold leading-7 text-black hover:text-white shadow-sm ring-1  hover:bg-cyan-500">
                          Make An Appointment
                        </button>
                      </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                      <svg
                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                          fillOpacity=".3"
                          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                          <linearGradient
                            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#9089FC" />
                            <stop offset={1} stopColor="#FF80B5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
