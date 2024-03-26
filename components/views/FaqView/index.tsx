import React from "react";

import HeaderSection from "@/components/layouts/Header";
import ShadowBoxAccordion from "@/components/module/ShadowBoxAccordion";

export default function FaqView() {
  return (
    <div className="flex flex-col gap-2">
      {/* header */}
      <HeaderSection />

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
    header: "Question?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
  {
    header: "Question?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];
