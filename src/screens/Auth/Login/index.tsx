import React, { useRef } from "react";
import {
  Container,
  Footer,
  FormContainer,
  LogoContainer,
  WrapperContainer,
} from "./styles";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { EditText } from "../../../components/EditText";
import { Heading } from "../../../components/Heading";
import { Button } from "../../../components/Button";
import { Switch, TextInput } from "react-native-gesture-handler";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuthHook } from "../../../context/AuthContext";
import Logo from "../../../assets/ilustrations/logoEventsColor.svg";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});

export function Login() {
  const theme = useTheme();
  const { fetchLogin } = useAuthHook();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetchLogin({email: values.email, password: values.password});
    },
  });

  const refPasswordInput = useRef<TextInput | null>();

  return (
    <Container>
      <WrapperContainer>
        <FormContainer>
          <LogoContainer>
          <Logo width={120} height={120} />
            <Heading type="h4">Bem vindo, novamente!</Heading>
          </LogoContainer>

          <Text
            type="defaultBold"
            color={theme.colors.font_grey}
            style={{ marginTop: 60 }}
          >
            E-mail
          </Text>
          <EditText
            value={formik.values.email}
            onChangeText={formik.handleChange("email")}
            error={formik.errors.email}
            placeholder="name@example.com"
            returnKeyType="next"
            onSubmitEditing={() => refPasswordInput.current?.focus()}
            blurOnSubmit={false}
          />
          <Text
            type="defaultBold"
            color={theme.colors.font_grey}
            style={{ marginTop: 30 }}
          >
            Senha
          </Text>
          <EditText
            ref={refPasswordInput}
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            error={formik.errors.password}
            placeholder="Enter your password"
            secureTextEntry={true}
            returnKeyType="done"
            onSubmitEditing={() => formik.submitForm()}
            blurOnSubmit={false}
          />
        </FormContainer>
        <Footer>
          <Button
            type="default"
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.white}
            onPress={() => formik.submitForm()}
          >
            Logar
          </Button>
        </Footer>
      </WrapperContainer>
    </Container>
  );
}
