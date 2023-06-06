declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    xs: false;
  }
}

export const breakpoints = {
  values: {
    xs: false,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 15232,
    tablet: 640,
    mobile: 500,
  },
};
