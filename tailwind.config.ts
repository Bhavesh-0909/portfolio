import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function flattenColors(
  colors: Record<string, any>,
  prefix = ''
): Record<string, string> {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === 'object') {
      Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
    } else {
      acc[`${prefix}${key}`] = value;
    }
    return acc;
  }, {} as Record<string, string>);
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColors(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
