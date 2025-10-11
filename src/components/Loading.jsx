import React from 'react';

// Spinner Component
export const Spinner = ({ size = 'md', color = 'primary' }) => {
    const sizes = {
        xs: 'w-4 h-4 border-2',
        sm: 'w-6 h-6 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
        xl: 'w-16 h-16 border-4'
    };

    const colors = {
        primary: 'border-primary-600 border-t-transparent',
        white: 'border-white border-t-transparent',
        gray: 'border-gray-400 border-t-transparent'
    };

    return (
        <div
            className={`${sizes[size]} ${colors[color]} rounded-full animate-spin`}
            role="status"
            aria-label="Loading"
        />
    );
};

// Loading Overlay
export const LoadingOverlay = ({ message = 'Loading...' }) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center min-w-[300px] animate-scale-in">
                <Spinner size="xl" color="primary" />
                <p className="mt-6 text-gray-700 font-semibold text-lg">{message}</p>
            </div>
        </div>
    );
};

// Inline Loading
export const InlineLoading = ({ message = 'Loading...', size = 'md' }) => {
    return (
        <div className="flex items-center justify-center gap-3 py-8">
            <Spinner size={size} color="primary" />
            <span className="text-gray-600 font-medium">{message}</span>
        </div>
    );
};

// Button Loading State
export const ButtonLoading = ({ loading, children, ...props }) => {
    return (
        <button
            {...props}
            disabled={loading || props.disabled}
            className={`${props.className} relative ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
            {loading && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <Spinner size="sm" color="white" />
                </span>
            )}
            <span className={loading ? 'invisible' : 'visible'}>{children}</span>
        </button>
    );
};

// Page Loading (Full page)
export const PageLoading = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
            <div className="text-center">
                <div className="relative inline-block mb-8">
                    {/* Outer ring */}
                    <div className="w-24 h-24 border-4 border-primary-200 rounded-full animate-ping absolute"></div>
                    {/* Inner spinner */}
                    <div className="w-24 h-24 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                </div>

                <div className="mb-3">
                    <img
                        src="/startfinity-logo.jpeg"
                        alt="STARTFINITY Logo"
                        className="h-8 w-auto mx-auto"
                    />
                </div>
                <p className="text-gray-600 animate-pulse">Loading your funding solutions...</p>
            </div>
        </div>
    );
};

// Progress Bar Loading
export const ProgressBar = ({ progress = 0, message = '' }) => {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="mb-3 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{message}</span>
                <span className="text-sm font-bold text-primary-600">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-full rounded-full transition-all duration-500 ease-out shadow-lg"
                    style={{ width: `${progress}%` }}
                >
                    <div className="h-full w-full bg-white/20 animate-shimmer"></div>
                </div>
            </div>
        </div>
    );
};

// Dot Loading (Simple)
export const DotLoading = ({ color = 'primary' }) => {
    const colors = {
        primary: 'bg-primary-600',
        white: 'bg-white',
        gray: 'bg-gray-600'
    };

    return (
        <div className="flex gap-1.5">
            <div className={`w-2 h-2 ${colors[color]} rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
            <div className={`w-2 h-2 ${colors[color]} rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
            <div className={`w-2 h-2 ${colors[color]} rounded-full animate-bounce`}></div>
        </div>
    );
};

export default Spinner;
