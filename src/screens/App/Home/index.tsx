import React from "react"
import { Container } from "./styles"
import { useAuthHook } from "../../../context/AuthContext";
import { Container as ContainerCanvas} from "../../../components/Shape3D/Container"
export function Home (){
    const { user } = useAuthHook();
    return(<Container>
        <ContainerCanvas user={user} />
    </Container>)
}