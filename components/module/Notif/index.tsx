import React from "react";
import ShaodowBoxDiv from "../ShadowBoxDiv";

export default function ShadowBoxNotif() {
  return (
    <ShaodowBoxDiv backgroundColor="#F4CD00" height="200px" widht="1000px">
      <div className="mx-auto flex flex-col gap-3 py-4">
        <div className="flex justify-center items-center gap-16">
          <h1 className="text-4xl font-bold leading-[54px] text-[#C8AEFF]">
            Someone
          </h1>
          <h1 className="text-[32px] font-normal leading-[48px] ">
            Just give you
          </h1>
          <h1 className="text-4xl font-bold leading-[54px] text-[#C8AEFF]">
            50 TRX
          </h1>
        </div>
        <div className="w-[570px] mx-auto">
          <h3 className="text-2xl leading-9 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h3>
        </div>
      </div>
    </ShaodowBoxDiv>
  );
}
