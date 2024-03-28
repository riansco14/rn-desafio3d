import React, { useState } from "react"
import SliderNative from '@react-native-community/slider';
import { useTheme } from "styled-components/native";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { Container, Wrapper } from "./styles";


export function Slider({value, setValue}) {
    const theme = useTheme()
    //const [value, setValue] = useState(0)

    return (<Container>
        <Wrapper>
            <Icon color={theme.colors.primary} name="angle" width={32} height={32} />
            <Text testID="sliderTextTest" color={theme.colors.primary} type="defaultBold" style={{marginLeft: 16}}>{value}</Text>
        </Wrapper>
        <SliderNative
            testID="sliderTest"
            value={value}
            onValueChange={setValue}
            step={1}
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={360}
            minimumTrackTintColor={theme.colors.primary}
            maximumTrackTintColor={theme.colors.font_grey}
        />
    </Container>)
}