import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.white};
`


export const AvatarContainer = styled.View`
    margin-top: 100px;
    align-items: center;
`

export const ConfigContainer = styled.View`
    flex: 1;

    margin-top: 16px;
`


export const ConfigButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 20px;
    background-color: ${({theme})=>theme.colors.grey_light};

    margin-bottom: 2px;
`

export const UserConfigContainer = styled.View`
    margin-bottom: 32px;
`

export const Footer = styled.View`
    padding: 0px 16px;

    margin-bottom: 32px;
`