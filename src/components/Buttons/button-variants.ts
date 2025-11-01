import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // 🔴 Primary button (red)
        default:
          "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-400",

        // ⚫ Secondary button (black)
        secondary:
          "bg-black text-white hover:bg-gray-900 active:bg-gray-950 focus:ring-gray-700",

        // ⚠️ Destructive (error action)
        destructive:
          "bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 focus:ring-rose-400",

        // 🩶 Outline button
        outline:
          "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 active:bg-gray-200",

        // 👻 Ghost (subtle)
        ghost:
          "bg-transparent text-gray-800 hover:bg-gray-100 active:bg-gray-200",

        // 🔗 Link-style button
        link: "text-red-600 underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
