import Faq from "@/components/Faq";
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
            <p
              className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded font-semibold"
              data-aos="fade-down"
            >
              Hello There 👋
            </p>
            <h1 className="text-grey" data-aos="fade-down" data-aos-delay={100}>
              {`Sami Khan welcome's you`}
            </h1>
            <p
              className="text-grey-600"
              data-aos="fade-down"
              data-aos-delay={200}
            >
              Embarking on my vocational journey, I offer insights into my
              professional evolution, navigating challenges and opportunities
              with innovation and continuous learning. Engaged in diverse
              projects, I thrive on challenges, driven by a passion for
              excellence and personal growth.
            </p>
          </div>
          <div
            className="flex gap-5 mt-10 justify-center tablet:justify-start"
            data-aos="fade-down"
            data-aos-delay={300}
          >
            <a href="" className="btn btn-primary">
              Resume
              <Download size={16} />
            </a>

            <Link href={"/portfolio"} className="btn">
              View Protfolio <ArrowRight size={16} />
            </Link>
          </div>
          {/* stats */}
          <div
            className="bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-14 flex-wrap gap-12 hidden tablet:flex"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <div>
              <h5>
                23 <span className="text-purple">+</span>
              </h5>
              <p className="text-grey-600">Porjects complited</p>
            </div>
            <div>
              <h5>
                3 <span className="text-purple">+</span>
              </h5>
              <p className="text-grey-600">Years in Web Tech</p>
            </div>
            <div>
              <h5>
                13 <span className="text-purple">+</span>
              </h5>
              <p className="text-grey-600">Happy Customers</p>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-3 tablet:hidden">
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-1">
              <h3>
                23 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Porjects complited</p>
            </div>

            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-1">
              <h3>
                3 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Years in Web Tech</p>
            </div>

            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-1">
              <h3>
                13 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Happy Customers</p>
            </div>
          </div>
        </div>

        <div
          className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden"
          data-aos="fade-left"
          data-aos-delay={100}
        >
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
        <div data-aos="fade-up">
          <SectionHeading
            title="Skills"
            subtitle="Showcasing my diverse skill set and expertise, spanning from technical proficiencies to soft skills, cultivated throughout my professional endeavors."
          />
        </div>

        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
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
        <div data-aos="fade-up">
          <SectionHeading
            title="Benefits"
            subtitle="Illustrating the tangible benefits of my skills and expertise, demonstrating their value in driving successful outcomes and achieving organizational objectives."
          />
        </div>

        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6"
          data-aos="fade-left"
        >
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-gray-700 mb-2">{benefit.name}</h5>
              <p className="text-gray-600 ">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-3 tablet:gap-6"
          data-aos="fade-right"
          sata-aos-delay={200}
        >
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
        <div data-aos="fade-up">
          <SectionHeading
            title="My Work"
            subtitle="Showcasing a curated selection of impactful projects that highlight my creativity, problem-solving abilities, and technical proficiency."
          />
        </div>

        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,ifr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6"
          data-aos="fade-right"
        >
          {portfolios.slice(0, 3).map((portfolio, index) => (
            <PortfolioItem key={index} portfolio={portfolio} />
          ))}
        </div>

        <Link
          href={"/portfolio"}
          className="btn btn-primary mt-10 mx-auto w-max"
          data-aos="fade-up"
        >
          View all porjects
        </Link>
      </section>

      {/* testimonial section */}
      <section>
        <Faq />
      </section>
    </>
  );
};

export default page;
