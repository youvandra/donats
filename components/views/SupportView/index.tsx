import React from "react";

import HeaderSection from "@/components/layouts/Header";
import ShadowBoxButton from "@/components/module/ShadowBoxButton";
import ShaodowBoxDiv from "@/components/module/ShadowBoxDiv";

import DonutIcon from "@/public/assets/images/donut.png";
import DonutIcon2 from "@/public/assets/images/donut-02.png";
import Image from "next/image";

export default function SupportView() {
  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <HeaderSection />

      {/* main */}
      <main className="flex px-32 mt-10 justify-center items-center gap-10">
        {/* card 1 */}
        <div className="flex flex-col items-start w-max justify-center mt-7 gap-5">
          <ShadowBoxButton className="mx-auto w-[146px] h-[81px] bg-orange">
            Cashout
          </ShadowBoxButton>
          <ShaodowBoxDiv height="296px" widht="532px" backgroundColor="#F4CD00">
            <div className="px-6 py-3 flex flex-col gap-28">
              <h1 className="font-bold text-[64px] text-black leading-[96px]">
                <span className="text-black/75">8,022</span> TRX
              </h1>
              <div className="">
                <h6 className="text-xl leading-7">Total overall income.</h6>
              </div>
            </div>
          </ShaodowBoxDiv>
        </div>

        {/* card 2 */}
        <div className="flex flex-col w-max items-end  mt-7 gap-5">
          <ShadowBoxButton className="mx-auto w-[146px] h-[81px]">
            Bob
          </ShadowBoxButton>
          <ShaodowBoxDiv height="296px" widht="532px" backgroundColor="#FFB5E6">
            <div className="px-6 py-3 flex flex-col gap-4 ">
              <h1 className="font-bold text-[64px] text-black leading-[96px]">
                <span className="text-black/75">5,022</span> TRX
              </h1>
              <ShadowBoxButton className="bg-[#BDFF00] text-[20px] w-[129px] h-[56px]">
                Withdraw
              </ShadowBoxButton>
              <div className="">
                <h6 className="text-xl leading-7 ">
                  The above figure is the total balance that is ready to be
                  disbursed.
                </h6>
              </div>
            </div>
          </ShaodowBoxDiv>
        </div>
      </main>
    </div>
  );
}
