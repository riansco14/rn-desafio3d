import styled from "styled-components/native"

interface TextProps{
    fontFamily: string
    fontSize: string
    color: string
}

export const Container = styled.Text<TextProps>`
    font-size: ${({fontSize})=>fontSize};
    font-family: ${({fontFamily})=>fontFamily};
    color: ${({color})=>color};
`
