// src/components/BaseModal.jsx
import React from "react";

export default function BaseModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-50">
      {/* Modal Box */}
      {/* <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative animate-fadeIn"> */}
      <div className="bg-white rounded-xl shadow-lg md:h-[590px] h-[300px] w-full p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
