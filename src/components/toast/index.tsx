// src/components/Toast/ToastContext.tsx
import React, { createContext, useContext, useState, type ReactNode } from "react";
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col space-y-3">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// ------------------ Toast Item ------------------

const ToastItem: React.FC<{ toast: Toast }> = ({ toast }) => {
  const iconMap = {
    success: <CheckCircle2 className="text-green-500" />,
    error: <XCircle className="text-red-500" />,
    info: <Info className="text-blue-500" />,
    warning: <AlertTriangle className="text-yellow-500" />,
  };

  const bgMap = {
    success: "bg-green-50 border-green-400",
    error: "bg-red-50 border-red-400",
    info: "bg-blue-50 border-blue-400",
    warning: "bg-yellow-50 border-yellow-400",
  };

  return (
    <div
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg shadow-md border-l-4 transition-all animate-slideIn ${bgMap[toast.type]}`}
    >
      {iconMap[toast.type]}
      <span className="text-gray-800 font-medium">{toast.message}</span>
    </div>
  );
};
