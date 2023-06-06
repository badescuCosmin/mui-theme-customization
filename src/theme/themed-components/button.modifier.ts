import { Components, Theme } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    variant: "primary",
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => {
      const {
        palette: {
          primary: { dark },
        },
      } = theme;
      return {
        borderRadius: 20,
        width: 300,
        border: `1px solid ${dark}`,
      };
    },
  },
  variants: [
    {
      props: { variant: "primary" },
      style: ({ theme }) => {
        const {
          palette: {
            mode,
            primary: { dark, light },
            getContrastText,
            text: { primary },
          },
        } = theme;
        return {
          backgroundColor: light,
          ":hover": {
            backgroundColor: dark,
            color: mode === "light" ? getContrastText(primary) : primary,
          },
        };
      },
    },
    {
      props: { variant: "secondary" },
      style: ({ theme }) => {
        const {
          palette: {
            secondary: { dark },
          },
        } = theme;
        return {
          borderRadius: 5,
          width: 200,
          ":hover": {
            backgroundColor: dark,
          },
        };
      },
    },
  ],
};
