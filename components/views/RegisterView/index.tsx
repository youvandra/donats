"use client";
import React from "react";

import HeaderSection from "@/components/layouts/Header";
import ShadowBoxButton from "@/components/module/ShadowBoxButton";
import ShaodowBoxDiv from "@/components/module/ShadowBoxDiv";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { config } from "@/config";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RegisterView() {
  const router = useRouter();

  const session = useSession();

  if (session.data?.user?.name) {
    return router.push("/dashboard");
  }

  const handleSubmit = async (formData: FormData) => {
    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const confirmPassword = formData.get("confirmPassword") as string;
      // checkbox input
      const yearAbove = formData.get("18_year");
      const commerciaPurpose = formData.get("commercial_purpose");
      const agreeTerms = formData.get("agree_terms");

      // input validation
      if (!email || !password || !confirmPassword) {
        alert("Please fill the inputs");
      } else if (
        yearAbove != "on" ||
        commerciaPurpose != "on" ||
        agreeTerms != "on"
      ) {
        alert("Please all checkbox");
      } else if (confirmPassword != password) {
        alert("password & confirm password not match");
      } else {
        const payload = {
          email,
          password,
        };

        await axios.post(`${config.baseUrl}/api/auth/register`, payload);

        router.push("/success/signup");
      }
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <HeaderSection />

      {/* main content */}
      <main className="flex flex-col py-5 justify-center items-center gap-8 w-[1000px] mx-auto">
        <div className="mt-20 flex flex-col items-start justify-center">
          <ShadowBoxButton className="text-[16px] w-[145px] h-[42px] bg-orange">
            Signup
          </ShadowBoxButton>
          <ShaodowBoxDiv
            height="746px"
            widht="1000px"
            backgroundColor="#FAFFDF"
            innerClassName="px-14 py-14"
          >
            <form
              action={handleSubmit}
              className="flex flex-col justify-start item-center gap-6"
            >
              {/* email input */}
              <div className="w-full border-b border-black flex flex-col gap-1">
                <Label htmlFor="email" className="text-2xl font-normal">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
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
                  name="password"
                  autoComplete="off"
                  autoFocus={false}
                  aria-autocomplete="none"
                  className="w-full bg-transparent focus:bg-transparent border-none border-transparent focus:border-transparent"
                />
              </div>
              {/* confirm password */}
              <div className="w-full border-b border-black flex flex-col gap-1">
                <Label
                  htmlFor="confirmPassword"
                  className="text-2xl font-normal"
                >
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="off"
                  autoFocus={false}
                  aria-autocomplete="none"
                  className="w-full bg-transparent focus:bg-transparent border-none border-transparent focus:border-transparent"
                />
              </div>

              {/* checkbox  for terms and conditions */}
              <div className="w-full my-14 flex flex-col gap-4">
                <div className="flex items-center w-/4 gap-3">
                  <Checkbox
                    name="18_year"
                    className="w-[30px] h-[30px] border border-black p-2 bg-white rounded-xl checked:bg-transparent"
                  />
                  <span className="text-[15px] font-normal">
                    18 years old and above
                    <span className="text-red-500">*</span>
                  </span>
                </div>
                <div className="flex items-center w-/4 gap-3">
                  <Checkbox
                    name="commercial_purpose"
                    className="w-[30px] h-[30px] border border-black p-2 bg-white rounded-xl checked:bg-transparent"
                  />
                  <span className="text-[15px] font-normal">
                    Not using donats for buying and selling / commercial
                    purposes
                    <span className="text-red-500">*</span>
                  </span>
                </div>
                <div className="flex items-center w-/4 gap-3">
                  <Checkbox
                    name="agree_terms"
                    className="w-[30px] h-[30px] border border-black p-2 bg-white rounded-xl checked:bg-transparent"
                  />
                  <span className="text-[15px] font-normal">
                    Agree to the terms and conditions
                    <span className="text-red-500">*</span>
                  </span>
                </div>
              </div>

              {/* button submit */}
              <div className="mt-10 self-end">
                <ShadowBoxButton type="submit" className="bg-yellowGold">
                  Register
                </ShadowBoxButton>
              </div>
            </form>
          </ShaodowBoxDiv>
        </div>
      </main>
    </div>
  );
}
