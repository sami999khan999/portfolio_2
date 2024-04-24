"use client";

import { portfolios } from "@/constants";
import { ArrowRight, ArrowUpRight, Github, Projector } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  link: string;
  github: string;
  images: string[];
}

const PortfolioItem = ({ portfolio }: { portfolio: PortfolioItem }) => {
  const [currentImg, setCurrentImg] = useState(portfolio.images[0]);

  return (
    <div className="box">
      <h4 className="mb-5">{portfolio.title}</h4>
      <div className="relative w-full h-[255px] rounded-lg overflow-hidden group cursor-pointer mb-5 flex items-center justify-center shadow-xl">
        <Image
          src={currentImg}
          alt={portfolio.title}
          width={400}
          height={600}
          className="object-fill"
        />
        <div className="bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center bg-peach-700 border border-peach-400 p-3 text-grey rounded-lg">
            <Link href={portfolio.link}>
              <ArrowUpRight />
            </Link>
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-peach-700 border border-peach-400 p-3 text-grey rounded-lg">
            <Link href={portfolio.github}>
              <Github />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 w-fit mx-auto">
        {portfolio.images.map((image, index) => (
          <div
            key={index}
            className="relative h-20 w-[110px] rounded-lg overflow-hidden group cursor-pointer flex items-center justify-center shadow-md "
            onClick={() => setCurrentImg(image)}
          >
            <Image
              src={image}
              alt={portfolio.title}
              width={110}
              height={110}
              className="object-fill"
            />
            <div
              className={`bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full  transition-opacity duration-300 ${
                currentImg !== image ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;
