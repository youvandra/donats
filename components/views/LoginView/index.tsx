import React from "react";

import HeaderSection from "@/components/layouts/Header";
import ShadowBoxButton from "@/components/module/ShadowBoxButton";
import ShaodowBoxDiv from "@/components/module/ShadowBoxDiv";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginView() {
  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <HeaderSection />

      {/* main content */}
      <main className="flex flex-col py-5 justify-center items-center gap-8 w-[1000px] mx-auto">
        <div className="mt-20 flex flex-col items-start justify-center">
          <ShadowBoxButton className="text-[16px] w-[145px] h-[42px] bg-orange">
            Login
          </ShadowBoxButton>
          <ShaodowBoxDiv
            height="420px"
            widht="1000px"
            backgroundColor="#FAFFDF"
            innerClassName="px-14 py-14"
          >
            <form className="flex flex-col justify-start item-center gap-6">
              {/* email input */}
              <div className="w-full border-b border-black flex flex-col gap-1">
                <Label htmlFor="email" className="text-2xl font-normal">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  autoComplete="off"
                  className="w-full bg-transparent focus:bg-transparent border-none border-transparent focus:border-transparent"
                />
              </div>
              {/* password input */}
              <div className="w-full border-b border-black flex flex-col gap-1">
                <Label htmlFor="password" className="text-2xl font-normal">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  autoComplete="off"
                  autoFocus={false}
                  aria-autocomplete="none"
                  className="w-full bg-transparent focus:bg-transparent border-none border-transparent focus:border-transparent"
                />
              </div>
              {/* button submit */}
              <div className="mt-10 self-end">
                <ShadowBoxButton className="bg-yellowGold">
                  Login
                </ShadowBoxButton>
              </div>
            </form>
          </ShaodowBoxDiv>
        </div>
      </main>
    </div>
  );
}
