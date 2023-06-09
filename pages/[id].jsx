import { useRouter } from "next/router";
import React from "react";
import { useTimeoutFn } from "react-use";
import Ads from "../components/Ads";
import Clock from "../components/Clock";
import NavBar from "../components/NavBar";
import axiosInstance from "../config/axiosRequest";

const Query = ({ urlBase }) => {
  const router = useRouter();
  console.log(urlBase);
  const redirect = () => {
    cancel();
    router.push(urlBase);
  };
  const [isReady, cancel, reset] = useTimeoutFn(redirect, 3000);
  return (
    <>
      <NavBar />
      <section className="flex w-full flex-col items-center justify-center pt-20 h-screen gap-3">
        <Clock />
        <p className="text-gray-400">Por favor, espere un momento...</p>
        <Ads />
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { data } = await axiosInstance.post("/short-url/search", { id });
  return {
    props: { ...data },
  };
}

export default Query;
