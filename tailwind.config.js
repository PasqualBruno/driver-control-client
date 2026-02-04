/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ["PlusJakartaSans_400Regular"],
        medium: ["PlusJakartaSans_500Medium"],
        bold: ["PlusJakartaSans_700Bold"],
        sans: ["PlusJakartaSans_400Regular"],
      },
      colors: {
        background: "rgb(var(--background))",
        card: "rgb(var(--card))",

        // Configuração de Texto Atualizada
        txt: {
          primary: "rgb(var(--text-primary))", // Laranja (Sua marca)
          title: "rgb(var(--text-title))", // Preto Forte / Branco (Títulos)
          body: "rgb(var(--text-body))", // Cinza Escuro / Cinza Claro (Texto comum)

          // O DEFAULT permite usar apenas "text-txt".
          // Apontei para "body" pois é o mais seguro para textos gerais.
          DEFAULT: "rgb(var(--text-body))",

          secondary: "rgb(var(--text-secondary))", // Cinza Claro (Legendas)
        },

        primary: "rgb(var(--primary))",
        border: "rgb(var(--border))",
      },
    },
  },
  plugins: [],
};
