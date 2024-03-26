import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber/native";
import { MathUtils } from "three";

interface DecaProps extends MeshProps {
  color: string;
  rotation: number;
}

export function Deca({ color, rotation, ...props }: DecaProps) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={0.5}
      rotation={[
        MathUtils.degToRad(0),
        MathUtils.degToRad(270),
        MathUtils.degToRad(rotation),
      ]}
    >
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
