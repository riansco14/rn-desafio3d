import React from "react";
import { Container } from "./styles";
import { TextInputProps, TextInput } from "react-native";
import { useTheme } from "styled-components";
import { Text } from "../Text";

interface EditTextProps extends TextInputProps{
    error?: string
}

export const EditText = React.forwardRef(
  ({error, ...rest}: EditTextProps, ref: React.Ref<TextInput>) => {
    const theme = useTheme();
    return (
      <>
        <Container
          ref={ref}
          placeholderTextColor={theme.colors.placeholder_grey}
          {...rest}
        ></Container>
        {error ? (
          <Text type="small" color={theme.colors.red} style={{marginTop: 6, fontWeight: "bold"}}>
            {error}
          </Text>
        ) : null}
      </>
    );
  }
);
