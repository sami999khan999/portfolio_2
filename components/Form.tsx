"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const templateId = "template_wfvg3ze";
  const serviceId = "service_mi02xbb";
  const publicKey = "B7ZbiG-5itYXTy4df";

  const formHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.firstName + " " + form.lastName,
      from_email: form.email,
      phone: form.phone,
      message: form.message,
      to_name: "Sami Khan",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        console.log(res);
        toast.success("Mail sent");
      })
      .catch((err) => {
        toast.error("Couldn't send Mail");
      });
  };

  return (
    <form action="" className="space-y-5" onSubmit={submitHandler}>
      <div
        className="flex gap-5 max-tablet:flex-col"
        data-aos="fade"
        data-aos-delay={100}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => {
            formHandler(e);
          }}
          value={form.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => {
            formHandler(e);
          }}
          value={form.lastName}
        />
      </div>
      <div
        className="flex gap-5 max-tablet:flex-col"
        data-aos="fade"
        data-aos-delay={200}
      >
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={(e) => {
            formHandler(e);
          }}
          value={form.email}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={(e) => {
            formHandler(e);
          }}
          value={form.phone}
        />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        data-aos="fade"
        data-aos-delay={300}
        onChange={(e) => {
          formHandler(e);
        }}
        value={form.message}
      ></textarea>
      <button
        type="submit"
        className="btn btn-primary"
        data-aos="fade"
        data-aos-delay={400}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
