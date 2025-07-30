"use client";

import useModal from "@/app/hooks/useModal";
import React, { ChangeEvent, useState } from "react";
import AlertModal from "./AlertModal";

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

  const { isOpen, open, close } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCancel = () => {
    // 취소버튼 눌렀을 시
    setIsSubmitted(false);
    close();
  };

  const handleConfirm = () => {
    // 확인버튼 눌렀을 시
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", message: "" });
    setIsSubmitted(false);
    close();
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e: React.FormEvent) => {
    // 전송버튼 눌렀을 시
    e.preventDefault();
    setIsSubmitted(true);
    open(); // 확인 모달 열기
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
          onClick={open}
          className="bg-pink-500 text-white font-bold py-3 rounded-lg hover:bg-pink-600 transition"
        >
          전송
        </button>
      </form>
      <AlertModal
        isOpen={isOpen}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        message={"전송을 완료하시겠습니까?"}
      />
    </div>
  );
}
