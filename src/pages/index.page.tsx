import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/palmistry/welcom");
  }, []);
  return <div></div>;
};

export default Home;
