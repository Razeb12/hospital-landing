import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const departments = [
    'Outpatient department',
    'Inpatient department',
    'Emergency department',
    'Laboratory department',
    'Pharmacy department',
    'Radiology department',
    'Dental department',
    'Nursing department',
]

const imgs = [
    "https://media.istockphoto.com/id/178382075/photo/hospital-surgery-corridor.jpg?s=612x612&w=0&k=20&c=MmEVxj-kHOqaRwTNUBrmq_Icv2VFxTpSA5G1UmbIyKs=",
    "https://media.istockphoto.com/id/493216413/photo/smiling-doctor-looking-at-patient-in-hospital-ward.jpg?s=612x612&w=0&k=20&c=vpxtDiaS46tvcpC6fLg0tVCGCtxUzOF3tGB9j4jBTJg=",
    "https://media.istockphoto.com/id/1282880747/photo/digitally-rendered-image-of-an-empty-hospital-intensive-care-unit.jpg?s=612x612&w=0&k=20&c=cPNnzfgfOvcVMxaj-gWzHnbVLvJT5G3LNIWTKXU7tXg=",
    "https://media.istockphoto.com/id/1182436133/photo/young-scientist-working-in-the-laboratory.jpg?s=612x612&w=0&k=20&c=vKAeXFa6tSAgzcUPS9F7sQdJafcC65HBwQ1k9wgHJnE=",
    "https://media.istockphoto.com/id/1267162531/photo/young-female-doctor-doing-a-medical-supplies-inventory-in-a-hospital-closet.jpg?s=612x612&w=0&k=20&c=soBnVEQY__ehdxlIDBjJ3oqt9C2yE5p_4rnPHpKk6BU=",
    "https://media.istockphoto.com/id/1180488192/photo/males-doctor-examining-brain-mr.jpg?s=612x612&w=0&k=20&c=XSLzn15Rn2LNQ_oG-nxSdcvIjbjT94tdGEdUnbT7wTU=",
    "https://media.istockphoto.com/id/1222938816/photo/highly-qualified-young-dentist-posing-at-modern-clinic.jpg?s=612x612&w=0&k=20&c=FHEtAmsvvqZnXMlmNLrbYKTqfSpm05ybvET8Cxm4z3U=",
    "https://media.istockphoto.com/id/1204177269/photo/portrait-of-multi-cultural-medical-team-standing-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=PR3ulMitMJnrYRpe12C95HWnLWvU15NP6QcLtxEQYJQ=",
]

export default function Department() {
    const [tab, setTab] = useState(1)

    return (
        <main>
            <Head>
                <title>Departments</title>
            </Head>
            <section className="relative bg-sky-800 pb-24 pt-32 mt-20 sm:pb-32">
                <div className="absolute inset-0">
                    <img className="h-full w-full object-cover" src={imgs[tab - 1]} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-l from-sky-800 to-cyan-800 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative mx-auto mt-24 max-w-md px-4 sm:mt-32 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {departments[tab - 1]}
                    </h1>
                    <p className="mt-6 max-w-3xl text-xl text-white">
                        You can contact us any way that is convenient for you. We are
                        available 24/7 via fax or email. You can also use a quick
                        contact form below or visit our medical center personally. We
                        would be happy to answer your questions.
                    </p>
                </div>
            </section>
            <section className="relative p-4 xl:p-20 border">
                <div className="flex flex-col xl:flex-row xl:gap-20 gap-0 w-full">
                    <ul className="shadow-md rounded-md p-6 border w-full xl:w-3/4 border-gray-200 flex flex-col space-y-2 h-fit">
                        {departments.map((department, index) => (
                            <li
                                onClick={(e) => setTab(index + 1)}
                                key={index}
                                className={"flex items-center justify-between py-4 cursor-pointer pl-2 hover:bg-cyan-700 hover:text-white transition-all duration-300 ease-in-out " +
                                    (tab === index + 1 ? "border-cyan-700 border-l-4 hover:bg-transparent hover:text-black" : "")
                                }>
                                {department}
                            </li>
                        ))}
                    </ul>
                    <div className="flex-auto space-y-4">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold tracking-tight sm:text-3xl">
                                {departments[tab - 1]}
                            </h2>
                            <p className="mt-3 text-base text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quos blanditiis tenetur
                            </p>
                        </div>
                        <div className="flex xl:flex-row flex-col gap-4">
                            <img
                                src={imgs[tab - 1]}
                                alt="Img"
                                className="object-contain h-fit rounded-sm w-1/2"
                            />
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col space-y-2">
                                    <h2 className="text-2xl font-bold">{departments[tab - 1]}</h2>
                                    <p className="text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Eligendi corrupti esse velit dolores provident illo voluptas at,
                                        sapiente autem perspiciatis illum impedit tempora ratione modi hic.
                                        Eligendi corrupti esse velit dolores provident illo voluptas at,
                                        sapiente autem perspiciatis illum impedit tempora ratione modi hic.
                                        Eligendi corrupti esse velit dolores provident illo voluptas at,
                                        sapiente autem perspiciatis illum impedit tempora ratione modi hic.
                                        Laudantium accusantium rem laboriosam.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl text-center xl:text-start xl:text-2xl font-bold tracking-tight sm:text-3xl">
                                Our Team
                            </h2>
                            <div className="flex flex-col xl:space-x-12 xl:flex-row mt-6 gap-6 xl:gap-0">
                                <div className="flex flex-col space-y-2 items-center xl:items-start">
                                    <img
                                        src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Img"
                                        className="xl:w-20 xl:h-20 w-56 h-56 object-cover rounded-full"
                                    />
                                    <div className="flex flex-col space-y-2">
                                        <div>
                                            <h2 className="text-lg font-medium">Dr. John Doe</h2>
                                            <p className="text-gray-500 text-xs">Cardiologist</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-2 text-cyan-700">
                                        <Link href='#'>
                                            <span className="sr-only">Twitter</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </Link>
                                        <Link href='#'>
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 items-center xl:items-start">
                                    <img
                                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Img"
                                        className="xl:w-20 xl:h-20 w-56 h-56 object-cover rounded-full"
                                    />
                                    <div className="flex flex-col space-y-2">
                                        <div>
                                            <h2 className="text-lg font-medium">Dr. Andrew Paul</h2>
                                            <p className="text-xs">Cardiologist</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-2 text-cyan-700">
                                        <Link href='#'>
                                            <span className="sr-only">Twitter</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </Link>
                                        <Link href='#'>
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-2 items-center xl:items-start">
                                    <img
                                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Img"
                                        className="xl:w-20 xl:h-20 w-56 h-56 object-cover rounded-full"
                                    />
                                    <div className="flex flex-col space-y-2">
                                        <div>
                                            <h2 className="text-lg font-medium">Dr. Agnes Peters</h2>
                                            <p className="text-xs text-gray-500">Opticain</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-2 text-cyan-700">
                                        <Link href='#'>
                                            <span className="sr-only">Twitter</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </Link>
                                        <Link href='#'>
                                            <span className="sr-only">LinkedIn</span>
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}