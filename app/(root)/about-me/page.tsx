import React from 'react'
import { Metadata } from 'next';
import { CustomIconCloud } from '@/components/CustomIconCloud';
import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import skills from '@/assets/json/skills.json'
import { Badge } from '@/components/ui/badge';
export const metadata: Metadata = {
    title: "About Me",
    description: "About Me - Manas Khandelwal",
};
function page() {
    return (
        <div className='py-8'>
            <section className='max-md:mb-7'>
                <div className="container">
                    <div className='max-md:text-center'>
                        <h1 className='text-4xl font-albert-sans font-bold'>About Me</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="flex flex-wrap items-center ">
                        <div className="w-full md:w-1/2 md:text-start text-justify">
                            <p className='para'>
                                Hi, I&apos;m Manas Khandelwal, a dedicated frontend developer passionate about crafting scalable, responsive, and user-friendly applications. With hands-on experience in technologies like React Native, Angular, React, TypeScript, and Bootstrap, I focus on delivering dynamic solutions that seamlessly balance design and functionality.
                            </p>
                            <p className='para'>
                                My journey in web and mobile development began with a strong interest in building clean, intuitive user interfaces. Over the past year, I’ve contributed to diverse projects, including e-commerce platforms and social media applications, leveraging modern frameworks to optimize performance and enhance user experiences. These experiences have strengthened my ability to collaborate with cross-functional teams and deliver impactful products.
                            </p>

                        </div>
                        <div className="w-full md:w-1/2">
                            <div className='w-100 flex justify-center' >
                                <CustomIconCloud />
                            </div>
                        </div>
                    </div>
                    <div className=' md:text-start text-justify mb-8'>
                        <p className='para'>
                            I’m always eager to explore emerging technologies and refine my development skills. Recently, I’ve been working extensively with React Native, delving deeper into Next.js and Tailwind CSS to optimize the performance and design of my projects. Whether collaborating within a team or handling projects independently, I am dedicated to delivering impactful, high-quality solutions.
                        </p>
                        <p className='para'>
                            Beyond coding, I stay updated on the latest trends in web and mobile development. My passion for continuous learning and problem-solving has fueled my growth as a developer.
                        </p>
                        <p className='para'>
                            Let’s connect and create something exceptional together!
                        </p>

                        <Button className='px-6 py-5 group'>
                            <a rel='nofollow' className='flex align-middle text-[15px]' target='_blank' href="https://www.linkedin.com/in/manaskh">Connect with me <ArrowTopRightIcon width={18} height={18} className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1 ' /></a>
                        </Button>
                    </div>
                    <div className='my-3'>
                        <h2 className='font-bold mb-2 text-xl'>Skills I&apos;ve Got:</h2>
                        {skills.map((skill, index) => (
                            <Badge className='px-4 md:me-2 me-4 md:mb-2 mb-3 text-[12px] font-semibold capitalize' key={index}>{skill}</Badge>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default page