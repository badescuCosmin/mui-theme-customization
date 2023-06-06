declare module "@mui/material/styles" {
  interface Theme {
    spacing: (s: SpacerIndex) => number;
  }
  interface ThemeOptions {
    spacing: (s: SpacerIndex) => number;
  }
}

export type SpacerIndex = keyof typeof spaces;

const spaces = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 30,
  6: 100,
};

export const spacing = (index: SpacerIndex) => {
  const scalingFactor = 1.5;
  return spaces[index] * scalingFactor;
};
