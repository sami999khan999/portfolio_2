import PortfolioItem from "@/components/PortfolioItem";
import SectionHeading from "@/components/SectionHeading";
import { benefits, portfolios, skills } from "@/constants";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* hore section   */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row md-10">
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded font-semibold">
              Hello There 👋
            </p>
            <h1 className="text-grey">Sami Khan welcome's you</h1>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              accusamus, atque ex necessitatibus magnam obcaecati sunt incidunt
              consectetur dolorum ducimus repellat suscipit maiores.
            </p>
          </div>

          <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
            <a href="" className="btn btn-primary">
              Resume
              <Download size={16} />
            </a>

            <Link href={"/protfolio"} className="btn">
              View Protfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden">
          <Image
            src={"/images/hero.png"}
            alt="heroImage"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* skill section */}
      <section className="max-width section-padding mt-6">
        <SectionHeading
          title="Skills"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis!"
        />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={35}
                  height={35}
                />
              </div>

              <div className="text-center">
                <h4 className="text-gray-700 mb-2">{skill.name}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* benefits section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Benefits"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis!"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-gray-700 mb-2">{benefit.name}</h5>
              <p className="text-gray-600 ">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {benefits.slice(2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-gray-700 mb-2">{benefit.name}</h5>
              <p className="text-gray-600 ">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* protfolio section */}
      <section className="section-padding max-width">
        <SectionHeading
          title="My Work"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, nobis!"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,ifr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {portfolios.slice(0, 3).map((portfolio, index) => (
            <PortfolioItem key={index} portfolio={portfolio} />
          ))}
        </div>

        <Link
          href={"/portfolio"}
          className="btn btn-primary mt-10 mx-auto w-max"
        >
          View all porjects
        </Link>
      </section>
    </>
  );
};

export default page;
