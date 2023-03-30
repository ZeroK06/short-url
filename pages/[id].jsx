import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useTimeoutFn } from "react-use";
import Ads from "../components/Ads";
import Clock from "../components/Clock";
import NavBar from "../components/NavBar";

const Query = ({ data }) => {
  const [shortData] = useState(data);
  const router = useRouter();
  const redirect = useCallback(() => {
    router.push(shortData.urlBase);
    console.log(shortData);
  });
  const [] = useTimeoutFn(redirect, 3000);
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
  let data = {};
  try {
    data = await axios.post(`/api/short-url/search`, {
      id,
    });
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      data: data?.data,
    },
  };
}

export default Query;
