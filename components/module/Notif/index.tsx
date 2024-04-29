"use client";
import React, { useEffect, useState } from "react";
import ShaodowBoxDiv from "../ShadowBoxDiv";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  data: { from: string; amount: string; message: string }[] | null;
};

export default function ShadowBoxNotif(props: Props) {
  const router = useRouter();
  const usernameSearch = useSearchParams().get("username");
  
  const [isShow, setIsShow] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 5000);
  // }, []);

  // check session
  const session = useSession();
  // if (session.data?.user?.name != usernameSearch) {
  //   router.push("/");
  //   return <></>;
  // }
  if (!props.data) {
    return null; // Jika null, tidak menampilkan apapun
  }

  return (
    <>
      {props.data.map((item, idx) => {
        // if (isShow)
        if (idx < 1)
          return (
            <ShaodowBoxDiv
              key={idx}
              backgroundColor="#F4CD00"
              height="200px"
              widht="1000px"
            >
              <div className="mx-auto flex flex-col gap-3 py-4">
                <div className="flex justify-center items-center gap-16">
                  <h1 className="text-4xl font-bold leading-[54px] text-[#C8AEFF]">
                    {item.from}
                  </h1>
                  <h1 className="text-[32px] font-normal leading-[48px] ">
                    Just give you
                  </h1>
                  <h1 className="text-4xl font-bold leading-[54px] text-[#C8AEFF]">
                    {item.amount} TRX
                  </h1>
                </div>
                <div className="w-[570px] mx-auto">
                  <h3 className="text-2xl leading-9 text-center">
                    {item.message}
                  </h3>
                </div>
              </div>
            </ShaodowBoxDiv>
          );
      })}
    </>
  );
}
