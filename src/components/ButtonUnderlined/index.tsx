import React from "react";
import { Container, TextButton } from "./styles";
import { useTheme } from "styled-components";

import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  textColor: string;
  type: "default" | "bold" | "filter";
}

export function ButtonUnderlined({
  children,
  type = "default",
  textColor,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  const buttonTextStyles = {
    default: {
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.regular,
    },
    bold: {
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.bold,
    },
    filter: {
      fontSize: theme.fontSizes.body_small,
      fontFamily: theme.fonts.medium,
    },
  };

  return (
    <Container backgroundColor={theme.colors.white} {...rest}>
      <TextButton
        textColor={textColor ? textColor : theme.colors.font_dark}
        fontFamily={buttonTextStyles[type].fontFamily}
        fontSize={buttonTextStyles[type].fontSize}
      >
        {children}
      </TextButton>
    </Container>
  );
}
