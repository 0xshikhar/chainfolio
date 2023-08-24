"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProvider, useAccount } from 'wagmi'
import { ProjectInterface } from "@/common.types";
import { fetchAllProjects } from "@/lib/contract";
import ProjectCard from "@/components/ProjectCard";
import Categories from "@/components/Categories";
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
type ChainIdType = 5 | 421613 | 84531 | 80001 | 43113;

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = () => {
  // const { chain, chains } = useNetwork()
  const router = useRouter()
  const provider = useProvider();
  const { address, isConnected } = useAccount()

  console.log("provider", provider._network.chainId)
  const { ethereum } = window;
  const [projects, setProjects] = useState() as any

  useEffect(() => {
    async function fetchData() {
      if (ethereum) {
        const data = await fetchAllProjects(provider._network.chainId as ChainIdType)
        setProjects(data)
        console.log("data", data)
      }
      else {
        alert("Please Connect Web3 Wallet to see On-Chain Data")
      }

    }
    fetchData()
  }, [ethereum, provider._network.chainId])

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
    <section className="flexStart flex-col paddings mb-16">
      <Categories />
      {/* <button type="button" onClick={() => router.push('/create-project')}>
        Create Project
      </button> */}

      <section className="projects-grid">
        {projects?.map(( node : any) => (
          console.log("node section", node.imageUrl),
          
          <ProjectCard
          key={`${node?.length}`}
          id={node?.length}
          image={node?.imageUrl}
          title={node?.projectName}
          githubUrl={node?.githubUrl}
          category={node?.category}
          tagline={node?.tagline}
          />
        ))}
      </section>

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
