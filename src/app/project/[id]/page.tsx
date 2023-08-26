"use client"


// import { getCurrentUser } from "@/lib/session"
import { getProjectId, getProjectByUser } from "@/lib/contract"
// import Modal from "@/components/Modal"
import ProjectPage from "@/components/ProjectPage"
// import ProjectActions from "@/components/ProjectActions"
// import RelatedProjects from "@/components/RelatedProjects"
import { ProjectInterface, ChainIdType} from "@/common.types"
import { useProvider } from "wagmi"
import { useEffect, useState } from "react"


const Project = ({ params: { id } }: { params: { id: string } }) => {
    const provider = useProvider();
    const [project, setProject] = useState() as any

    useEffect(() => {
        async function fetchData() {
            const result = await getProjectId(parseInt(id), provider._network.chainId as ChainIdType)
            console.log("result", result)
            setProject(result)
        }
        fetchData()
    }, [id, provider._network.chainId])

    if (!project) return (
        <p className="no-result-text">Failed to fetch project info</p>
    )

    console.log("project", project)

    // const project = result?.project
    // const renderLink = () => `/profile/${project?.projectOnwer}`

    return (
        <div className="pt-10 px-8 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
            {project &&
                <ProjectPage project={project} />
            }
        </div>
    )
}

export default Project
