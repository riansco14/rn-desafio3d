import React from "react";
import { Container } from "./styles";
import { Heading } from "../../../components/Heading";

import WelcomePeople from "../../../assets/ilustrations/welcomePeople.svg";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../../assets/ilustrations/logoEventsColor.svg";

export function Welcome() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate("Login");
  }


  return (
    <Container style={{paddingTop: 20}}>
      <Logo width={120} height={120} />
      <Heading type="h2" style={{ marginTop: 0, color: theme.colors.primary }}>
        Bem vindo!
      </Heading>
      <Text
        type="small"
        color={theme.colors.font_grey}
        style={{ marginTop: 12 }}
      >
        Brinque com suas formas 3D favoritas!
      </Text>
      <WelcomePeople width={300} height={300} style={{ marginTop: 60 }} />

      <Button
        type="default"
        backgroundColor={theme.colors.primary}
        textColor={theme.colors.white}
        style={{ marginTop: 100 }}
        onPress={handleLogin}
      >
        Logar
      </Button>
    </Container>
  );
}
