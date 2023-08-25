"use client";
import { getProjectByUser, getUserProfile } from '@/lib/contract'
import ProfilePage from '@/components/ProfilePage'
import { UserProfile, ChainIdType} from '@/common.types';
import { useProvider } from 'wagmi';
import { useEffect,useState } from 'react';

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
        <p className="no-result-text">Failed to fetch user info{params.id}</p>
    )

    return <ProfilePage user={user} />
}

export default UserProfilePage
