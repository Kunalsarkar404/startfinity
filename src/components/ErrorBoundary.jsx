import React from 'react';
import { FaExclamationTriangle, FaHome, FaRedo } from 'react-icons/fa';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to error reporting service
        console.error('Error caught by boundary:', error, errorInfo);

        this.setState({
            error,
            errorInfo
        });

        // You can also log to an error reporting service here
        // Example: logErrorToService(error, errorInfo);
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
                    <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border-2 border-red-100 p-12 text-center">
                        {/* Error Icon */}
                        <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse">
                            <FaExclamationTriangle className="text-4xl text-red-600" />
                        </div>

                        {/* Error Message */}
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Oops! Something Went Wrong
                        </h1>

                        <p className="text-lg text-gray-600 mb-8">
                            We're sorry for the inconvenience. The page encountered an unexpected error.
                        </p>

                        {/* Development Error Details */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8 text-left">
                                <h3 className="font-bold text-red-900 mb-3 flex items-center">
                                    <span className="mr-2">🐛</span> Development Error Details
                                </h3>
                                <div className="space-y-2">
                                    <div>
                                        <strong className="text-red-800 text-sm">Error:</strong>
                                        <pre className="text-xs text-red-700 mt-1 overflow-auto bg-white p-3 rounded">
                                            {this.state.error.toString()}
                                        </pre>
                                    </div>
                                    {this.state.errorInfo && (
                                        <div>
                                            <strong className="text-red-800 text-sm">Component Stack:</strong>
                                            <pre className="text-xs text-red-700 mt-1 overflow-auto bg-white p-3 rounded max-h-40">
                                                {this.state.errorInfo.componentStack}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={this.handleReset}
                                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                <FaRedo className="text-lg" />
                                Try Again
                            </button>

                            <a
                                href="/"
                                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                            >
                                <FaHome className="text-lg" />
                                Go Home
                            </a>
                        </div>

                        {/* Support Message */}
                        <p className="text-sm text-gray-500 mt-8">
                            If this problem persists, please contact our support team at{' '}
                            <a href="mailto:support@startfinity.com" className="text-primary-600 hover:underline font-medium">
                                support@startfinity.com
                            </a>
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

// Functional wrapper for easier usage
export const withErrorBoundary = (Component, fallback) => {
    return (props) => (
        <ErrorBoundary fallback={fallback}>
            <Component {...props} />
        </ErrorBoundary>
    );
};

export default ErrorBoundary;
