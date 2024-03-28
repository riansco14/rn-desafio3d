import React from "react";
import theme from "../../config/styles/theme";

import Home from "../../assets/icons/home.svg";
import User from "../../assets/icons/user.svg";
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import ChevronRight from "../../assets/icons/chevron_right.svg";
import ChevronDown from "../../assets/icons/chevron_down.svg";
import Angle from "../../assets/icons/angle.svg";
import Cube from "../../assets/icons/cube.svg";
import Cone from "../../assets/icons/cone.svg";
import Deca from "../../assets/icons/deca.svg";

export enum IconNames {
  home = "home",
  user = "user",
  arrow_left = "arrow_left",
  chevron_right = "chevron_right",
  chevron_down = "chevron_down",
  angle = "angle",
  cube = "cube",
  cone = "cone",
  deca = "deca",
}

type IconNamesType = `${IconNames}`;

export interface IconProps {
  name: IconNamesType;
  color?: string;
  width?: number;
  height?: number;
}

export function Icon({
  name = IconNames.home,
  color = theme.colors.black,
  width = 20,
  height = 20,
}: IconProps) {
  switch (name) {
    case IconNames.home:
      return <Home color={color} width={width} height={height} />;
    case IconNames.user:
      return <User color={color} width={width} height={height} />;
    case IconNames.arrow_left:
      return <ArrowLeft color={color} width={width} height={height} />;
    case IconNames.chevron_right:
      return <ChevronRight color={color} width={width} height={height} />;
    case IconNames.chevron_down:
      return <ChevronDown color={color} width={width} height={height} />;
    case IconNames.angle:
      return <Angle color={color} width={width} height={height} />;
    case IconNames.cube:
      return <Cube color={color} width={width} height={height} />;
    case IconNames.cone:
      return <Cone color={color} width={width} height={height} />;
    case IconNames.deca:
      return <Deca color={color} width={width} height={height} />;
  }
}
