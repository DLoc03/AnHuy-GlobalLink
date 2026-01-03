import React, { useEffect, useState } from "react";

const TYPE_STYLE = {
  success: "border-green-400 bg-green-50 text-green-700",
  error: "border-red-400 bg-red-50 text-red-700",
  info: "border-blue-400 bg-blue-50 text-blue-700",
};

function Alert({ message, type = "success", duration = 3000, onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(percent);
    }, 16);

    const timeout = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`animate-slide-in fixed bottom-6 left-6 z-50 w-[320px] overflow-hidden rounded-2xl border shadow-lg ${TYPE_STYLE[type]} `}
    >
      <div className="px-4 py-3 text-sm font-medium">{message}</div>

      {/* Progress line */}
      <div className="h-1 w-full bg-black/10">
        <div
          className="h-full bg-current transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default Alert;
