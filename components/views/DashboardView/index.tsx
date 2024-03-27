import React from "react";

import HeaderSection from "@/components/layouts/Header";
import ShadowBoxButton from "@/components/module/ShadowBoxButton";
import ShaodowBoxDiv from "@/components/module/ShadowBoxDiv";

import DonutIcon from "@/public/assets/images/donut.png";
import DonutIcon2 from "@/public/assets/images/donut-02.png";
import Image from "next/image";

export default function DashboardView() {
  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <HeaderSection />

      {/* main */}
      <main className="flex px-32 mt-10 justify-center items-center gap-10">
        {/* card 1 */}
        <div className="flex flex-col items-center w-max justify-center mt-7 gap-8 translate-y-[52px]">
          <ShaodowBoxDiv height="296px" widht="532px" backgroundColor="#C8AEFF">
            <div className="flex">
              <div className="flex flex-col gap-y-32 h-full py-10 px-8">
                <h3 className="text-4xl font-normal">Overlay</h3>
                <h6 className="text-[20px] leading-[30px]">
                  Set alerts and overlays here
                </h6>
              </div>
              <div className="flex items-center justify-end translate-x-10">
                <Image
                  src={DonutIcon}
                  alt=""
                  height={102}
                  width={102}
                  className=""
                />
              </div>
            </div>
          </ShaodowBoxDiv>
        </div>

        {/* card 2 */}
        <div className="flex flex-col w-max items-end  mt-7 gap-5 relative">
          <ShadowBoxButton className="mx-auto w-[146px] h-[81px]">
            username
          </ShadowBoxButton>
          <ShaodowBoxDiv height="296px" widht="532px" backgroundColor="#F4CD00">
            <div className="flex">
              <div className="flex flex-col gap-y-32 h-full py-10 px-8">
                <h3 className="text-4xl font-normal">Incoming Support</h3>
                <h6 className="text-[20px] leading-[30px]">
                  View support and cashout history
                </h6>
              </div>
              <div className="flex items-center justify-end -translate-x-5 translate-y-2">
                <Image
                  src={DonutIcon2}
                  alt=""
                  height={131}
                  width={131}
                  className=""
                />
              </div>
            </div>
          </ShaodowBoxDiv>
        </div>
      </main>
    </div>
  );
}
