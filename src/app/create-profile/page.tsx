"use client"

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "@/components/Skeleton/Skeleton";
import { useProvider, useAccount, useEnsName } from "wagmi";
import { fetchEnsName } from "@wagmi/core";
import styles from "@/styles/Profile.module.css";
import randomColor from "@/lib/randomColor";
import UserForm from "@/components/UserForm";

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
];

export default function CreateProfile() {
    const router = useRouter();
    const { address, isConnected } = useAccount()
    const provider = useProvider();
    console.log("provider", provider._network.chainId)
    const [ensNameInfo, setEnsNameInfo] = useState() as any

    useEffect(() => {
        async function fetchData() {

            const ensName = await fetchEnsName({
                address: `${address}` as any,
                chainId: 1,
            })
            console.log("ensName", ensName)
            setEnsNameInfo(ensName)
        }
        if (isConnected) {
            fetchData()
        }
    }, [address])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`https://explorer.testnet.mantle.xyz/api?module=account&action=tokenlist&address=${router.query.address}`);
    //         const jsonData = await response.json();
    //         if (!response.ok) {
    //             throw new Error("Network response was not ok");
    //         }
    //         console.log("JSON DATA", jsonData)
    //         setData(jsonData);
    //     };
    //     fetchData();
    // }, [address]);

    return (
        <div className="pt-4 h-full text-black bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
            <div className="px-6 pt-4">
                <div
                    className={styles.coverImage}
                    style={{
                        background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
                    }}
                />
                {/* <div
                    className={styles.profilePicture}
                    style={{
                        background: `linear-gradient(90deg, ${randomColor3}, ${randomColor4})`,
                    }}
                /> */}
                <div className={styles.profilePicture}>
                    <Image src='/images/userProfile.webp' width={120} height={120} className="rounded-full bg-white" alt="user image" />
                </div>
                <h1 className={styles.profileName}>
                    <div>0xshikhar.eth</div>
                    {address}
                </h1>
            </div>
            <div className="mx-10 pb-9">
                <UserForm type="create" address={String(address)} />

            </div>
        </div>
    );
}