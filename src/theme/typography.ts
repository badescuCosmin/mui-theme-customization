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
    fontFamily: "cursive",
    fontSize: 50,
  },
  poster: {
    fontSize: "4rem",
  },
  subtitle1: {
    fontSize: 11,
  },
  h3: undefined,
};
