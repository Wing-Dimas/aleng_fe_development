import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Redirector({ to = "/" }) {
  const router = useRouter()
  useEffect(() => {
    router.push(to)
  }, [router, to])
  return <div>Redirecting...</div>
}
