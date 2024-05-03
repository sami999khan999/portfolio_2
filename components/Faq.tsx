import React from "react";
import SectionHeading from "./SectionHeading";
import { Stars } from "lucide-react";
import Link from "next/link";
import Accordion from "./Accordion";
import { faqs } from "@/constants";

const Faq = () => {
  return (
    <section className="max-width section-padding overflow-hidden">
      <div data-aos="fade-up">
        <SectionHeading
          title="Frequently Asked Question"
          subtitle="Your Questions, Answered: A Conversational Corner to Illuminate Your Path"
        />
      </div>

      <div className="flex flex-col tablet:flex-row gap-5 items-center tablet:items-start">
        <div className="box" data-aos="fade-right">
          <Accordion data={faqs} />
        </div>
        <div
          className="box flex flex-col gap-5 tablet-max-w-md"
          data-aos="fade-left"
        >
          <div className="w-16 h-16 rounded bg-purple text-peach flex items-center justify-center flex-shrink-0 mb-2">
            <Stars fill="currentColor" size={30} />
          </div>
          <div className="">
            <h5 className="text-gray-700 mb-2">Still have any questions? </h5>
            <p className="text-gray-600 w-80">
              `If you still have any questions or need further clarification,
              feel free to reach out to me. I'm here to help and provide
              assistance in any way I can.`
            </p>
          </div>
          <Link href={"/contact"} className="btn btn-primary w-max">
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faq;
