import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="max-width section-padding flex flex-col tablet:flex-row gap-20 items-center">
        <div
          className="relative w-full tablet:w-1/2 h-[calc(300px+20vw)] tablet:h-[600px]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {/* <Image
            src={"/images/about.png"}
            fill
            alt="about img"
            className="object-cover"
          /> */}
        </div>

        <div className="tablet:w-1/2">
          <div className="flex flex-col max-tablet:text-center gap-3">
            <p
              className="px-4 bg-peach-500 text-gray-600 w-max rounded tablet:w-max max-tablet:mx-auto"
              data-aos="fade-down"
            >
              Wellcome to the world of camtivvating web development!
            </p>
            <h1
              className="text-gray-700 "
              data-aos="fade-down"
              data-aos-delay={100}
            >
              {` I'm Sami Khan`}
            </h1>
            <p
              className="text-gray-600 "
              data-aos="fade-down"
              data-aos-delay={200}
            >
              I specialize in creating intuitive websites with cutting-edge
              technology, delivering dynamic and engaging user experiences.
            </p>
          </div>

          <div
            className="bg-peach-400 rounded-lg tablet:rounded-none tablet:bg-transparent tablet:border-t-2 tablet:border-b-2 tablet:border-purple w-full py-8 mt-14 tablet:mt-24 gap-12 flex flex-col tablet:flex-row"
            data-aos="fade"
            data-aos-delay={300}
          >
            <div
              className="flex items-center gap-10 justify-center tablet:block"
              data-aos="fade-left"
              data-aos-delay={400}
            >
              <h3>
                23 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Porjects complited</p>
            </div>

            <div
              className="flex items-center gap-10 justify-center tablet:block"
              data-aos="fade-left"
              data-aos-delay={500}
            >
              <h3>
                3 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Years in Web Tech</p>
            </div>

            <div
              className="flex items-center gap-10 justify-center tablet:block"
              data-aos="fade-left"
              data-aos-delay={600}
            >
              <h3>
                13 <span className="text-purple">+</span>
              </h3>
              <p className="text-grey-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-width section-padding">
        <div data-aos="fade-up">
          <SectionHeading
            title="Milestones of my career"
            subtitle="Highlighting significant achievements and milestones reached along my professional journey."
          />
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:translate-x-px tablet:before:mx-auto tablet:before:translate-x-0 before:h-full before:w-0.5 before:bg-purple before:bg-opacity-30">
          {timeline.map((items, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between tablet:justify-normal tablet:odd:flex-row-reverse group"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full bg-peach-400 shrink-0 tablet:order-1
                tablet:group-odd:-translate-x-1/2 tablet:group-even:translate-x-1/2 group-first:before:absolute group-first:before:w-1 group-first:before:h-20 group-first:before:bottom-full group-first:before:bg-peach-600 group-last:before:absolute group-last:before:w-1 group-last:before:h-20 group-last:before:bottom-full group-last:before:top-full group-last:before:bg-peach-600"
                data-aos="fade-top"
                data-aos-delay={200}
              >
                <span className="w-3 h-3 bg-purple rounded-full"></span>
              </div>
              <div
                className="w-[calc(100%-4rem)] tablet:w-[calc(50%-2.5rem)] box !p-5 tablet:!p-8"
                data-aos="fade"
                data-aos-delay={200}
              >
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h6 className="text-gray-700 ">{items.title}</h6>
                  <p className="font-semibold text-purple ">{items.duration}</p>
                </div>
                <div className="text-gray-600">{items.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
