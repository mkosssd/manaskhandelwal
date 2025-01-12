import projects from '@/assets/json/projects.json';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects - Manas Khandelwal",
};

function page() {
    return (
        <>
            <section className='py-10'>
                <div className="container">
                    <div className='max-md:text-center'>
                        <h1 className='text-4xl font-albert-sans font-bold'>Projects</h1>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container">
                    <div className="flex flex-wrap -mx-3">
                        {projects.map((project, index) => (
                            <div className="w-full md:w-1/3 px-3" key={index}>
                                <Image className='rounded ' src={project.projectImage} width={300} height={150} alt={project.projectName}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page