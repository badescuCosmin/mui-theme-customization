import MuiButton from "@mui/material/Button";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

interface ButtonProps extends Omit<MuiButtonProps, "color" | "variant"> {
  variant?: "primary" | "secondary";
}

export const Button = ({ ...props }: ButtonProps) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};
