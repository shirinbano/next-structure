import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/home','/')
  }, [])
  return (
    <div className="container">
    <Loading />
    </div>
  );
}
