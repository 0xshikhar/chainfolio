"use client"
import React, { useEffect } from 'react'
// import Modal from '@/components/Modal'
import ProjectForm from '@/components/ProjectForm'
import { useAccount } from 'wagmi'
import { redirect, useRouter } from 'next/navigation'
import { MdClose } from 'react-icons/md'

const CreateProject = () => {
    const router = useRouter();
    const { address, isConnected } = useAccount()

    const onDismiss = () => {
        console.log('dismiss')
        router.push('/')
    }

    console.log('isConnected', isConnected, address)
    if (!isConnected) redirect('/')

    return (
        <div className='min-h-[80%] pt-10 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300'>
            <button onClick={() => onDismiss()} className="absolute flex text-black px-6 py-3 rounded-lg bg-white right-8">
                Close <MdClose className="mt-1 ml-2 font-bold"/>
            </button>
            <div className="bg-gradient-to-r from-gray-500 via-gray-800 to-black bg-clip-text 
                            text-transparent font-bold font-sans text-[60px] text-center">
                Create Your Project
            </div>

            <ProjectForm type="create" address={String(address)} />
        </div>
    )
}

export default CreateProject