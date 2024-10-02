import React from 'react'
import BlurFade from "@/components/magicui/blur-fade";

const Home = () => {
    return (
        <>
            <section className='py-10'>
                <div className="container">


                    <section id="header">
                        <BlurFade delay={0.25} inView>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Manas Khandelwal 👋
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.25 * 2} inView>
                            <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
                                Nice to meet you
                            </span>
                        </BlurFade>
                    </section>


                    
                </div>
            </section>
        </>
    )
}

export default Home
