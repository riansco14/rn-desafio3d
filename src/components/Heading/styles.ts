import styled from "styled-components/native"

interface HeadingProps{
    fontFamily: string
    fontSize: string
}

export const Container = styled.Text<HeadingProps>`
    font-size: ${({fontSize})=>fontSize};
    font-family: ${({fontFamily})=>fontFamily};
`
