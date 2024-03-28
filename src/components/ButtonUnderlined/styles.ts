import styled from "styled-components/native"
import theme from "../../config/styles/theme"

interface ButtonProps {
    backgroundColor: string
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    width: 100%;

    background-color: ${({backgroundColor})=>backgroundColor};
    border-radius: 10px;

    padding-top: 18px;
    padding-bottom: 18px;

    align-items: center;

    border-width: 1px;
    border-color: ${theme.colors.font_grey};
`


interface TextButtonProps {
    fontSize: string
    fontFamily: string
    textColor: string
}

export const TextButton = styled.Text<TextButtonProps>`
    font-size: ${({fontSize})=>fontSize};
    font-family: ${({fontFamily})=>fontFamily};
    color: ${({textColor})=>textColor};
`
