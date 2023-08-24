"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useNetwork, useProvider } from 'wagmi'

export default function Home() {
  const router = useRouter()
  const { chain, chains } = useNetwork()
  const provider = useProvider();

  console.log("provider", provider._network.chainId )
  console.log("provider", provider)

  return (
    <div>
      <h1>ChainFolio Main Page</h1>
      <button type="button" onClick={() => router.push('/create-project')}>
        Create Project
      </button>
      {chain && <div>Connected to {chain.name}</div>}
      {chains && (
        <div>Available chains: {chains.map((chain) => chain.name)}</div>
      )}
    </div>
  )
}
