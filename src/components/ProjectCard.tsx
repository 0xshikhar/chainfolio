"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import userImage from '../../public/images/user.png'
// import projectImage from '../../public/images/project.jpg'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'

type Props = {
    id: string;
    image: string;
    title: string;
    githubUrl: string;
    tagline: string;
    category: string;
    address: string;
};


const ProjectCard = ({ id, image, title, githubUrl, tagline, category, address }: Props) => {
    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');

    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 10000))
        setRandomViews(String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + 'k'))
    }, []);
    // console.log("title", title, "id", id, "image", image, "githubUrl", githubUrl, "tagline", tagline, "category", category)

    return (
        <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
            <Link href={`/project/${id}`} className="flexCenter group relative w-full h-full">
                {(image.startsWith("http")) ? (
                    <Image
                        src={image}
                        width={414}
                        height={314}
                        className="w-full h-full object-cover rounded-2xl"
                        alt="project image"
                    />
                )
                    : (
                        <Image
                            src='/images/project.jpg'
                            width={414}
                            height={314}
                            className="w-full h-full object-cover rounded-2xl"
                            alt="project image" />
                    )
                }

                <div className="hidden group-hover:flex profile_card-title">
                    <p className="w-full text-white">{title}</p>
                </div>
            </Link>

            <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
                <Link href={`/profile/${address}`}>
                    <div className="flexCenter gap-2">
                        <Image
                            src='/images/user.png'
                            width={24}
                            height={24}
                            className="rounded-full"
                            alt="profile image"
                        />
                    </div>
                </Link>

                <div className="flexCenter gap-3 text-gray-500">
                    <div className="flexCenter gap-2">
                        <AiFillHeart className="text-red-600" size={14} />
                        {/* <Image src="/images/hearth.svg" width={13} height={12} alt="heart" /> */}
                        <p className="text-sm">{randomLikes}</p>
                    </div>
                    <div className="flexCenter gap-2">
                    <AiFillEye className="text-gray-700" size={14} />
                        <p className="text-sm">{randomViews}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
