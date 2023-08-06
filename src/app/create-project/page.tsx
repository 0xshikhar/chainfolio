"use client"
import React, { useEffect } from 'react'
import Modal from '@/components/Modal'
import ProjectForm from '@/components/ProjectForm'
import { useAccount } from 'wagmi'
import { redirect } from 'next/navigation'


const CreateProject = () => {
    const { address, isConnected } = useAccount()

    if (!isConnected) redirect('/')

    return (
        <div className='min-h-[80%]'>
            <h1>Create Project</h1>
            <ProjectForm type="create" address={String(address)} />
        </div>
    )
}

export default CreateProject