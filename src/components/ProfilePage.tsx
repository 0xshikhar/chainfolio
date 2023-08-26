import { ProjectInterface, UserProfile } from '@/common.types'
import Image from 'next/image'

import Link from 'next/link'
import Button from "./Button";
import ProjectCard from './ProjectCard';
import { convertBigNumber } from '@/lib/contract'
import { AiFillMail } from 'react-icons/ai';


const ProfilePage = ({ user, userProfile, id }: any) => (
    <section className='flexCenter flex-col max-w-10xl w-full mx-auto paddings bg-gradient-to-r from-yellow-200 via-green-200 to-green-300'>
        <section className="flexBetween max-lg:flex-col gap-10 w-full">
            <div className='flex items-start flex-col w-full'>
                <div>
                    <Image src='/images/userProfile.webp' width={100} height={100} className="rounded-full bg-white" alt="user image" />
                </div>
                <p className="text-4xl font-bold mt-10">{userProfile?.name}</p>
                <p className="text-sm">{id}</p>
                <p className="md:text-5xl text-3xl font-extrabold md:mt-10 mt-5 max-w-lg">I’m Software Engineer 👋</p>
                <div className='flex flex-col py-5'>
                    <div className='flex'>
                        <p className="text-sm font-bold">Linkedin: </p>
                        <p className="text-sm ">{userProfile?.linkedinUrl}</p>
                    </div>
                    <div className='flex'>
                        <p className="text-sm font-bold">Github: </p>
                        <p className="text-sm ">{userProfile?.githubUrl}</p>
                    </div>
                </div>

                <div className="flex gap-3 w-full flex-wrap">
                    <Button
                        title="Follow"
                        leftIcon="/images/plus-round.svg"
                        bgColor="bg-light-white-400 !w-max"
                        textColor="text-black-100"
                    />
                    <Link href={`mailto:${user?.email}`}>
                        <Button title="Hire Me"
                            leftIcon="/images/email.svg"
                            bgColor="bg-light-white-400 !w-max"
                            textColor="text-black-100"
                        />
                    </Link>
                </div>
            </div>

            {user?.[0].imageUrl ? (
                <Image
                    src={user?.[0].imageUrl}
                    alt="project image"
                    width={739}
                    height={554}
                    className='rounded-xl object-contain'
                />
            ) : (
                <Image
                    src="/image/profile-post.png"
                    width={739}
                    height={554}
                    alt="project image"
                    className='rounded-xl'
                />
            )}
        </section>

        <section className="flexStart flex-col lg:mt-12 mt-8 w-full">
            <p className="w-full text-left text-lg font-semibold">Recent Work</p>

            <div className="profile_projects">
                {user?.map((node: any) => {
                    const projectId = convertBigNumber(node.projectId._hex);
                    return (
                        <ProjectCard
                            key={projectId}
                            id={String(projectId)}
                            image={node?.imageUrl}
                            title={node?.projectName}
                            githubUrl={node?.githubUrl}
                            category={node?.category}
                            tagline={node?.tagline}
                            address={node?.projectOnwer}
                        />
                    );
                })}
            </div>
        </section>
    </section>
)

export default ProfilePage