'use client';
import { isSessionCookiePresent } from "@/common/helper";
import { useRouter } from "next/navigation";
import { useEffect } from "react"


const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isSessionCookiePresent()) {
      router.push('/login');
    }
  }, [])

  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard