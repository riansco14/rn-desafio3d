import styled from "styled-components/native"

export const Container = styled.TextInput`
    font-size: 16px;
    line-height: 24px;

    border-bottom-width: 1px;
    border-bottom-color: ${({theme})=>theme.colors.grey};

    font-family: ${({theme})=>theme.fonts.regular};

    padding-top: 4px;
    padding-bottom: 4px;
`
