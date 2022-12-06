import { ChevronRightIcon, TrophyIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Excellence Awards 2020",
    description:
      "We went above and beyond the expectations of their peers or industry.",
    icon: TrophyIcon
  },
  {
    name: "Guardian of Excellence Awards 2021",
    description: "We provided outstanding patient experience",
    icon: TrophyIcon
  },
  {
    name: "The Best Diagnostics Award",
    description:
      "We made the most significant contribution to the diagnosis and treatment of medical conditions.",
    icon: TrophyIcon
  }
];

import Image from "next/legacy/image";
import React from "react";
// import aboutBg from "../public/aboutBg.jpeg";
// import md from "../public/md.png";
// export default function About() {
//   return (
//     <main>
//       <div className="bg-cyan-700 pt-20 ">
//         <div className="mx-auto max-w-7xl pt-48 lg:pt-16 lg:px-24">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-8">
//             <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
//               <div className="lg:py-24">
//                 <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
//                   <span className="block">We Care About You</span>
//                 </h1>
//                 <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//                   We provide a wide range of health services from Plastic
//                   Surgery to All Aesthetic Operations, Dental Aesthetics and
//                   Hair Transplantation.<br />
//                   We provide high standards of health services with our long
//                   years of experience. By adopting the principle of providing
//                   health services at the most affordable costs,
//                 </p>
//               </div>
//             </div>
//             <div className="mt-12 xl:ml-28 hidden lg:block    sm:-mb-48 lg:relative lg:m-0">
//               <div className="px-4 sm:px-6  lg:px-0">
//                 <Image
//                   layout="intrinsic"
//                   width={200}
//                   quality={100}
//                   height={75}
//                   className="w-full   lg:inset-y-0 inset-y-0 right-0 lg:left-0 lg:h-full lg:w-auto "
//                   src={md}
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* More main page content here... */}
//     </main>
//   );
// }
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

const supportLinks = [
  {
    name: "Vision",
    href: "#",
    description:
      "Our hospital will be a beacon of hope, healing, and well-being for our community.",
    icon: PhoneIcon
  },
  {
    name: "Mission Statement",
    href: "#",
    description:
      "Our mission is to provide exceptional care to all of our patients, and to create a supportive and compassionate environment where all are treated with dignity and respect. We strive to provide comprehensive, high-quality services to promote the health and well-being of our community.",
    icon: LifebuoyIcon
  }
  // {
  //   name: "Values",
  //   href: "#",
  //   description: `1. Patient-centered care\n2. Respect\n  \n3. Quality\n4. Safety\n5. Professionalism\n6. Compassion\n7. Integrity`,
  //   icon: NewspaperIcon
  // }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32 pt-32">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src="/bg.avif"
            alt="backgroundImage"
            layout="fill"
            objectFit="cover"
            quality={
              100 // layout="responsive"
            }
          />
          <div
            className="absolute inset-0 bg-cyan-900 lg:bg-cyan-900 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Who We Are
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-200">
            We are a team of dedicated medical professionals providing
            exceptional care and service to our patients. Our team consists of
            nurses, doctors, specialists, healthcare assistants, and
            administrative staff. We strive to provide our patients with the
            best possible care and service, while also respecting their rights
            and providing them with the best possible experience.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading">
        <h2 className="sr-only" id="contact-heading">
          Who We Are
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map(link =>
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-6">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-cyan-600 p-5 shadow-lg">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          )}
          <div className="flex flex-col rounded-2xl bg-white shadow-xl">
            <div className="relative flex-1 px-6 pt-16 pb-8 md:px-6">
              <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-cyan-600 p-5 shadow-lg">
                <NewspaperIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Values</h3>
              <ol type="1" className="mt-4 text-base text-gray-500">
                <li>Patient-centered Care</li>
                <li>Respect</li>
                <li>Quality</li>
                <li>Safety</li>
                <li>Professionalism</li>
                {/* 1. Patient-centered care\n2. Respect\n \n3. Quality\n4.
                Safety\n5. Professionalism\n6. Compassion\n7. Integrity */}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <Image
                  className="object-cover lg:h-full lg:w-full"
                  src="/profile1.jpeg"
                  alt="Medical Director"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-base font-medium text-white">
                    As the medical director of this organization, I am so
                    pleased to welcome you to Medina Diagnostic Center. Our
                    mission is to provide quality healthcare to our patients and
                    their families, and I am confident that with the expertise
                    and dedication of our medical staff, we will be able to do
                    just that. We are very fortunate to have a team of highly
                    trained and experienced professionals who are committed to
                    providing the best care possible. Thank you for joining us
                    today and for helping us to make this a reality.
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">
                    Dr. Whitney Francis
                  </p>
                  <p className="text-base font-medium text-cyan-100">
                    CEO at Medina Diagnostic Center
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-indigo-600">
            Accomplishments
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Achievements
          </p>
          <p className="mx-auto mt-5 max-w-prose text-base text-gray-500">
            We have been able to provide quality care for our patients,
            improving patient satisfaction and safety, reducing costs, and
            improving patient outcomes. We've also been able to reduce
            environmental footprint and improve the health of our community by
            providing preventative care and educational programs.
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(feature =>
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-cyan-500 p-3 shadow-lg">
                          <feature.icon
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
