"use client"

import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import FormField from './FormField';
import Button from './Button';
import { categoryFilters } from '@/constants';
import { createNewUser } from '@/lib/contract';
import { FormState, ProjectInterface, SessionInterface, NewUserInterface, ChainIdType, UserFormState } from '@/common.types';
import { MdAdd } from 'react-icons/md';
import { useProvider } from 'wagmi';

type Props = {
    type: string,
    address: string,
    user?: NewUserInterface
}

const UserForm = ({ type, address, user }: Props) => {
    const router = useRouter()
    const provider = useProvider();
    console.log("provider", provider._network.chainId)

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [form, setForm] = useState<UserFormState>({
        name: user?.name || "",
        linkedinUrl: user?.linkedinUrl || "",
        githubUrl: user?.githubUrl || "",

    })

    const handleStateChange = (fieldName: keyof UserFormState, value: string) => {
        setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setSubmitting(true)

        try {
            if (type === "create") {
                await createNewUser(form, provider._network.chainId as ChainIdType, address)

                router.push("/")
            }

            if (type === "edit") {
                // await updateProject(form,  provider._network.chainId, address, user?.id as string)

                router.push("/")
            }

        } catch (error) {
            alert(`Failed to ${type === "create" ? "create" : "edit"} a user. Try again!`);
        } finally {
            setSubmitting(false) // to stop the loading
        }
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flexStart flex-col w-full lg:pt-5 pt-5 gap-10 text-sm max-w-2xl mx-auto">

            <FormField
                title="Title"
                state={form.name}
                placeholder="0xShikhar"
                setState={(value) => handleStateChange('name', value)}
            />

            <FormField
                type="url"
                title="LinkedIn URL"
                state={form.linkedinUrl}
                placeholder="https://linkedin.com/0xchainfolio"
                setState={(value) => handleStateChange('linkedinUrl', value)}
            />

            <FormField
                type="url"
                title="GitHub Account"
                state={form.githubUrl}
                placeholder="https://github.com/chainfolio"
                setState={(value) => handleStateChange('githubUrl', value)}
            />



            <div className="flexStart w-full pb-5">
                {/* <Button
                    title={submitting ? `${type === "create" ? "Creating" : "Editing"}` : `${type === "create" ? "Create" : "Edit"}`}
                    type="submit"
                    leftIcon={submitting ? "" : { MdAdd }}
                    submitting={submitting}
                /> */}
                <button
                    disabled={submitting || false}
                    className={`flexCenter gap-3 px-4 py-3 text-white 
                    ${submitting ? 'bg-black/50' : 'bg-green-200' ? 'bg-green-900' : 'bg-primary-purple'} rounded-xl text-sm font-medium max-md:w-full`}
                >
                    <MdAdd />
                    {submitting ? `${type === "create" ? "Creating" : "Editing"}` : `${type === "create" ? "Create" : "Edit"}`}                </button>
            </div>
        </form>
    )
}

export default UserForm