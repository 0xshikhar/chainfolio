"use client"

import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';

import FormField from './FormField';
import Button from './Button';
import CustomMenu from './CustomMenu';
import { categoryFilters } from '@/constants';
// import { updateProject, createNewProject, fetchToken } from '@/lib/actions';
import { createNewProject } from '@/lib/contract';
import { FormState, ProjectInterface, SessionInterface, ChainIdType } from '@/common.types';
import plusImage from '../../public/images/plus.svg'
import { MdAdd } from 'react-icons/md';
import { useProvider } from 'wagmi';

type Props = {
    type: string,
    address: string,
    project?: ProjectInterface
}

const ProjectForm = ({ type, address, project }: Props) => {
    const router = useRouter()
    const provider = useProvider();
    console.log("provider", provider._network.chainId)

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [form, setForm] = useState<FormState>({
        title: project?.title || "",
        tagline: project?.tagline || "",
        description: project?.description || "",
        liveSiteUrl: project?.liveSiteUrl || "",
        githubUrl: project?.githubUrl || "",
        contractUrl: project?.contractUrl || "",
        image: project?.image || "",
        category: project?.category || ""

    })

    const handleStateChange = (fieldName: keyof FormState, value: string) => {
        setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
    };

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];

        if (!file) return;
        if (!file.type.includes('image')) {
            alert('Please upload an image!');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            handleStateChange("image", result)
        };
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setSubmitting(true)

        // using lib actions function
        // const { token } = await fetchToken()
        try {
            if (type === "create") {
                await createNewProject(form, provider._network.chainId as ChainIdType, address)

                router.push("/")
            }

            if (type === "edit") {
                // await updateProject(form,  provider._network.chainId, address, project?.id as string)

                router.push("/")
            }

        } catch (error) {
            alert(`Failed to ${type === "create" ? "create" : "edit"} a project. Try again!`);
        } finally {
            setSubmitting(false) // to stop the loading
        }
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flexStart flex-col w-full lg:pt-5 pt-5 gap-10 text-lg max-w-5xl mx-auto">
            <div className="flexStart form_image-container">
                <label htmlFor="poster" className="flexCenter form_image-label bg-white text-black">
                    {!form.image && (<div className='text-gray-400'>Choose a poster for your project</div>)}
                </label>
                <input
                    id="image"
                    type="file"
                    accept='image/*'
                    required={type === "create" ? true : false}
                    className="form_image-input"
                    onChange={(e) => handleChangeImage(e)}
                />
                {form.image && (
                    <Image
                        src={form?.image}
                        className="sm:p-10 object-contain z-20" alt="image"
                        fill
                    />
                )}
            </div>

            <FormField
                title="Title"
                state={form.title}
                placeholder="ChainFolio"
                setState={(value) => handleStateChange('title', value)}
            />

            <FormField
                title="Tagline"
                state={form.tagline}
                placeholder="A social network for developers."
                setState={(value) => handleStateChange('tagline', value)}
            />

            <FormField
                title='Description'
                state={form.description}
                placeholder="Showcase and discover remarkable developer projects."
                isTextArea
                setState={(value) => handleStateChange('description', value)}
            />

            <FormField
                type="url"
                title="Website/Demo URL"
                state={form.liveSiteUrl}
                placeholder="https://chainfolio.com"
                setState={(value) => handleStateChange('liveSiteUrl', value)}
            />

            <FormField
                type="url"
                title="GitHub URL"
                state={form.githubUrl}
                placeholder="https://github.com/chainfolio"
                setState={(value) => handleStateChange('githubUrl', value)}
            />

            <FormField
                type="url"
                title="Contract URL"
                state={form.contractUrl}
                placeholder="https://etherscan.io/0xchainfolio"
                setState={(value) => handleStateChange('contractUrl', value)}
            />

            <CustomMenu
                title="Category"
                state={form.category}
                filters={categoryFilters}
                setState={(value) => handleStateChange('category', value)}
            />

            <div className="flexStart w-full pb-5 ">
                {/* <Button
                    title={submitting ? `${type === "create" ? "Creating" : "Editing"}` : `${type === "create" ? "Create" : "Edit"}`}
                    type="submit"
                    leftIcon={submitting ? "" : "./images/plus.svg"}
                    submitting={submitting}
                /> */}
                <button
                    disabled={submitting || false}
                    className={`flexCenter gap-3 px-6 py-4 text-white 
                    ${submitting ? 'bg-black/50' : 'bg-green-300' ? 'bg-gray-500' : 'bg-primary-purple'} rounded text-sm font-medium max-md:w-full`}
                >
                    {submitting ? `${type === "create" ? "Creating" : "Editing"}` : `${type === "create" ? "Create" : "Edit"}`}
                    <MdAdd />
                </button>
            </div>
        </form>
    )
}

export default ProjectForm