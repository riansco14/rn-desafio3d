import React, { useEffect, useState } from "react";
import {
  BackButton,
  ColorContainer,
  Container,
  Content,
  Form,
  Header,
  LoadingContainer,
  ObjectItem,
} from "./styles";
import { Slider } from "../../../components/Slider";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { Button } from "../../../components/Button";
import { RadioButtonCustom } from "../../../components/RadioButtonCustom";
import { RadioButtonGroup } from "../../../components/RadioButtonGroup";
import { RGBPicker } from "../../../components/RGBPicker";
import { useFetch } from "../../../hooks/app/editshape/useFetch";
import { Icon } from "../../../components/Icon";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

const DEFAULT_DATA = [
  { key: 0, shape: "cubo", color: "#fff", rotation: 0 },
  { key: 1, shape: "cubo", color: "#fff", rotation: 0 },
  { key: 2, shape: "cubo", color: "#fff", rotation: 0 },
];

export function EditShape() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [formArray, setFormArray] = useState([]);

  const setColorByIndex = (index, color: string) => {
    if (formArray[index].color != color)
      setFormArray((oldValue) => {
        const newValue = [...oldValue];
        const newObject = { ...newValue[index] };
        newObject["color"] = color;
        newValue[index] = newObject;
        return newValue;
      });
  };
  const setShapeByIndex = (index, shape: string) => {
    if (formArray[index].shape != shape)
      setFormArray((oldValue) => {
        const newValue = [...oldValue];
        const newObject = { ...newValue[index] };
        newObject["shape"] = shape;
        newValue[index] = newObject;
        return newValue;
      });
  };
  const setRotationByIndex = (index, rotation: number) => {
    if (formArray[index].rotation != rotation)
      setFormArray((oldValue) => {
        const newValue = [...oldValue];
        const newObject = { ...newValue[index] };
        newObject["rotation"] = rotation;
        newValue[index] = newObject;
        return newValue;
      });
  };

  const [modal, setModal] = useState({ formIndex: 0, showModal: false });
  const closeModal = () => setModal({ formIndex: 0, showModal: false });

  const { currentData, isLoadingCurrentData, fetchLoadCurrentData, fetchSave } =
    useFetch();

  useEffect(() => {
    fetchLoadCurrentData();
  }, []);

  useEffect(() => {
    if (isLoadingCurrentData === false && !!currentData) {
      setFormArray(currentData);
    } else {
      setFormArray(DEFAULT_DATA);
    }
  }, [isLoadingCurrentData]);

  async function handleSaveConfig() {
    await fetchSave(formArray);
    handleGoBack();
  }

  function handleGoBack() {
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon
            name="arrow_left"
            color={theme.colors.white}
            width={26}
            height={26}
          />
        </BackButton>
        <Heading
          type="h5"
          style={{
            flex: 1,
            textAlign: "center",
            color: theme.colors.white,
            fontFamily: theme.fonts.semibold,
            paddingRight: 48,
          }}
        >
          Configurar Formas
        </Heading>
      </Header>
      {isLoadingCurrentData ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadingContainer>
      ) : (
        <Content>
          {formArray.map((item, index) => (
            <ObjectItem key={item.key}>
              <Heading type="h5" style={{ color: theme.colors.font_grey }}>
                Objeto {item.key + 1}
              </Heading>
              <Form>
                <Text type="defaultBold" color={theme.colors.font_grey}>
                  Cor
                </Text>
                <ColorContainer style={{ backgroundColor: item.color }} />
                <Button
                  textColor={theme.colors.white}
                  type="filter"
                  backgroundColor={theme.colors.font_grey}
                  onPress={() =>
                    setModal({ formIndex: index, showModal: true })
                  }
                  style={{ paddingTop: 12, paddingBottom: 12, marginTop: 8 }}
                >
                  Escolher cor
                </Button>
                <Text
                  type="defaultBold"
                  color={theme.colors.font_grey}
                  style={{ marginTop: 16 }}
                >
                  Forma
                </Text>
                <RadioButtonGroup valueState={item.shape}>
                  <RadioButtonCustom
                    value="cubo"
                    price="Cubo"
                    nameIcon="cube"
                    iconHeight={64}
                    onPress={() => setShapeByIndex(index, "cubo")}
                  />
                  <RadioButtonCustom
                    value="cone"
                    price="Cone"
                    nameIcon="cone"
                    iconHeight={64}
                    onPress={() => setShapeByIndex(index, "cone")}
                  />
                  <RadioButtonCustom
                    value="deca"
                    price="Decaedro"
                    nameIcon="deca"
                    iconHeight={64}
                    onPress={() => setShapeByIndex(index, "deca")}
                  />
                </RadioButtonGroup>
                <Text
                  type="defaultBold"
                  color={theme.colors.font_grey}
                  style={{ marginTop: 16 }}
                >
                  Angulo
                </Text>
                <Slider
                  value={item.rotation}
                  setValue={(value) => setRotationByIndex(index, value)}
                />
              </Form>
            </ObjectItem>
          ))}
        </Content>
      )}

      <Button
        textColor={theme.colors.white}
        type="bold"
        backgroundColor={theme.colors.primary}
        onPress={() => handleSaveConfig()}
      >
        Salvar
      </Button>
      <RGBPicker
        formIndex={modal.formIndex}
        showModal={modal.showModal}
        closeModal={closeModal}
        setColorByIndex={setColorByIndex}
      />
    </Container>
  );
}
