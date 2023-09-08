import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/modules/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary-50": "linear-gradient(to right bottom, var(--color-primary-start-50), var(--color-primary-end-50))",
        "gradient-primary-100": "linear-gradient(to right bottom, var(--color-primary-start-100), var(--color-primary-end-100))",
        "gradient-primary-200": "linear-gradient(to right bottom, var(--color-primary-start-200), var(--color-primary-end-200))",
        "gradient-primary-300": "linear-gradient(to right bottom, var(--color-primary-start-300), var(--color-primary-end-300))",
        "gradient-primary-400": "linear-gradient(to right bottom, var(--color-primary-start-400), var(--color-primary-end-400))",
        "gradient-primary-500": "linear-gradient(to right bottom, var(--color-primary-start-500), var(--color-primary-end-500))",
        "hero-pattern": "url('/public/background.png')",
      },
      backgroundColor: {
        "gray-transparent": "rgba(255, 255, 255, 0.10)",
      },
      colors: {
        secondary: {
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
        },
      },
      boxShadow: {
        "green-shadow-xs": "0px 1px 2px 0px rgba(56, 198, 130, 0.05)",
        "green-shadow-sm": "0px 1px 3px 0px rgba(56, 198, 130, 0.1)",
        "green-shadow-md": "0px 1px 4px 0px rgba(56, 198, 130, 0.15)",
        "green-shadow-lg": "0px 1px 8px 0px rgba(56, 198, 130, 0.2)",
        "green-shadow-xl": "0px 1px 12px 0px rgba(56, 198, 130, 0.25)",
        "green-shadow-2xl": "0px 24px 48px -12px rgba(56, 198, 130, 0.18)",
        "green-shadow-3xl": "0px 1px 4px 0px rgba(56, 198, 130, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config
