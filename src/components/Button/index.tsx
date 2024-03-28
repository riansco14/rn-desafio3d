import React from "react"
import { Container, TextButton } from "./styles"
import { useTheme } from "styled-components/native"

import {TouchableOpacityProps } from "react-native"

interface ButtonProps extends TouchableOpacityProps{
    children: React.ReactNode
    backgroundColor: string
    textColor: string
    type: "default" | "bold" | "filter"
}

export function Button ({children, type = "default", backgroundColor, textColor, ...rest}: ButtonProps){
    const theme = useTheme()

    const buttonTextStyles = {
        default: {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.regular
        },
        bold: {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.bold
        },
        filter: {
            fontSize: theme.fontSizes.body_small,
            fontFamily: theme.fonts.medium
        }
    }

    return(<Container testID={"testButton"} backgroundColor={backgroundColor} {...rest}>
        <TextButton textColor={textColor} fontFamily={buttonTextStyles[type].fontFamily} fontSize={buttonTextStyles[type].fontSize}>
            {children}
        </TextButton>
    </Container>)
}