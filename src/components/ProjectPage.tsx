import React from 'react'
import Image from "next/image"
import Link from "next/link"

const ProjectPage = ({ project }: any) => {
    console.log("project page", project.projectName, project.projectOnwer, project.category, project.description, project.gitUrl, project.demoUrl, project.imageUrl)
    return (
        <div>
            <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full">
                <div className="flex-1 flex items-start gap-5 w-full max-xs:flex-col">
                    <Link href={`/profile/${project?.projectOnwer}`}>
                        <Image
                            src='/images/user.png'
                            width={50}
                            height={50}
                            alt="profile"
                            className="rounded-full"
                        />
                    </Link>

                    <div className="flex-1 flexStart flex-col gap-1">
                        <p className="self-start text-lg font-semibold">
                            {project?.projectName}
                        </p>
                        <div className="user-info">
                            <Link href={`/profile/${project?.projectOnwer}`}>
                                {project?.projectOnwer}
                            </Link>
                            <Image src="/images/dot.svg" width={4} height={4} alt="dot" />
                            <Link href={`/?category=${project.category}`} className="text-primary-purple font-semibold">
                                {project?.category}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* call user detail function to show user details */}
                {
                    // session?.user?.email === project?.createdBy?.email && (
                    //     <div className="flex justify-end items-center gap-2">
                    //         {/* <ProjectActions projectId={project?.id} /> */}
                    //     </div>
                    // )
                }
            </section>

            <section className="mt-14">
                {(project.imageUrl).startsWith("http") ?
                    (<Image
                        src={`${project?.imageUrl}`}
                        className="object-cover rounded-2xl"
                        width={1064}
                        height={798}
                        alt="poster"
                    />)
                    :
                    (<Image
                        src='/images/project.jpg'
                        className="object-cover rounded-2xl"
                        width={1064}
                        height={798}
                        alt="poster" />
                    )
                }
            </section>

            <section className="flexCenter flex-col mt-20">
                <p className="max-w-5xl text-xl font-normal">
                    {project?.description}
                </p>

                <div className="flex flex-wrap mt-5 gap-5">
                    <Link href={project?.gitUrl} target="_blank" rel="noreferrer" className="flexCenter gap-2 tex-sm font-medium text-primary-purple">
                        🖥 <span className="underline">Github</span>
                    </Link>
                    <Image src="/images/dot.svg" width={4} height={4} alt="dot" />
                    <Link href={project?.demoUrl} target="_blank" rel="noreferrer" className="flexCenter gap-2 tex-sm font-medium text-primary-purple">
                        🚀 <span className="underline">Live Site</span>
                    </Link>
                </div>
            </section>

            <section className="flexCenter w-full gap-8 mt-28">
                <span className="w-full h-0.5 bg-light-white-200" />
                {/* <Link href={renderLink()} className="min-w-[82px] h-[82px]">
                    <Image
                        src={project?.createdBy?.avatarUrl}
                        className="rounded-full"
                        width={82}
                        height={82}
                        alt="profile image"
                    />
                </Link> */}
                <span className="w-full h-0.5 bg-light-white-200" />
            </section>

            {/* <RelatedProjects userId={project?.createdBy?.id} projectId={project?.id} /> */}
        </div>
    )
}

export default ProjectPage