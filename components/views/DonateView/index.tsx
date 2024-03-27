"use client";
import React from "react";

import HeaderSection from "@/components/layouts/Header";
import ShadowBoxButton from "@/components/module/ShadowBoxButton";
import ShaodowBoxDiv from "@/components/module/ShadowBoxDiv";
import ShadowBoxInput from "@/components/module/ShadowBoxInput";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

type Props = {
  username: string;
};

export default function DonateView(props: Props) {
  const router = useRouter();

  const handleDonate = () => {
    alert(`donate to: ${props.username}`);
    router.push(`/alert?username=${props.username}`);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <HeaderSection />

      {/* main content */}
      <main className="flex flex-col py-5 justify-center items-center gap-8 w-[512px] mx-auto">
        {/*  */}
        <div className="flex justify-between w-full">
          <h1 className="text-4xl">Donate to :</h1>
          <ShadowBoxButton className="min-w-[146px] h-[80px]">
            {props.username}
          </ShadowBoxButton>
        </div>
        {/*  */}
        <ShaodowBoxDiv widht="512px" height="540px" backgroundColor="#FAFFDF">
          <form className="px-6 py-6 flex flex-col gap-y-4">
            <ShadowBoxInput type="text" name="from" label="From:" />
            {/* checbox anonymos */}
            <div className="flex items-center w-/4 gap-3">
              <Checkbox
                id="terms2"
                className="w-[26px] h-[26px] border border-black p-2 bg-white rounded-xl checked:bg-transparent shadow-lg shadow-black/25 "
              />
              <span className="text-[15px] font-normal">Anonymous</span>
            </div>
            <ShadowBoxInput
              type="number"
              name="amount"
              label="Amount:"
              min={"0"}
            />
            <ShadowBoxInput type="text" name="message" label="Message:" />
            {/* 18 year checkbox */}
            <div className="flex items-center w-/4 gap-3">
              <Checkbox
                id="terms2"
                className="w-[26px] h-[26px] border border-black p-2 bg-white rounded-xl checked:bg-transparent shadow-lg shadow-black/25 "
              />
              <span className="text-[15px] font-normal">
                18 years old and above<span className="text-red-500">*</span>
              </span>
            </div>
            {/* i aggre checkbox */}
            <div className="flex items-center w-/4 gap-3">
              <Checkbox
                id="terms2"
                className="w-[26px] h-[26px] border border-black p-2 bg-white rounded-xl checked:bg-transparent shadow-lg shadow-black/25 "
              />
              <span className="text-[15px] font-normal">
                I agree that this support is provided on a voluntary basis in
                accordance with the terms and conditions.{" "}
              </span>
            </div>
            <div className="mx-auto mt-5">
              <ShadowBoxButton
                onClick={handleDonate}
                className="bg-yellowGold w-[147px] h-[47px]"
              >
                Donate
              </ShadowBoxButton>
            </div>
          </form>
        </ShaodowBoxDiv>
      </main>
    </div>
  );
}
