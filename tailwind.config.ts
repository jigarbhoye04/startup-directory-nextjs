/** @type {import('tailwindcss').Config} */
import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class", "dark"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
        "./styles/**/*.{css,scss}", 
    ],    
    theme: {
		 //extending the themes so that we can provide specific variables to use later in code
        extend: {
            screens: {
                xs: "475px", //ex: xs-max-width
            },
            colors: {
                primary: {
                    "50": "#EBF4FF", // Lightest blue
                    "100": "#D1E9FF",
                    "200": "#A8D8FF",
                    "300": "#79C1FF",
                    "400": "#47A9FF",
                    DEFAULT: "#007BFF", // Bold, professional blue
                    "600": "#005FCC",
                    "700": "#00449A",
                    "800": "#002B66",
                    "900": "#001533",
                },
                black: {
                    "100": "#333333",
                    "200": "#141413",
                    "300": "#7D8087",
                    DEFAULT: "#000000",
                },
                secondary: {
                    "50": "#FFF7E5", // Light beige
                    "100": "#FFEACC",
                    "200": "#FFDA99",
                    "300": "#FFCA66",
                    "400": "#FFBA33",
                    DEFAULT: "#FFA500", // Professional orange
                    "600": "#CC8400",
                    "700": "#996300",
                    "800": "#664200",
                    "900": "#332100",
                },
                neutral: {
                    "50": "#F9FAFB", // Lightest neutral
                    "100": "#F3F4F6",
                    "200": "#E5E7EB",
                    "300": "#D1D5DB",
                    "400": "#9CA3AF",
                    DEFAULT: "#6B7280", // Professional gray
                    "600": "#4B5563",
                    "700": "#374151",
                    "800": "#1F2937",
                    "900": "#111827", // Darkest neutral
                },
                success: {
                    "50": "#ECFDF5", // Light green
                    "100": "#D1FAE5",
                    "200": "#A7F3D0",
                    "300": "#6EE7B7",
                    DEFAULT: "#10B981", // Vibrant green
                    "500": "#059669",
                    "600": "#047857",
                    "700": "#065F46",
                    "800": "#064E3B",
                    "900": "#022C22",
                },
                danger: {
                    "50": "#FEF2F2", // Light red
                    "100": "#FEE2E2",
                    "200": "#FECACA",
                    "300": "#FCA5A5",
                    DEFAULT: "#EF4444", // Strong red
                    "500": "#DC2626",
                    "600": "#B91C1C",
                    "700": "#991B1B",
                    "800": "#7F1D1D",
                    "900": "#651313",
                },
                warning: {
                    "50": "#FFFBEB", // Light yellow
                    "100": "#FEF3C7",
                    "200": "#FDE68A",
                    "300": "#FCD34D",
                    DEFAULT: "#F59E0B", // Vibrant yellow
                    "500": "#D97706",
                    "600": "#B45309",
                    "700": "#92400E",
                    "800": "#78350F",
                    "900": "#451A03",
                },
                white: {
                    DEFAULT: "#FFFFFF", // White remains consistent
                },
            },
            fontFamily: {
                "work-sans": ["var(--font-work-sans)"],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                100: "2px 2px 0px 0px rgb(0, 0, 0)",
                200: "2px 2px 0px 2px rgb(0, 0, 0)",
                300: "2px 2px 0px 2px rgb(238, 43, 105)",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;