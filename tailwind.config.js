const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        colors: {
            'pinkprev': '#2C266C',
            'yellowprev': '#FDE428',
            'yellowlog': '#F6C058',
            gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
            },
            blueprev: {
                50: '#0066CC',
                100: '#005CB8',
                200: '#0052A3',
                300: '#00478F',
                400: '#003D7A',
                500: '#003366',
                600: '#002952',
                700: '#001F3D',
                800: '#001429',
                900: '#001429',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
