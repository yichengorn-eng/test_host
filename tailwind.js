tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                brand: {
                    light: '#2dd4bf', // Teal-400
                    DEFAULT: '#0d9488', // Teal-600
                    dark: '#115e59', // Teal-800
                },
                dark: {
                    bg: '#0f172a', // Slate-900 (Main Background)
                    card: '#1e293b', // Slate-800 (Card Background)
                    text: '#f8fafc', // Slate-50 (Text Color)
                }
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            }
        }
    }
}