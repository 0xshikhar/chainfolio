"use client";
import { getProjectByUser, getUserProfile } from '@/lib/contract'
import ProfilePage from '@/components/ProfilePage'
import { UserProfile, ChainIdType } from '@/common.types';
import { useProvider } from 'wagmi';
import { useEffect, useState } from 'react';

type Props = {
    params: {
        id: string,
    },
}

const UserProfilePage = ({ params }: Props) => {
    const provider = useProvider();
    const [user, setUser] = useState() as any
    const [userProfile, setUserProfile] = useState() as any
    console.log("user", user, "params", params)
    console.log("userProfile", user?.[0].imageUrl)

    useEffect(() => {
        async function fetchData() {
            const result = await getProjectByUser(params.id, provider._network.chainId as ChainIdType)
            const data = await getUserProfile(params.id, provider._network.chainId as ChainIdType)
            console.log("result", result)
            console.log("data", data)
            setUser(result)
            setUserProfile(data)
        }
        fetchData()
    }, [provider._network.chainId, params.id])

    if (!user) return (
        <p className="no-result-text">Fetching User info from the blockchain : {params.id}</p>
    )

    return <ProfilePage user={user} userProfile={userProfile} id={params.id} />
}

export default UserProfilePage
