import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
  // More questions...
];

const contactDetails = [
  {
    name: "Collaborate",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567"
  },
  {
    name: "Press",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567"
  },
  {
    name: "Join our team",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567"
  },
  {
    name: "Say hello",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567"
  }
];
const locations = [
  {
    city: "Los Angeles",
    address: ["4556 Brendan Ferry", "Los Angeles, CA 90210"]
  },
  { city: "New York", address: ["886 Walter Streets", "New York, NY 12345"] },
  { city: "Toronto", address: ["7363 Cynthia Pass", "Toronto, ON N3Y 4H8"] },
  { city: "Chicago", address: ["726 Mavis Island", "Chicago, IL 60601"] }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  return <main>
      <header className="relative bg-sky-800 pb-24 pt-32 mt-20 sm:pb-32">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
          <div className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-800 mix-blend-multiply" aria-hidden="true" />
        </div>

        <div className="relative mx-auto mt-24 max-w-md px-4 sm:mt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white" />
        </div>
      </header>
      <div className="lg:-mt-48 z-20">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 className="sr-only">Contact us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden bg-cyan-700 py-10 px-6 sm:px-10 xl:p-12">
                <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                  <svg className="absolute inset-0 h-full w-full" width={343} height={388} viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fillOpacity=".1" />
                    <defs>
                      <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true">
                  <svg className="absolute inset-0 h-full w-full" width={359} height={339} viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fillOpacity=".1" />
                    <defs>
                      <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true">
                  <svg className="absolute inset-0 h-full w-full" width={160} height={678} viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fillOpacity=".1" />
                    <defs>
                      <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Contact information
                </h3>
                <p className="mt-6 max-w-3xl text-base text-indigo-50">
                  You can contact us any way that is convenient for you. We
                  are available 24/7 via fax or email. You can also use a
                  quick contact form below or visit our medical center
                  personally. We would be happy to answer your questions.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-indigo-50">
                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-indigo-50">
                    <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-indigo-200" aria-hidden="true" />
                    <span className="ml-3">support@workcation.com</span>
                  </dd>
                </dl>
               
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-gray-900">
                  Send us a message
                </h3>
                <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                      First name
                    </label>
                    <div className="mt-1">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                        Phone
                      </label>
                      <span id="phone-optional" className="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" aria-describedby="phone-optional" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                      Subject
                    </label>
                    <div className="mt-1">
                      <input type="text" name="subject" id="subject" className="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                        Message
                      </label>
                      <span id="message-max" className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea maxLength={500} id="message" name="message" rows={4} className="block w-full rounded-md border border-gray-300 border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" aria-describedby="message-max" defaultValue={""} />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-gray-300 border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Side-by-side grid */}
      <div className="bg-white ">
        <div className="mx-auto max-w-md py-12 px-4 sm:max-w-3xl sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="divide-y divide-warm-gray-200">
            {/* <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">
                Get in touch
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                {contactDetails.map(item => <div key={item.name}>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      {item.name}
                    </h3>
                    <dl className="mt-2 text-base text-warm-gray-500">
                      <div>
                        <dt className="sr-only">Email</dt>
                        <dd>
                          {item.email}
                        </dd>
                      </div>
                      <div className="mt-1">
                        <dt className="sr-only">Phone number</dt>
                        <dd>
                          {item.telephone}
                        </dd>
                      </div>
                    </dl>
                  </div>)}
              </div>
            </section> */}
            <section className="mt-16  lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="location-heading">
              <h2 id="location-heading" className="text-2xl font-bold text-warm-gray-900 sm:text-3xl sm:tracking-tight">
                Locations
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                {locations.map(location => <div key={location.city}>
                    <h3 className="text-lg font-medium text-warm-gray-900">
                      {location.city}
                    </h3>
                    <div className="mt-2 space-y-1 text-base text-warm-gray-500">
                      {location.address.map(line => <p key={line}>
                          {line}
                        </p>)}
                    </div>
                  </div>)}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-warm-gray-50 ">
        <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Frequently asked questions
                </h2>
                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                  {faqs.map(faq =>
                    <Disclosure as="div" key={faq.question} className="pt-6">
                      {({ open }) =>
                        <div>
                          <dt className="text-lg">
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                              <span className="font-medium text-gray-900">
                                {faq.question}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-6 w-6 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base text-gray-500">
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </div>}
                    </Disclosure>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative">
        <div className="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="rounded-3xl bg-gradient-to-l from-sky-800 to-cyan-700 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:py-20 lg:px-20">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                Enter your email address to receive up-to-date news, new
                patient information and other useful stuff, delivered right to
                your inbox.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input id="email-address" name="email-address" type="email" autoComplete="email" required className="w-full rounded-md border border-gray-300 border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700" placeholder="Enter your email" />
                <button type="submit" className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-5 py-3 text-base font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-cyan-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-sm text-cyan-100">
                We care about the protection of your data. Read our <a href="#" className="font-medium text-white underline">
                  Privacy Policy.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>;
}
