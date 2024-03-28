import React from "react"
import { Container } from "./styles"

import { useTheme } from 'styled-components/native'
import {TextProps } from "react-native"

interface TextCustomProps extends TextProps{
    children: React.ReactNode
    type: "default" | "defaultBold" | "italic" | "interlined" | "small" 
    color: string
}

export function Text ({children, type = "default", color = "#000", style}: TextCustomProps){
    const theme = useTheme()
    const headingStyles = {
        default : {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.regular,
        },
        defaultBold : {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.bold,
        },
        italic : {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.semibold,
        },
        interlined : {
            fontSize: theme.fontSizes.body,
            fontFamily: theme.fonts.regular,
        },
        small : {
            fontSize: theme.fontSizes.body_small,
            fontFamily: theme.fonts.regular,
        },
    }

    return(<Container 
        fontSize={headingStyles[type].fontSize} 
        fontFamily={headingStyles[type].fontFamily} 
        color={color}
        style={style}
        >
        {children}
    </Container>)
}