import React from "react";

import ShadowBoxNotif from "@/components/module/Notif";
import { getDonatedData } from "@/actions/donated";

export default async function SupportPage({
  searchParams,
}: {
  searchParams: { username: string };
}) {
  const donateData = await getDonatedData(searchParams.username);

  return (
    <div className="h-[100vh] bg-[#D9D9D9] ">
      <div className="flex flex-col h-full justify-center items-center gap-3">
        <ShadowBoxNotif data={donateData!} />
      </div>
    </div>
  );
}
