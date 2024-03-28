import React from "react";
import { Container, Wrapper } from "./styles";
import { RadioButtonIcon } from "../RadioButtonIcon";
import { Text } from "../Text";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";
import { Icon, IconProps } from "../Icon";

interface RadioButtonCustom extends TouchableOpacityProps {
  value: string;
  nameIcon: IconProps["name"];
  valueState?: string;
  price: string;
  iconWidth?: number;
  iconHeight?: number;
}

export function RadioButtonCustom({
  value,
  nameIcon,
  valueState,
  price,
  onPress,
  iconWidth = 40,
  iconHeight = 20,
}: RadioButtonCustom) {
  const theme = useTheme();
  return (
    <Container onPress={onPress}>
      <RadioButtonIcon checked={valueState === value} />
      <Wrapper>
        <Icon name={nameIcon} width={iconWidth} height={iconHeight} color={theme.colors.primary} />
      </Wrapper>
    </Container>
  );
}
