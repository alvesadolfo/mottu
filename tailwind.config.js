import forms from "@tailwindcss/forms";
import typograhpy from "@tailwindcss/typography";
import animate from "tailwindcss-animate";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        black: {
          DEFAULT: "hsl(var(--klub-text-default))",
          foreground: "hsl(var(--klub-text-default))",
        },
        gray: {
          DEFAULT: "hsl(var(--light-gray))",
          foreground: "hsl(var(--medium-gray))",
        },
        darkgray: {
          DEFAULT: "hsl(var(--dark-gray))",
        },
        purple: {
          DEFAULT: "hsl(var(--light-purple))",
          foreground: "hsl(var(--light-purple))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--danger-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          "chat-message": "hsl(var(--background-chat-message))",
        },
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        xl: `calc(var(--radius) + 4px)`,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    forms,
    typograhpy,
    animate,
    plugin(function ({ addVariant }) {
      addVariant("inbound", '&[data-direction="inbound"]');
    }),
    require("@tailwindcss/container-queries"),
  ],
};

export default config;
