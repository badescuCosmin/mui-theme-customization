import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h3: false;
  }
}

export const typography: TypographyOptions = {
  fontFamily: "Pacifico",
  h1: {
    fontFamily: "sans-serif",
    fontSize: 50,
  },
  poster: {
    fontSize: 30,
  },
  subtitle1: {
    fontSize: 21,
  },
  h3: undefined,
};
