"use client";
import { portfolios } from "@/constants";
import { Projector } from "lucide-react";
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioSection = ({
  data,
  title,
}: {
  data: typeof portfolios;
  title: string;
}) => {
  const uniqueCategory = [
    "All Projects",
    ...new Set(data.map((item) => item.category)),
  ];

  const [allCategories, setAllCategories] = useState(uniqueCategory);

  const [category, setCategory] = useState<string>("All Projects");
  const filteredProjects = data.filter((project) => {
    return category === "All Projects"
      ? project
      : project.category === category;
  });

  console.log(filteredProjects);

  return (
    <section className="max-width section-padding">
      <div
        className="flex flex-col tablet:flex-row border tablet:border-purple/15 w-max gap-6 mx-auto tablet:gap-[3rem]
      text-lg py-1 px-1  tablet:rounded-full rounded-lg text-center font-semibold
      "
      >
        {allCategories.map((item, index) => (
          <div
            key={index}
            onClick={() => setCategory(item)}
            className={`w-48  h-12 rounded-full text-center flex flex-col items-center justify-center transition-all duration-100  ${
              item === category ? "bg-purple text-gray-300" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-7 mt-16 desktop:grid-cols-3 bigMobile:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <PortfolioItem key={index} portfolio={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
