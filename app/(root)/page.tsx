import React from 'react'
import BlurFade from "@/components/ui/blur-fade";
import Image from 'next/image';

const Home = () => {
    return (
        <>
            <section className='py-10 '>
                <div className="container px-3">
                    <div className="flex justify-between align-middle max-md:flex-col">
                        <div className='max-md:order-2 max-md:text-center'>
                            <BlurFade delay={0.25} inView className='md:mb-3'>
                                <h2 className="md:text-3xl text-xl font-bold font-albert-sans tracking-tighter ">
                                    Hey, I am <span className=' sm:text-5xl xl:text-6xl/none text-4xl block text-[#937ee9]'>Manas Khandelwal </span>
                                </h2>

                            </BlurFade>
                            <BlurFade delay={0.25 * 2} className='mb-2' inView>
                                <span className="md:text-2xl text-lg text-pretty tracking-tighter ">
                                    Frontend Developer Crafting Intuitive Web Applications
                                </span>
                            </BlurFade>
                            <BlurFade delay={0.25 * 2.5} inView>
                                <span className="md:text-lg text-sm text-pretty tracking-tighter leading-snug ">
                                Associate Software Engineer with experience in Angular, React, and modern UI frameworks. Passionate about building dynamic, user-friendly web applications.</span>
                            </BlurFade>
                        </div>
                        <BlurFade delay={0.25 * 1.5} inView className='max-md:order-1 max-md:mb-3 max-md:flex max-md:justify-center'>
                            <Image width={200} height={200} className='rounded-[50%]' alt='Manas Khandelwal' src='https://cloud.appwrite.io/v1/storage/buckets/66fee2f7002f815b7690/files/66fee35900198be05b99/view?project=66fee2e7001c9368dff3&project=66fee2e7001c9368dff3&mode=admin'></Image>
                        </BlurFade>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
