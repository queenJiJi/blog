"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiAlertCircle } from "react-icons/fi";

type AlertModalProps = {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  message: string;
};

export default function AlertModal({
  isOpen,
  onCancel,
  onConfirm,
  message,
}: AlertModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
        <div className="flex justify-center mb-4 text-pink-500 text-4xl">
          <FiAlertCircle />
        </div>
        <p className="text-gray-800 font-medium mb-6">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600"
          >
            확인
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
