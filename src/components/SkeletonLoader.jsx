import React from 'react';

// Base Skeleton Component
const Skeleton = ({ className = '', variant = 'text' }) => {
    const variants = {
        text: 'h-4 rounded',
        title: 'h-8 rounded',
        circle: 'rounded-full',
        rectangular: 'rounded-lg'
    };

    return (
        <div
            className={`bg-gray-200 animate-pulse ${variants[variant]} ${className}`}
            aria-hidden="true"
        />
    );
};

// Card Skeleton for Scheme Cards
export const SchemeCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 space-y-5">
            {/* Icon Skeleton */}
            <Skeleton variant="circle" className="w-16 h-16" />

            {/* Title Skeleton */}
            <Skeleton variant="title" className="w-3/4" />

            {/* Description Skeleton */}
            <div className="space-y-2">
                <Skeleton variant="text" className="w-full" />
                <Skeleton variant="text" className="w-full" />
                <Skeleton variant="text" className="w-2/3" />
            </div>

            {/* Benefits Skeleton */}
            <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-3">
                        <Skeleton variant="circle" className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <Skeleton variant="text" className="flex-1" />
                    </div>
                ))}
            </div>

            {/* Button Skeleton */}
            <Skeleton variant="rectangular" className="w-full h-12 mt-6" />
        </div>
    );
};

// Stats Card Skeleton
export const StatsCardSkeleton = () => {
    return (
        <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl border-2 border-blue-100 p-8 text-center space-y-4">
            <Skeleton variant="title" className="w-24 h-12 mx-auto" />
            <Skeleton variant="text" className="w-32 h-6 mx-auto" />
        </div>
    );
};

// Partner Logo Skeleton
export const PartnerLogoSkeleton = () => {
    return (
        <div className="bg-white rounded-xl border-2 border-gray-100 p-8 flex items-center justify-center">
            <Skeleton variant="rectangular" className="w-32 h-16" />
        </div>
    );
};

// Certification Card Skeleton
export const CertificationCardSkeleton = () => {
    return (
        <div className="bg-white rounded-xl border-2 border-gray-100 p-8 text-center space-y-5">
            <Skeleton variant="circle" className="w-16 h-16 mx-auto" />
            <Skeleton variant="title" className="w-40 h-6 mx-auto" />
            <div className="space-y-2">
                <Skeleton variant="text" className="w-full" />
                <Skeleton variant="text" className="w-3/4 mx-auto" />
            </div>
        </div>
    );
};

// Grid Skeleton (for multiple cards)
export const GridSkeleton = ({
    count = 3,
    component: Component = SchemeCardSkeleton,
    columns = 3
}) => {
    const gridCols = {
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <div className={`grid ${gridCols[columns]} gap-8`}>
            {Array.from({ length: count }).map((_, i) => (
                <Component key={i} />
            ))}
        </div>
    );
};

// Page Skeleton (for full page loading)
export const PageSkeleton = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Skeleton */}
                <div className="text-center mb-20 space-y-6">
                    <Skeleton variant="title" className="w-3/4 h-16 mx-auto" />
                    <Skeleton variant="text" className="w-2/3 h-6 mx-auto" />
                    <div className="flex gap-4 justify-center mt-8">
                        <Skeleton variant="rectangular" className="w-40 h-12" />
                        <Skeleton variant="rectangular" className="w-40 h-12" />
                    </div>
                </div>

                {/* Content Skeleton */}
                <GridSkeleton count={6} columns={3} />
            </div>
        </div>
    );
};

export default Skeleton;
