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
                                Hi, I&apos;m Manas Khandelwal, a passionate frontend developer with a focus on creating scalable, responsive, and user-friendly web applications. With a strong foundation in technologies like Angular, React, TypeScript, and Bootstrap, I enjoy building dynamic web experiences that balance both form and function.
                            </p>
                            <p className='para'>
                                I began my journey in web development with a keen interest in crafting clean, intuitive interfaces. Over the past year, I’ve had the opportunity to work on various projects, from e-commerce platforms to social media applications, using modern frameworks and technologies. These experiences have allowed me to optimize web performance, streamline user interfaces, and contribute to cross-functional teams.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className='w-100 flex justify-center' >
                                <CustomIconCloud />
                            </div>
                        </div>
                    </div>
                    <div className='my-3'>
                        {skills.map((skill, index) => (
                            <Badge className='px-4 md:me-2 me-4 md:mb-2 mb-3 text-[12px] font-semibold capitalize' key={index}>{skill}</Badge>
                        ))}
                    </div>
                    <div className=' md:text-start text-justify mb-8'>
                        <p className='para'>
                            I’m always excited to learn new technologies and improve my craft. Recently, I’ve been delving into Next.js and Tailwind CSS, exploring how these tools can further enhance the performance and aesthetics of my projects. Whether working with a team or independently, I’m committed to delivering high-quality code that solves real-world problems.
                        </p>
                        <p className='para'>
                            When I’m not coding, I enjoy staying up-to-date with emerging trends in web development, exploring blockchain technology, and competing in hackathons. I believe in continuous learning and growing through challenges, which has helped me develop as both a developer and problem-solver.
                        </p>
                        <p className='para'>
                            Let’s connect and build something incredible together!
                        </p>
                        <Button className='px-6 py-5 group'>
                            <a rel='nofollow' className='flex align-middle text-[15px]' target='_blank' href="https://www.linkedin.com/in/manaskh">Connect with me <ArrowTopRightIcon width={18} height={18} className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1 ' /></a>
                        </Button>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default page