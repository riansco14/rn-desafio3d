import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber/native";
import database from "@react-native-firebase/database";
import { Box } from "../Box";
import { Cone } from "../Cone";
import { Deca } from "../Deca";

import remoteConfig from "@react-native-firebase/remote-config";

const positions = [[0, 1.5, 0], [0, 0, 0], [0, -1.5, 0]]
export function Container({ user }) {
  const [formArray, setFormArray] = useState([]);

  useEffect(() => {
    let onValueChange;
    if (user.uid)
      onValueChange = database()
        .ref(`/users/${user.uid}`)
        .on("value", (snapshot) => {
          const value = snapshot.val();
          if (value?.shape) {
          } else {
            setFormArray(
              JSON.parse(remoteConfig().getValue("default_config").asString())
            );
          }
        });

    // Stop listening for updates when no longer required
    return () => {
      if (onValueChange)
        database().ref(`/users/${user.uid}`).off("value", onValueChange);
    };
  }, [user]);

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
                position={positions[index]}
                color={item.color}
                rotation={item.rotation}
              />
            );
          case "deca":
            return (
              <Deca
                position={positions[index]}
                color={item.color}
                rotation={item.rotation}
              />
            );
          case "cone":
            return (<Cone
              position={positions[index]}
              color={item.color}
              rotation={item.rotation}
            />);
        }
      })}
    </Canvas>
  );
}
