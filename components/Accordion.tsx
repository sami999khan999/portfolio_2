"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface AccordionData {
  id: number;
  question: string;
  answer: string;
}

const Accordion = ({ data }: { data: AccordionData[] }) => {
  const [currentActive, setCurrentActive] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {data.map((item, index) => (
        <div
          className="bg-peach-600 px-5 rounded-lg"
          key={index}
          data-aos="fade-right"
        >
          <div
            className="flex items-center justify-between cursor-pointer py-5"
            onClick={() => setCurrentActive(index)}
          >
            <h5 className="text-gray-700">{item.question}</h5>
            <div
              className={`transition-transform duration-300 ${
                currentActive === index ? "rotate-45 scale-125" : ""
              }`}
            >
              <Plus size={16} />
            </div>
          </div>
          <div
            className={`text-gray-600 transition-all duration-300 ${
              currentActive === index
                ? "max-h-[1000px] opacity-100 pb-5"
                : "max-h-0 opacity-0"
            }`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
