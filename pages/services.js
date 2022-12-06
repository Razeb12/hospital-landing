/* This example requires Tailwind CSS v3.0+ */
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/legacy/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" }
];

export default function Example() {
  const [openTab, setOpenTab] = useState(1);
  const [checked, setChecked] = useState(true);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(openTab);
  });

  console.log(current);
  return <div className="">
      <main>
        <div className="relative px-6 lg:px-8 isolate bg-gray-100 border-b border-gray-300">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Our Services
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  We offer a wide range of hospital services, including
                  inpatient and outpatient care, emergency services,
                  diagnostic testing, surgery, rehabilitation services,
                  medical imaging, laboratory services, and more.
                  Additionally, we offer patient education and wellness
                  programs, disease prevention strategies, and community
                  outreach initiatives.
                </p>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                  <defs>
                    <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <section className="mx-auto max-w-md px-2 sm:max-w-3xl sm:px-2 lg:max-w-7xl lg:px-8 py-10">
          <div className="flex h-full flex-col mt-16">
            <div className="flex min-h-0 flex-1 overflow-hidden">
              <main className={openTab === 1 ? "block min-w-0 flex-1  xl:flex" : "hidden"}>
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded">
                  <div className="px-4  flex-auto">
                    <div className="tab-content tab-space ">
                      <div className="overflow-hidden  px-4 sm:px-6 lg:px-8 ">
                        <div className="mx-auto max-w-max lg:max-w-7xl">
                          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                            <div className="max-w-prose text-base lg:max-w-none">
                              <h2 className="font-semibold leading-6 text-indigo-600">
                                Transactions
                              </h2>
                              <div className="h-96">
                                <Image src={"/di.jpeg"} className="object-cover" layout="fill" />
                              </div>
                              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                A better way to send money
                              </p>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                              <defs>
                                <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                            </svg>
                            <svg className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                              <defs>
                                <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                            </svg>
                            <div className="relative md:bg-white md:p-6">
                              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                                  <p>
                                    Ultrices ultricies a in odio consequat
                                    egestas rutrum. Ut vitae aliquam in ipsum.
                                    Duis nullam placerat cursus risus ultrices
                                    nisi, vitae tellus in. Qui non fugiat aut
                                    minus aut rerum. Perspiciatis iusto
                                    mollitia iste minima soluta id.
                                  </p>
                                  <p>
                                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue <a href="#">maecenas</a> risus nulla ultrices congue nunc tortor. Eu leo risus porta integer suspendisse sed sit ligula elit.
                                  </p>
                                  <ol role="list">
                                    <li>
                                      Integer varius imperdiet sed interdum
                                      felis cras in nec nunc.
                                    </li>
                                    <li>
                                      Quam malesuada odio ut sit egestas.
                                      Elementum at porta vitae.
                                    </li>
                                  </ol>
                                  <p>
                                    Amet, eu nulla id molestie quis tortor.
                                    Auctor erat justo, sed pellentesque
                                    scelerisque interdum blandit lectus. Nec
                                    viverra amet ac facilisis vestibulum.
                                    Vestibulum purus nibh ac ultricies congue.
                                  </p>
                                </div>
                                <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                                  <p>
                                    Erat pellentesque dictumst ligula
                                    porttitor risus eget et eget. Ultricies
                                    tellus felis id dignissim eget. Est augue
                                    maecenas risus nulla ultrices congue nunc
                                    tortor.
                                  </p>
                                  <p>
                                    Eu leo risus porta integer suspendisse sed
                                    sit ligula elit. Elit egestas lacinia
                                    sagittis pellentesque neque dignissim
                                    vulputate sodales. Diam sed mauris felis
                                    risus, ultricies mauris netus tincidunt.
                                    Mauris sit eu ac tellus nibh non eget sed
                                    accumsan. Viverra ac sed venenatis
                                    pulvinar elit. Cras diam quis tincidunt
                                    lectus. Non mi vitae, scelerisque felis
                                    nisi, netus amet nisl.
                                  </p>
                                  <p>
                                    Eu eu mauris bibendum scelerisque
                                    adipiscing et. Justo, elementum
                                    consectetur morbi eros, posuere ipsum
                                    tortor. Eget cursus massa sed velit
                                    feugiat sed ut. Faucibus eros mauris morbi
                                    aliquam nullam. Scelerisque elementum sit
                                    magna ullamcorper dignissim pretium.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </main>
            {/* Second tab */}
              <main className={openTab === 2 ? "block min-w-0 flex-1  xl:flex" : "hidden"}>
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded">
                  <div className="px-4  flex-auto">
                    <div className="tab-content tab-space ">
                      <div className="overflow-hidden  px-4 sm:px-6 lg:px-8 ">
                        <div className="mx-auto max-w-max lg:max-w-7xl">
                          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                            <div className="max-w-prose text-base lg:max-w-none">
                              <h2 className="font-semibold leading-6 text-indigo-600">
                                Transactions
                              </h2>
                              <div className="h-96">
                                <Image src={"/ud.jpeg"} className="object-cover" layout="fill" />
                              </div>
                              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                A better way to send money
                              </p>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                              <defs>
                                <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                            </svg>
                            <svg className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                              <defs>
                                <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                            </svg>
                            <div className="relative md:bg-white md:p-6">
                              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                                  <p>
                                    Ultrices ultricies a in odio consequat
                                    egestas rutrum. Ut vitae aliquam in ipsum.
                                    Duis nullam placerat cursus risus ultrices
                                    nisi, vitae tellus in. Qui non fugiat aut
                                    minus aut rerum. Perspiciatis iusto
                                    mollitia iste minima soluta id.
                                  </p>
                                  <p>
                                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue <a href="#">maecenas</a> risus nulla ultrices congue nunc tortor. Eu leo risus porta integer suspendisse sed sit ligula elit.
                                  </p>
                                  <ol role="list">
                                    <li>
                                      Integer varius imperdiet sed interdum
                                      felis cras in nec nunc.
                                    </li>
                                    <li>
                                      Quam malesuada odio ut sit egestas.
                                      Elementum at porta vitae.
                                    </li>
                                  </ol>
                                  <p>
                                    Amet, eu nulla id molestie quis tortor.
                                    Auctor erat justo, sed pellentesque
                                    scelerisque interdum blandit lectus. Nec
                                    viverra amet ac facilisis vestibulum.
                                    Vestibulum purus nibh ac ultricies congue.
                                  </p>
                                </div>
                                <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                                  <p>
                                    Erat pellentesque dictumst ligula
                                    porttitor risus eget et eget. Ultricies
                                    tellus felis id dignissim eget. Est augue
                                    maecenas risus nulla ultrices congue nunc
                                    tortor.
                                  </p>
                                  <p>
                                    Eu leo risus porta integer suspendisse sed
                                    sit ligula elit. Elit egestas lacinia
                                    sagittis pellentesque neque dignissim
                                    vulputate sodales. Diam sed mauris felis
                                    risus, ultricies mauris netus tincidunt.
                                    Mauris sit eu ac tellus nibh non eget sed
                                    accumsan. Viverra ac sed venenatis
                                    pulvinar elit. Cras diam quis tincidunt
                                    lectus. Non mi vitae, scelerisque felis
                                    nisi, netus amet nisl.
                                  </p>
                                  <p>
                                    Eu eu mauris bibendum scelerisque
                                    adipiscing et. Justo, elementum
                                    consectetur morbi eros, posuere ipsum
                                    tortor. Eget cursus massa sed velit
                                    feugiat sed ut. Faucibus eros mauris morbi
                                    aliquam nullam. Scelerisque elementum sit
                                    magna ullamcorper dignissim pretium.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </main>
            {/* Third tab */}
              <main className={openTab === 3 ? "block min-w-0 flex-1  xl:flex" : "hidden"}>
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded">
                  <div className="px-4  flex-auto">
                    <div className="tab-content tab-space ">
                      <div className="overflow-hidden  px-4 sm:px-6 lg:px-8 ">
                        <div className="mx-auto max-w-max lg:max-w-7xl">
                          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                            <div className="max-w-prose text-base lg:max-w-none">
                              <h2 className="font-semibold leading-6 text-indigo-600">
                                Transactions
                              </h2>
                              <div className="h-96">
                                <Image src={"/xr.jpeg"} className="object-cover" layout="fill" />
                              </div>
                              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                A better way to send money
                              </p>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                              <defs>
                                <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                            </svg>
                            <svg className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                              <defs>
                                <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                            </svg>
                            <div className="relative md:bg-white md:p-6">
                              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                                  <p>
                                    Ultrices ultricies a in odio consequat
                                    egestas rutrum. Ut vitae aliquam in ipsum.
                                    Duis nullam placerat cursus risus ultrices
                                    nisi, vitae tellus in. Qui non fugiat aut
                                    minus aut rerum. Perspiciatis iusto
                                    mollitia iste minima soluta id.
                                  </p>
                                  <p>
                                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue <a href="#">maecenas</a> risus nulla ultrices congue nunc tortor. Eu leo risus porta integer suspendisse sed sit ligula elit.
                                  </p>
                                  <ol role="list">
                                    <li>
                                      Integer varius imperdiet sed interdum
                                      felis cras in nec nunc.
                                    </li>
                                    <li>
                                      Quam malesuada odio ut sit egestas.
                                      Elementum at porta vitae.
                                    </li>
                                  </ol>
                                  <p>
                                    Amet, eu nulla id molestie quis tortor.
                                    Auctor erat justo, sed pellentesque
                                    scelerisque interdum blandit lectus. Nec
                                    viverra amet ac facilisis vestibulum.
                                    Vestibulum purus nibh ac ultricies congue.
                                  </p>
                                </div>
                                <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                                  <p>
                                    Erat pellentesque dictumst ligula
                                    porttitor risus eget et eget. Ultricies
                                    tellus felis id dignissim eget. Est augue
                                    maecenas risus nulla ultrices congue nunc
                                    tortor.
                                  </p>
                                  <p>
                                    Eu leo risus porta integer suspendisse sed
                                    sit ligula elit. Elit egestas lacinia
                                    sagittis pellentesque neque dignissim
                                    vulputate sodales. Diam sed mauris felis
                                    risus, ultricies mauris netus tincidunt.
                                    Mauris sit eu ac tellus nibh non eget sed
                                    accumsan. Viverra ac sed venenatis
                                    pulvinar elit. Cras diam quis tincidunt
                                    lectus. Non mi vitae, scelerisque felis
                                    nisi, netus amet nisl.
                                  </p>
                                  <p>
                                    Eu eu mauris bibendum scelerisque
                                    adipiscing et. Justo, elementum
                                    consectetur morbi eros, posuere ipsum
                                    tortor. Eget cursus massa sed velit
                                    feugiat sed ut. Faucibus eros mauris morbi
                                    aliquam nullam. Scelerisque elementum sit
                                    magna ullamcorper dignissim pretium.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            {/* Fourth tab */}
              <main className={openTab === 4 ? "block min-w-0 flex-1  xl:flex" : "hidden"}>
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded">
                  <div className="px-4  flex-auto">
                    <div className="tab-content tab-space ">
                      <div className="overflow-hidden  px-4 sm:px-6 lg:px-8 ">
                        <div className="mx-auto max-w-max lg:max-w-7xl">
                          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                            <div className="max-w-prose text-base lg:max-w-none">
                              <h2 className="font-semibold leading-6 text-indigo-600">
                                Transactions
                              </h2>
                              <div className="h-96">
                                <Image src={"/preg.jpeg"} className="object-cover" layout="fill" />
                              </div>
                              <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                A better way to send money
                              </p>
                            </div>
                          </div>
                          <div className="relative">
                            <svg className="absolute top-0 right-0 -mt-20 -mr-20 hidden md:block md:[overflow-anchor:none]" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                              <defs>
                                <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width={404} height={384} fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                            </svg>
                            <svg className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block md:[overflow-anchor:none]" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                              <defs>
                                <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                              </defs>
                              <rect width={404} height={384} fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                            </svg>
                            <div className="relative md:bg-white md:p-6">
                              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                <div className="prose prose-lg prose-indigo text-gray-500 lg:max-w-none">
                                  <p>
                                    Ultrices ultricies a in odio consequat
                                    egestas rutrum. Ut vitae aliquam in ipsum.
                                    Duis nullam placerat cursus risus ultrices
                                    nisi, vitae tellus in. Qui non fugiat aut
                                    minus aut rerum. Perspiciatis iusto
                                    mollitia iste minima soluta id.
                                  </p>
                                  <p>
                                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue <a href="#">maecenas</a> risus nulla ultrices congue nunc tortor. Eu leo risus porta integer suspendisse sed sit ligula elit.
                                  </p>
                                  <ol role="list">
                                    <li>
                                      Integer varius imperdiet sed interdum
                                      felis cras in nec nunc.
                                    </li>
                                    <li>
                                      Quam malesuada odio ut sit egestas.
                                      Elementum at porta vitae.
                                    </li>
                                  </ol>
                                  <p>
                                    Amet, eu nulla id molestie quis tortor.
                                    Auctor erat justo, sed pellentesque
                                    scelerisque interdum blandit lectus. Nec
                                    viverra amet ac facilisis vestibulum.
                                    Vestibulum purus nibh ac ultricies congue.
                                  </p>
                                </div>
                                <div className="prose prose-lg prose-indigo mt-6 text-gray-500 lg:mt-0">
                                  <p>
                                    Erat pellentesque dictumst ligula
                                    porttitor risus eget et eget. Ultricies
                                    tellus felis id dignissim eget. Est augue
                                    maecenas risus nulla ultrices congue nunc
                                    tortor.
                                  </p>
                                  <p>
                                    Eu leo risus porta integer suspendisse sed
                                    sit ligula elit. Elit egestas lacinia
                                    sagittis pellentesque neque dignissim
                                    vulputate sodales. Diam sed mauris felis
                                    risus, ultricies mauris netus tincidunt.
                                    Mauris sit eu ac tellus nibh non eget sed
                                    accumsan. Viverra ac sed venenatis
                                    pulvinar elit. Cras diam quis tincidunt
                                    lectus. Non mi vitae, scelerisque felis
                                    nisi, netus amet nisl.
                                  </p>
                                  <p>
                                    Eu eu mauris bibendum scelerisque
                                    adipiscing et. Justo, elementum
                                    consectetur morbi eros, posuere ipsum
                                    tortor. Eget cursus massa sed velit
                                    feugiat sed ut. Faucibus eros mauris morbi
                                    aliquam nullam. Scelerisque elementum sit
                                    magna ullamcorper dignissim pretium.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <aside className="hidden xl:order-first sticky   top-0 xl:block xl:flex-shrink-0">
                <div className="relative px-4  flex h-auto w-64 flex-col border-r shadow-xl border-gray-200 bg-gray-100">
                  <nav className="space-y-1" aria-label="Sidebar">
                    <div className="py-3">
                      <div className="relative py-3 flex items-start">
                        <div className="flex h-5 items-center">
                          <input onClick={e => {
                              e.preventDefault();
                              setOpenTab(1);
                            }} checked={current === 1 ? checked : false} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">
                            DIAGNOSTIC IMAGINE
                          </label>
                        </div>
                      </div>
                      <div className="relative py-3 flex items-start">
                        <div className="flex h-5 items-center">
                          <input checked={current === 2 ? checked : false} onClick={e => {
                              e.preventDefault();
                              setOpenTab(2);
                            }} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">
                            ULTRASOUND DIAGNOSTICS
                          </label>
                        </div>
                      </div>
                      <div className="relative py-3 flex items-start">
                        <div className="flex h-5 items-center">
                          <input checked={current === 3 ? checked : false} onClick={e => {
                              e.preventDefault();
                              setOpenTab(3);
                            }} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">
                            X-RAY DIAGNOSTICS
                          </label>
                        </div>
                      </div>
                      
                      <div className="relative py-3 flex items-start">
                        <div className="flex h-5 items-center">
                          <input checked={current === 4 ? checked : false} onClick={e => {
                              e.preventDefault();
                              setOpenTab(4);
                            }} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="comments" className="font-medium text-gray-700">
                            PREGANANCY SERVICES
                          </label>
                        </div>
                      </div>
                      {/* <SmallTitle label={"All Categories"} /> */}
                      {/* {["DIAGNOSTIC IMAGINE", "ULTRASOUND DIAGNOSTICS", "X-RAY DIAGNOSTICS", "PEDIATRICS", "LABORATORY SERVICES", "PREGANANCY SERVICES"].map(
                        item =>
                          <div
                            key={item}
                            className="relative py-3 flex items-start">
                            <div className="flex h-5 items-center">
                              <input
                                checked={activeFilter === item ? checked : false}
                                onClick={() => handleWorkFilter(item)}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-700">
                                {item}
                              </label>
                            </div>
                          </div>
                      )} */}
                    </div>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>;
}
