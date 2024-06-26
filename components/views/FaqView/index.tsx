import React from "react";

import HeaderSection from "@/components/layouts/Header";
import ShadowBoxAccordion from "@/components/module/ShadowBoxAccordion";
import Link from "next/link";

export default function FaqView() {
  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <Link href="/"><HeaderSection /></Link>

      {/* main content */}
      <main className="flex flex-col py-5 justify-center items-center gap-8 w-[1000px] mx-auto">
        {accordionPropsValue.map((item, idx) => {
          return (
            <ShadowBoxAccordion key={idx} header={item.header}>
              {item.content}
            </ShadowBoxAccordion>
          );
        })}
      </main>
    </div>
  );
}

const accordionPropsValue = [
  {
    header: "Who can use Donats?",
    content:
      "Mostly streamers that do let’s plays, music tutorials, drawing tutorials, photo/video editing tutorials, Just Chatting, DJ Sets to Viewer’s decide songlist. We are really open to ideas on how you would like to use our service.",
  },
  {
    header: "What live streaming platforms can integrated with Donats?",
    content:
      "Donats is integrated with broadcasting software that supports 'Browser Source', such as OBS or SLOBS.",
  },
  {
    header: "How do I use Donats?",
    content:
      "Register at /register, enter your details, set up overlay for live streaming, post Donats link, receive donations. ",
  },
  {
    header: "I'm not a streamer, can I still use Donats?",
    content:
      "Of course you can! Support goes to your Donats account even if it's not live. Cons: no real time notifications when donations come in.",
  },
  {
    header: "How do I use Donats's overlays?",
    content:
      "Check out the video tutorial for overlaying Donats on OBS in /tutorial.",
  },
];
