import React from "react"
import { Container } from "./styles"
import { Icon, IconProps } from "../Icon"

export function MenuCustomIcon ({name,color, width = 24, height}: IconProps){
    return(<Container>
        <Icon name={name} color={color} width={width} height={height} />
    </Container>) 
}