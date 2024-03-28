import React, { useEffect } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import ColorPicker, {
  PreviewText,
  RedSlider,
  GreenSlider,
  BlueSlider,
  returnedResults,
} from "reanimated-color-picker";

export function RGBPicker({ formIndex, showModal, closeModal, setColorByIndex}) {
  const selectedColor = useSharedValue("#fff");
  const backgroundColorStyle = useAnimatedStyle(() => ({
    backgroundColor: selectedColor.value,
  }));

  const onColorSelect = (color: returnedResults) => {
    "worklet";
    selectedColor.value = color.hex;
  };



  return (
    <Modal
      onRequestClose={() => closeModal()}
      visible={showModal}
      animationType="slide"
    >
      <Animated.View style={[styles.container, backgroundColorStyle]}>
        <View style={styles.pickerContainer}>
          <ColorPicker
            value={selectedColor.value}
            sliderThickness={25}
            thumbSize={24}
            thumbShape="circle"
            onChange={onColorSelect}
            thumbAnimationDuration={100}
            adaptSpectrum
            boundedThumb
          >
            <Text style={styles.sliderTitle}>Red</Text>
            <RedSlider style={styles.sliderStyle} />

            <Text style={styles.sliderTitle}>Green</Text>
            <GreenSlider style={styles.sliderStyle} />

            <Text style={styles.sliderTitle}>Blue</Text>
            <BlueSlider style={styles.sliderStyle} />

            <View style={styles.previewTxtContainer}>
              <PreviewText style={{ color: "#707070" }} colorFormat="hex" />
            </View>
          </ColorPicker>
        </View>
      </Animated.View>
      <Pressable style={styles.closeButton} onPress={() => {closeModal(); setColorByIndex(formIndex, selectedColor.value);}}>
        <Text style={{ color: "#707070", fontWeight: "bold" }}>Close</Text>
      </Pressable>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "orange",
  },
  pickerContainer: {
    alignSelf: "center",
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  sliderTitle: {
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
    paddingHorizontal: 4,
  },
  sliderStyle: {
    borderRadius: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  previewTxtContainer: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#bebdbe",
  },
  swatchesContainer: {
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#bebdbe",
    alignItems: "center",
    flexWrap: "nowrap",
    gap: 10,
  },
  swatchStyle: {
    borderRadius: 20,
    height: 30,
    width: 30,
    margin: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  openButton: {
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  closeButton: {
    position: "absolute",
    bottom: 10,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignSelf: "center",
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
