import React, { useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const types = {
        success: {
            icon: FaCheckCircle,
            bgColor: 'bg-green-50',
            borderColor: 'border-green-500',
            textColor: 'text-green-800',
            iconColor: 'text-green-500'
        },
        error: {
            icon: FaExclamationCircle,
            bgColor: 'bg-red-50',
            borderColor: 'border-red-500',
            textColor: 'text-red-800',
            iconColor: 'text-red-500'
        },
        info: {
            icon: FaInfoCircle,
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-500',
            textColor: 'text-blue-800',
            iconColor: 'text-blue-500'
        }
    };

    const config = types[type] || types.success;
    const Icon = config.icon;

    return (
        <div
            className={`fixed top-6 right-6 z-50 min-w-[320px] max-w-md ${config.bgColor} ${config.borderColor} border-l-4 rounded-lg shadow-xl p-4 animate-slide-in-right`}
            role="alert"
            aria-live="polite"
        >
            <div className="flex items-start gap-3">
                <Icon className={`${config.iconColor} text-xl flex-shrink-0 mt-0.5`} />
                <div className="flex-1">
                    <p className={`${config.textColor} font-medium text-sm leading-relaxed`}>
                        {message}
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className={`${config.textColor} hover:opacity-70 transition-opacity duration-200 flex-shrink-0`}
                    aria-label="Close notification"
                >
                    <FaTimes className="text-sm" />
                </button>
            </div>
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gray-200 rounded-b-lg overflow-hidden w-full">
                <div
                    className={`h-full ${config.borderColor.replace('border-', 'bg-')} animate-progress`}
                    style={{ animationDuration: `${duration}ms` }}
                />
            </div>
        </div>
    );
};

// Toast Container Component
export const ToastContainer = ({ toasts, removeToast }) => {
    return (
        <div className="fixed top-6 right-6 z-50 space-y-3">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                    duration={toast.duration}
                />
            ))}
        </div>
    );
};

// Custom hook for toast management
export const useToast = () => {
    const [toasts, setToasts] = React.useState([]);

    const addToast = (message, type = 'success', duration = 5000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type, duration }]);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return { toasts, addToast, removeToast };
};

export default Toast;
