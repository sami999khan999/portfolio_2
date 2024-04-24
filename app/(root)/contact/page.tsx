import Faq from "@/components/Faq";
import { socialLinks } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metaData: Metadata = {
  title: " Contact - Sami Khan",
};

const page = () => {
  return (
    <>
      <section className="max-width section-padding">
        <div className="box text-center flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-5">
            <Image src={"/icons/stars.svg"} alt="icon" width={35} height={35} />
          </div>
          <h2 className="text-gray-700">I'd love to here from you.</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            numquam, ipsa porro quidem cumque delectus ipsam adipisci esse earum
            iste.
          </p>
        </div>
      </section>

      <section className="max-width section-padding flex max-tablet:flex-col gap-16">
        <div className="tablet:max-w-md w-full ">
          <div className="space-y-4">
            <div className="box !p-6">
              <p className="text-gray-600">You can Email Me Here</p>
              <h6 className="text-gray-700">sami999khan999@gmail.com</h6>
            </div>
            <div className="box !p-6">
              <p className="text-gray-600">Give Me a Call</p>
              <h6 className="text-gray-700">+880 17802-77493</h6>
            </div>
            <div className="box !p-6">
              <p className="text-gray-600">Location</p>
              <h6 className="text-gray-700">Dhaka, Bangladesh</h6>
            </div>
          </div>

          <h6 className="mt-10 mb-2 text-gray-700 max-tablet:text-center ">
            My Social Profiles
          </h6>
          <div className="flex gap-3 box !p-6 w-max max-tablet:mx-auto">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                className="w-10 h-10 bg-purple text-peach flex items-center justify-center rounded"
              >
                <link.icon strokeWidth={0} fill="currentColor" />
              </a>
            ))}
          </div>
        </div>

        <div className="box w-full">
          <form action="" className="space-y-5">
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="flex gap-5 max-tablet:flex-col">
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <textarea name="messages" placeholder="Message"></textarea>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Faq />
    </>
  );
};

export default page;
