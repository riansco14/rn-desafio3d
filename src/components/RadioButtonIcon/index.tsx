import React from "react";
import theme from "../../config/styles/theme";
import Checked from "../../assets/icons/components/radio/radio_checked.svg";
import Unchecked from "../../assets/icons/components/radio/radio_unchecked.svg";

export interface IconProps {
  checked: boolean;
  color?: string;
}

export function RadioButtonIcon({
  checked = false,
  color = theme.colors.black,
}: IconProps) {
  if (checked)
    return <Checked color={color}  />;
  return <Unchecked color={color}  />;
}
