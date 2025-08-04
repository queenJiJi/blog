"use client";

import useModal from "@/app/hooks/useModal";
import React, { useState, useEffect } from "react";
import AlertModal from "./AlertModal";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

type Form = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { isOpen, open, close } = useModal();
  const [pendingData, setPendingData] = useState<Form | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({});

  // 3초 뒤에 다시 폼으로 복귀
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleCancel = () => {
    close();
    setPendingData(null);
  };

  const handleConfirm = () => {
    if (!pendingData) return;
    console.log("Form submitted:", pendingData);
    setSubmitted(true);
    reset();
    close();
    setPendingData(null);
  };

  const onValid = (data: Form) => {
    setPendingData(data);
    open();
  };

  return (
    <div className="w-full md:w-1/2">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-white rounded-3xl shadow-lg p-10 relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="submitted"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h2
                className="text-3xl font-bold text-gray-800 mb-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                감사합니다. ✨
              </motion.h2>
              <p className="text-gray-600">
                문의사항이 성공적으로 전송되었습니다.📨
              </p>
              <p className="text-gray-600">
                작성해주신 이메일로 곧 답변드리겠습니다.☺️
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onValid)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Me
              </h2>
              <div>
                <label className="block text-sm mb-1">이름:</label>
                <input
                  {...register("name", { required: "이름을 입력해주세요." })}
                  type="text"
                  id="name"
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-none focus:ring-2 focus:ring-pink-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">이메일:</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "이메일을 입력해주세요.",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "올바른 이메일 형식이 아닙니다.",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-none focus:ring-2 focus:ring-pink-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm mb-1">문의 내용:</label>
                <textarea
                  rows={5}
                  id="message"
                  {...register("message", {
                    required: "문의 내용을 입력해주세요.",
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-100 border-none focus:ring-2 focus:ring-pink-300"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                전송
              </button>
            </motion.form>
          )}
        </AnimatePresence>
        <AlertModal
          isOpen={isOpen}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          message={"전송을 완료하시겠습니까?"}
        />
      </motion.div>
    </div>
  );
}
