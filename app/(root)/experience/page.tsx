import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image';
import experiences from '@/assets/json/Experiences.json'
import { cn } from '@/lib/utils';
export const metadata: Metadata = {
    title: "Experience",
    description: "Experience - Manas Khandelwal",
};
function page() {
    return (
        <>
            <section className='py-10'>
                <div className="container">
                    <div className='text-center'>
                        <h1 className='text-4xl font-albert-sans font-bold'>Experience</h1>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container">
                    <div className="border rounded  dark:border-slate-700 border-slate-400 md:px-10 md:py-3 p-4 mb-5">
                        {experiences.map((exp, index) => (
                            <div key={index} className={cn("md:py-7 py-4", experiences.length > index +1 ? 'border-b':'')}>
                                <div className="flex justify-between mb-2 items-start">
                                    <div className="flex gap-3 w-full items-center">
                                        <div>
                                            <Image className="border border-slate-500 rounded-sm aspect-square" src={exp.companyLogo} alt={`${exp.company} logo`} width={60} height={60} 
                                            />
                                        </div>
                                        <div className="flex justify-between w-full max-md:flex-col">
                                            <div>
                                                <h2 className="font-bold md:text-xl text-md">{exp.jobTitle}</h2>
                                                <p className="text-sm font-medium">{`${exp.company} – ${exp.location}`}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold">{exp.period}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        {exp.responsibilities.map((e, id) => (
                                            <li key={id} className="mb-2">{e}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page