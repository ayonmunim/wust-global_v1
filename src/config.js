// Tailwind Config


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./src/app/**/*.{js,ts,jsx,tsx}", // Added for Next.js App Router
                "./src/components/**/*.{js,ts,jsx,tsx}", // Matches your current structure
                "./src/**/*.{js,jsx,ts,tsx}",
              ],
              theme: {
                extend: {
                  colors: {
                    primary: "#002f6c", // Matches your bg-color in App.css
                    action: "#2563eb",  // Used in your Apply Now buttons
                  },
                },
              },
              plugins: [],
}