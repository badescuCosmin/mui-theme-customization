import MuiSwitch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const CustomSwitch = styled(MuiSwitch)<SwitchProps>(({ theme }) => {
  const {
    palette: { primary, neutral },
  } = theme;
  return {
    "& .MuiSwitch-thumb": {
      backgroundColor: primary.darker,
    },
    ".MuiSwitch-track": {
      backgroundColor: neutral.main,
    },
  };
});

export const Switch = (props: SwitchProps) => (
  <MuiSwitch
    {...props}
    sx={{
      ".MuiSwitch-thumb": { backgroundColor: "primary.light" },
    }}
  />
);

export const StyledSwitch = () => <CustomSwitch />;
