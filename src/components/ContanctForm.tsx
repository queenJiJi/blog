"use client";

import React, { ChangeEvent, useState } from "react";

type Form = {
  name: string;
  email: string;
  message: string;
};

export default function ContanctForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send the data to a server
    console.log("Form submitted:", form);
    // Reset the form after submission
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-md mt-6 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={submitHandler} className="flex flex-col space-y-4 w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Me </h2>
        <label htmlFor="name">이름: </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoFocus
          value={form.name}
          onChange={onChangeHandler}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <label htmlFor="email">이메일: </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={form.email}
          onChange={onChangeHandler}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <label htmlFor="message">문의 내용: </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChangeHandler}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white font-bold py-3 rounded-lg hover:bg-pink-600 transition"
        >
          전송
        </button>
      </form>
    </div>
  );
}
