import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.white};
`

export const Header = styled.View`
    height: 72px;
    width: 100%;
    background-color: ${({theme})=>theme.colors.primary};

    align-items: center;

    flex-direction: row;
`


export const Content = styled.ScrollView`
    flex: 1;
    background-color: ${({theme})=>theme.colors.white};
    padding: 0px 8px;
    margin-top: 16px;
`


export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`


export const ColorContainer = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${({theme})=>theme.colors.font_grey};
`
export const ObjectItem = styled.View``

export const Form = styled.View`
    padding: 16px;
`

export const BackButton = styled.TouchableOpacity`
    padding: 0px 16px;
`
