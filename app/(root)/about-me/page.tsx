import React from 'react'
import { Metadata } from 'next';
import { CustomIconCloud } from '@/components/CustomIconCloud';
export const metadata: Metadata = {
    title: "About Me",
    description: "About Me - Manas Khandelwal",
};
function page() {
    return (
        <section className='py-5'>
            <div className="container">
                <div className='max-md:mb-6'>
                    <h1 className='text-4xl font-albert-sans font-bold'>About Me</h1>
                </div>
                <div className="flex flex-wrap items-center ">
                    <div className="w-full md:w-1/2">
                        <p className='para'>
                            Hi, I&apos;m Manas Khandelwal, a passionate frontend developer with a focus on creating scalable, responsive, and user-friendly web applications. With a strong foundation in technologies like Angular, React, TypeScript, and Bootstrap, I enjoy building dynamic web experiences that balance both form and function.
                        </p>
                        <p className='para'>
                            I began my journey in web development with a keen interest in crafting clean, intuitive interfaces. Over the past year, I’ve had the opportunity to work on various projects, from e-commerce platforms to social media applications, using modern frameworks and technologies. These experiences have allowed me to optimize web performance, streamline user interfaces, and contribute to cross-functional teams.
                        </p>
                        <p className='para'>
                            I’m always excited to learn new technologies and improve my craft. Recently, I’ve been delving into Next.js and Tailwind CSS, exploring how these tools can further enhance the performance and aesthetics of my projects. Whether working with a team or independently, I’m committed to delivering high-quality code that solves real-world problems.
                        </p>
                        <p className='para'>
                            When I’m not coding, I enjoy staying up-to-date with emerging trends in web development, exploring blockchain technology, and competing in hackathons. I believe in continuous learning and growing through challenges, which has helped me develop as both a developer and problem-solver.
                        </p>
                        <p className='para'>
                            Let’s connect and build something incredible together!
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className='w-100 flex justify-center' >
                            <CustomIconCloud />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page