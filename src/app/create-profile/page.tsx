"use client"

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "@/components/Skeleton/Skeleton";
import { useProvider, useAccount, useEnsName } from "wagmi";
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
        <div className="pt-4 h-full text-white bg-black">
            <div className="px-6 pt-4">
                <div
                    className={styles.coverImage}
                    style={{
                        background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
                    }}
                />
                <div
                    className={styles.profilePicture}
                    style={{
                        background: `linear-gradient(90deg, ${randomColor3}, ${randomColor4})`,
                    }}
                />
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