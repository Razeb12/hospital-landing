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
  return classes.filter(Boolean).join(' ')
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
            <p className="mt-6 max-w-3xl text-xl text-white">
              You can contact us any way that is convenient for you. We are
              available 24/7 via fax or email. You can also use a quick
              contact form below or visit our medical center personally. We
              would be happy to answer your questions.
            </p>
          </div>
        </header>
        {/* Side-by-side grid */}
        <div className="bg-white ">
          <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
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
              </section>
              <section className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="location-heading">
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
        <div className="bg-warm-gray-50">
          <div className="mx-auto max-w-md py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
           
              {/* <div>
                <h2 className="text-3xl font-bold tracking-tight text-warm-gray-900">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-lg text-warm-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
                    customer support
                  </a> team.
                </p>
              </div> */}
               <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
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
                  patient information and other useful stuff, delivered
                  right to your inbox.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input id="email-address" name="email-address" type="email" autoComplete="email" required className="w-full rounded-md border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-700" placeholder="Enter your email" />
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
