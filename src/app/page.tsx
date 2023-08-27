"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProvider, useAccount, useEnsName } from 'wagmi'
import { fetchEnsName } from '@wagmi/core'
import { ProjectInterface, ChainIdType } from "@/common.types";
import { fetchAllProjects, convertBigNumber, getProjectId } from "@/lib/contract";
import ProjectCard from "@/components/ProjectCard";
import Categories from "@/components/Categories";
import toast, { Toaster } from 'react-hot-toast';
declare let window: any;


type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
}

type Props = {
  searchParams: SearchParams
}

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = () => {
  // const { chain, chains } = useNetwork()
  const router = useRouter()
  const { ethereum } = window;
  const { address, isConnected } = useAccount()
  const [projects, setProjects] = useState() as any

  const provider = useProvider();
  console.log("provider", provider._network.chainId)

  useEffect(() => {
    async function fetchData() {
      if (ethereum) {
        const data = await fetchAllProjects(provider._network.chainId as ChainIdType) as ProjectInterface[]
        setProjects(data)
        console.log("data", data)
        const result = await getProjectId(3, 5)
        console.log("result", result)
        if (isConnected) {
          const ensName = await fetchEnsName({
            address: `${address}` as any,
            chainId: 1,
          })
          console.log("ensName", ensName);
          if (ensName) {
            toast(`Welcome 🎉 ${ensName}`);
            console.log("address", address, "ensName.", ensName)
          }
          else {
            toast(`Welcome 🎉 0xshikhar.eth`);
            console.log("address", address, "ensName.", ensName)
          }
        }
      }
      else {
        alert("Please Connect Web3 Wallet to see On-Chain Data")
      }
    }

    fetchData()
  }, [ethereum, provider._network.chainId, isConnected, address])



  // if (isConnected) {
  //   console.log("address", address, "ensName", ensName)
  //   toast.success('Success Notification !', {
  //     position: toast.POSITION.TOP_RIGHT
  //   });
  // }

  // if (projects.length === 0) {
  //   return (
  //     <section className="flexStart flex-col paddings">
  //       <Categories />

  //       <p className="no-result-text text-center">No projects found, go create some first.</p>
  //     </section>
  //   )
  // }

  // if (ethereum) {
  //   console.log("ethereum", ethereum)

  //   const data = await fetchAllProjects(provider._network.chainId as ChainIdType) as ProjectSearch
  //   // setProjects(data)
  //   console.log("eth data", data)
  // }
  // else {
  //   const data = await fetchAllProjects(5) as ProjectSearch
  //   console.log("data", data)
  // }
  // const projectsToDisplay = data?.projectSearch?.edges || [];

  // if (projectsToDisplay.length === 0) {
  //   return (
  //     <section className="flexStart flex-col paddings">
  //       {/* <Categories /> */}

  //       <p className="no-result-text text-center">No projects found, go create some first.</p>
  //     </section>
  //   )
  // }

  return (
    <section className="flexStart flex-col paddings bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 min-h-screen ">
      <Categories />
      {/* <button type="button" onClick={() => router.push('/create-project')}>
        Create Project
      </button> */}

      <section className="projects-grid">
        {projects?.map((node: any) => {
          const projectId = convertBigNumber(node.projectId._hex);
          return (
            <ProjectCard
              key={projectId}
              id={String(projectId)}
              image={node?.imageUrl}
              title={node?.projectName}
              githubUrl={node?.githubUrl}
              category={node?.category}
              tagline={node?.tagline}
              address={node?.projectOnwer}
            />
          );
        })}
      </section>
      <Toaster />
      {/* <LoadMore
        startCursor={data?.projectSearch?.pageInfo?.startCursor}
        endCursor={data?.projectSearch?.pageInfo?.endCursor}
        hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage}
        hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
      /> */}
    </section>

  )
}

export default Home
