import styled from "styled-components/native"

export const Container = styled.View`
    height: 100%;
    width: 100%;
    background-color: ${({theme})=>theme.colors.white};
`


export const WrapperContainer = styled.View`
    padding: 0 40px;
    justify-content: space-between;
`

export const FormContainer = styled.View`
`


export const LogoContainer = styled.View`
    margin-top: 100px;
    width: 100%;
    align-items: center;
`

export const RememberPasswordContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 30px;
`

export const Footer = styled.View`
    margin-top: 30px;
`

