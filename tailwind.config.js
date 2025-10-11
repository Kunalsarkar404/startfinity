/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                accent: {
                    orange: '#ff6b35',
                    yellow: '#fbbf24',
                    green: '#10b981',
                    teal: '#14b8a6',
                },
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                heading: ['Inter', 'sans-serif'],
            },
            fontSize: {
                // Mobile-first responsive typography
                'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
                'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
                '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
                '5xl': ['3rem', { lineHeight: '1.1' }],         // 48px
                '6xl': ['3.75rem', { lineHeight: '1.1' }],      // 60px
                '7xl': ['4.5rem', { lineHeight: '1.1' }],       // 72px
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0em',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.06)',
                'large': '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
                'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            },
            borderRadius: {
                'sm': '0.375rem',   // 6px
                'DEFAULT': '0.5rem', // 8px
                'md': '0.5rem',      // 8px
                'lg': '0.75rem',     // 12px
                'xl': '1rem',        // 16px
                '2xl': '1.5rem',     // 24px
                '3xl': '2rem',       // 32px
            },
            spacing: {
                // Systematic 4px grid system
                '0': '0px',
                '0.5': '0.125rem',  // 2px
                '1': '0.25rem',     // 4px
                '1.5': '0.375rem',  // 6px
                '2': '0.5rem',      // 8px
                '2.5': '0.625rem',  // 10px (avoid if possible)
                '3': '0.75rem',     // 12px
                '3.5': '0.875rem',  // 14px (avoid if possible)
                '4': '1rem',        // 16px ✓ Base unit
                '5': '1.25rem',     // 20px (avoid if possible)
                '6': '1.5rem',      // 24px ✓
                '7': '1.75rem',     // 28px (avoid if possible)
                '8': '2rem',        // 32px ✓
                '9': '2.25rem',     // 36px (avoid if possible)
                '10': '2.5rem',     // 40px (avoid if possible)
                '11': '2.75rem',    // 44px (avoid if possible)
                '12': '3rem',       // 48px ✓
                '14': '3.5rem',     // 56px (avoid if possible)
                '16': '4rem',       // 64px ✓ Section padding
                '20': '5rem',       // 80px ✓
                '24': '6rem',       // 96px ✓
                '28': '7rem',       // 112px (avoid if possible)
                '32': '8rem',       // 128px ✓
                '36': '9rem',       // 144px
                '40': '10rem',      // 160px
                '44': '11rem',      // 176px
                '48': '12rem',      // 192px
                '52': '13rem',      // 208px
                '56': '14rem',      // 224px
                '60': '15rem',      // 240px
                '64': '16rem',      // 256px
                '72': '18rem',      // 288px
                '80': '20rem',      // 320px
                '96': '24rem',      // 384px
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
