"use client";

import useModal from "@/app/hooks/useModal";
import React, { ChangeEvent, useState } from "react";
import AlertModal from "./AlertModal";
import { useForm } from "react-hook-form";

type Form = {
  name: string;
  email: string;
  message: string;
};

export default function ContanctForm() {
  // const [form, setForm] = useState<Form>({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const { isOpen, open, close } = useModal();
  const [pendingData, setPendingData] = useState<Form | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    // defaultValues: form,
  });

  // 취소버튼 눌렀을 시
  const handleCancel = () => {
    close();
    setPendingData(null);
  };

  // 확인버튼 눌렀을 시
  const handleConfirm = () => {
    if (!pendingData) return;

    console.log("Form submitted:", pendingData);
    reset(); // 폼 초기화
    close(); // 모달 닫기
    setPendingData(null);
  };

  const onValid = (data: Form) => {
    setPendingData(data); // 임시저장
    open(); //모달 열기
  };

  return (
    <div className="w-full max-w-md mt-6 p-6 bg-white rounded-lg shadow-md">
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col space-y-4 w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Me </h2>
        <label htmlFor="name">이름: </label>
        <input
          {...register("name", { required: "이름을 입력해주세요. " })}
          type="text"
          id="name"
          // name="name"
          // required
          autoFocus
          // value={form.name}
          // onChange={onChangeHandler}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
        <label htmlFor="email">이메일: </label>
        <input
          type="email"
          id="email"
          // name="email"
          // required
          // value={form.email}
          // onChange={onChangeHandler}
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <label htmlFor="message">문의 내용: </label>
        <textarea
          rows={10}
          id="message"
          {...register("message", { required: "문의 내용을 입력해주세요." })}
          // name="message"
          // required
          // value={form.message}
          // onChange={onChangeHandler}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
        <button
          type="submit"
          // onClick={open}
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
