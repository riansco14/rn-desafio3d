import styled from "styled-components/native"

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
