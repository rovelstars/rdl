function setThemeColor(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        branding: setThemeColor("--branding"),
        bg: setThemeColor("--bg"),
        "bg-lighter": setThemeColor("--bg-lighter"),
        success: setThemeColor("--success"),
        warning: setThemeColor("--warning"),
        blush: setThemeColor("--blush"),
        "darker-delta": setThemeColor("--darker-delta"),
        rain: setThemeColor("--rain"),
        "scary-dark": setThemeColor("--scary-dark"),
        skyline: setThemeColor("--skyline"),
        bsod: setThemeColor("--bsod"),
        "white-text": setThemeColor("--white-text"),
        "black-text": setThemeColor("--black-text"),
        "text-darker": setThemeColor("--text-darker"),
      },
      fontSize: {
        "3xl": "1.7rem",
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      fontFamily: {
        display: ['"Founders Grotesk"', "arial"],
        body: ["Quicksand", "arial"],
      },
    },
  },
  variants: {},
  plugins: [],
  darkMode: "class",
};
