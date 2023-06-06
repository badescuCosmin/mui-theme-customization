import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

export const lightModePalette: PaletteOptions = {
  primary: {
    main: "#f44336",
    light: "#f6685e",
    dark: "#aa2e25",
    darker: "#512da8",
  },
  secondary: {
    main: "#ffea00",
    light: "#ffee33",
    dark: "#b2a300",
  },
  neutral: {
    main: "#5d4037",
    light: "#aea09b",
    dark: "#4a332c",
  },
};

export const darkModePalette: PaletteOptions = {
  primary: {
    main: "#0A1172",
    light: "#63C5DA",
    dark: "#3944BC",
    darker: "#3944BC",
  },
  secondary: {
    main: "#097969",
    light: "#90EE90",
    dark: "#00A36C",
  },
  neutral: {
    main: "#805158",
    light: "#73494f",
    dark: "#5a393e",
  },
};
