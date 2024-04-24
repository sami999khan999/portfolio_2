import PortfolioSection from "@/components/PortfolioSection";
import { portfolios } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metaData: Metadata = {
  title: " Portfolio - Sami Khan",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2>MY Creative Portfolio</h2>
          <p className="text-gray600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            quod quibusdam. Earum neque eaque, consequuntur officia delectus
            expedita, et non molestiae obcaecati accusamus debitis odio
            aspernatur culpa molestias laboriosam dolores!
          </p>
        </div>
      </section>

      <PortfolioSection data={portfolios} title="Projects Done in 2024" />
    </>
  );
};

export default page;
