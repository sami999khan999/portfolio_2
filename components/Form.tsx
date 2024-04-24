"use client";

import React, { ChangeEvent, useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const formHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form action="" className="space-y-5">
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
