import React from 'react'
import BlurFade from "@/components/ui/blur-fade";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';

const Home = () => {
    return (
        <>
            <section className='py-10 '>
                <div className="container md:px-3 px-4">
                    <div className="flex justify-between align-middle max-md:flex-col">
                        <div className='max-md:order-2 max-md:text-center'>
                            <BlurFade delay={0.25} inView className='md:mb-3'>
                                <h1 className="md:text-3xl text-xl font-bold font-albert-sans tracking-tighter ">
                                    Hey, I am <span className=' sm:text-5xl xl:text-6xl/none text-4xl block text-[#937ee9]'>Manas Khandelwal </span>
                                </h1>

                            </BlurFade>
                            <BlurFade delay={0.25 * 2} className='mb-2' inView>
                                <h2 className="md:text-2xl text-lg text-pretty tracking-tighter ">
                                    Frontend Developer Crafting Intuitive Web & Mobile Applications
                                </h2>
                            </BlurFade>
                            <BlurFade delay={0.25 * 2.5} inView className='mb-12'>
                                <span className="md:text-lg text-sm text-pretty tracking-tighter leading-snug ">
                                    SDE-1 with expertise in React Native, Angular, and frontend development, passionate about building responsive and scalable mobile and web applications with a strong focus on user experience and performance optimization.
                                </span>
                            </BlurFade>
                            <BlurFade delay={0.25 * 2.8} inView className='flex max-md:justify-center'>
                                <Button className='px-6 py-5 group '>
                                    <a rel='nofollow' className='flex align-middle text-[15px]' target='_blank' href="https://www.linkedin.com/in/manaskh">Connect with me <ArrowTopRightIcon width={18} height={18} className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1 ' /></a>
                                </Button>
                                <Button variant='outline' className='px-6 py-5 ml-8 dark:border-white/50 border-slate-700'>
                                    <a target='_blank' className='flex align-middle text-[15px]' href="https://drive.google.com/file/d/1MU7ha8DnVSH2nCbZ5SbFYlQwvPGpag5z/view?usp=sharing">Download my resume</a>
                                </Button>
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
