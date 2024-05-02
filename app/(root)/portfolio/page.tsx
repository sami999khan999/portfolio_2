import PortfolioSection from "@/components/PortfolioSection";
import { portfolios } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="max-width section-padding" data-aos="fade">
        <div className="box text-center flex flex-col items-center gap-3">
          <div
            className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5"
            data-aos="fade-don"
            data-aos-delay={100}
          >
            <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 data-aos="fade-down" data-aos-delay={300}>
            MY Creative Portfolio
          </h2>
          <p className="text-gray600" data-aos="fade-down" data-aos-delay={400}>
            If you're curious about my creative works, take a look at the
            projects I've completed. Each project reflects my dedication and
            creativity in the field.
          </p>
        </div>
      </section>

      <PortfolioSection data={portfolios} title="Projects Done in 2024" />
    </>
  );
};

export default page;
