import React from "react"
import { Container } from "./styles"

import { useTheme } from 'styled-components'
import {TextProps } from "react-native"

interface HeadingProps extends TextProps{
    children: React.ReactNode
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading ({children, type = "h6", ...rest}: HeadingProps){
    const theme = useTheme()
    const headingStyles = {
        h1 : {
            fontSize: theme.fontSizes.h1,
            fontFamily: theme.fonts.bold,
        },
        h2 : {
            fontSize: theme.fontSizes.h2,
            fontFamily: theme.fonts.bold,
        },
        h3 : {
            fontSize: theme.fontSizes.h3,
            fontFamily: theme.fonts.semibold,
        },
        h4 : {
            fontSize: theme.fontSizes.h4,
            fontFamily: theme.fonts.semibold,
        },
        h5 : {
            fontSize: theme.fontSizes.h5,
            fontFamily: theme.fonts.bold,
        },
        h6 : {
            fontSize: theme.fontSizes.h6,
            fontFamily: theme.fonts.semibold,
        },
    }

    return(<Container 
        fontSize={headingStyles[type].fontSize} 
        fontFamily={headingStyles[type].fontFamily} 
        {...rest}
        >
        {children}
    </Container>)
}