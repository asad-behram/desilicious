'use client';
import { deleteCookie, isSessionCookiePresent } from "@/common/helper";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react"


const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isSessionCookiePresent()) {
      router.push('/login');
    }
  }, [])

  const handleLogout = () => {
    deleteCookie("accessToken");
    router.push("/login");
  }

  return (
    <div>
      <div>Dashboard</div>
      <Button
        type="primary"
        onClick={handleLogout}
      >Logout</Button>
    </div>
  )
}

export default Dashboard