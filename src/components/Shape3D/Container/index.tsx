import React from "react";
import { Canvas } from "@react-three/fiber/native";
import { Box } from "../Box";
import { Cone } from "../Cone";
import { Deca } from "../Deca";

import { useFetch } from "../../../hooks/app/home/useFetch";

const DEFAULT_POSITIONS = [
  [0, 1.5, 0],
  [0, 0, 0],
  [0, -1.5, 0],
];

export function Container({ user }) {
  const { formArray } = useFetch();
  return (
    <Canvas>
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <ambientLight intensity={Number(Math.PI / 2)} />
      {formArray.map((item, index) => {
        switch (item.shape) {
          case "cubo":
            return (
              <Box
                position={DEFAULT_POSITIONS[index]}
                color={item.color}
                rotation={item.rotation}
              />
            );
          case "deca":
            return (
              <Deca
                position={DEFAULT_POSITIONS[index]}
                color={item.color}
                rotation={item.rotation}
              />
            );
          case "cone":
            return (
              <Cone
                position={DEFAULT_POSITIONS[index]}
                color={item.color}
                rotation={item.rotation}
              />
            );
        }
      })}
    </Canvas>
  );
}
