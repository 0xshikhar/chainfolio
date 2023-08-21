"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <h1>ChainFolio Main Page</h1>
      <button type="button" onClick={() => router.push('/create-project')}>
        Create Project
      </button>
    </div>
  )
}
