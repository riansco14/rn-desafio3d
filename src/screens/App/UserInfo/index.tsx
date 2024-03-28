import React from "react";
import {
  AvatarContainer,
  ConfigButton,
  ConfigContainer,
  Container,
  Footer,
  UserConfigContainer,
} from "./styles";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { ButtonUnderlined } from "../../../components/ButtonUnderlined";
import { Icon } from "../../../components/Icon";
import { useAuthHook } from "../../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../components/Button";
import { useFetch } from "../../../hooks/app/userinfo/useFetch";

export function UserInfo() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { user, fetchLogout } = useAuthHook();
  const { currentData, fetchDelete } = useFetch();

  function handleLogout() {
    fetchLogout();
  }

  function handleNavigateToConfig() {
    navigation.navigate("EditShape");
  }

  return (
    <Container>
      <AvatarContainer>
        <Icon
          color={theme.colors.font_dark}
          name="user"
          width={80}
          height={80}
        />
        <Heading type="h6" style={{ marginTop: 16 }}>
          {user?.email ?? ""}
        </Heading>
      </AvatarContainer>

      <Heading type="h6" style={{ marginTop: 60, marginLeft: 16 }}>
        Configurações
      </Heading>

      <ConfigContainer>
        <ConfigButton onPress={() => handleNavigateToConfig()}>
          <Text type="small" color={theme.colors.black}>
            Configurações das formas
          </Text>
          <Icon
            name="chevron_right"
            color={theme.colors.font_dark}
            width={18}
            height={18}
          />
        </ConfigButton>
      </ConfigContainer>

      <Footer>
        {!!currentData ? (
          <UserConfigContainer>
            <Button
              backgroundColor={theme.colors.red}
              type="default"
              textColor={theme.colors.white}
              onPress={fetchDelete}
            >
              Apagar definições de usuário
            </Button>
          </UserConfigContainer>
        ) : null}

        <ButtonUnderlined
          type="default"
          textColor="black"
          onPress={handleLogout}
        >
          Logout
        </ButtonUnderlined>
      </Footer>
    </Container>
  );
}
