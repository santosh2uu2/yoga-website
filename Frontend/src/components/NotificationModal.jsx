import React from "react";

function NotificationModal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 shadow-lg w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p>{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default NotificationModal;
