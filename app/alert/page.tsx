"use client";
import ShadowBoxNotif from "@/components/module/Notif";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SupportPage() {
  const searchParams = useSearchParams();

  const username = searchParams.get("username");

  return (
    <div className="h-[100vh] bg-[#D9D9D9] ">
      <div className="flex h-full justify-center items-center">
        <ShadowBoxNotif />
      </div>
    </div>
  );
}
