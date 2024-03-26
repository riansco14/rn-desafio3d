import React, { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber/native";
import { MathUtils, Vector3 } from "three";

interface BoxProps extends MeshProps {
  color: string;
  rotation: number;
}

export function Box({ color, rotation, ...props }: BoxProps) {
  const mesh = useRef(null);

  useFrame((state, delta) => (mesh.current.rotation.y += delta));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={0.5}
      rotation={[
        MathUtils.degToRad(0),
        MathUtils.degToRad(0),
        MathUtils.degToRad(rotation),
      ]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
