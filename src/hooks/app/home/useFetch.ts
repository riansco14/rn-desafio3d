import React, { useCallback, useState } from "react";
import database from "@react-native-firebase/database";
import { useAuthHook } from "../../../context/AuthContext";
import { useFocusEffect } from "@react-navigation/native";
import remoteConfig from "@react-native-firebase/remote-config";
import { Alert } from "react-native";

export function useFetch() {
  const { user } = useAuthHook();

  const [formArray, setFormArray] = useState([]);
  useFocusEffect(
    useCallback(() => {
      let onValueChange;
      if (user.uid)
        onValueChange = database()
          .ref(`/users/${user.uid}`)
          .on("value", (snapshot) => {
            const value = snapshot.val();
            if (value) {
              setFormArray(value);
            } else {
              loadDefaultConfig();
            }
          });

      return () => {
        if (onValueChange)
          database().ref(`/users/${user.uid}`).off("value", onValueChange);
      };
    }, [user])
  );

  function loadDefaultConfig() {
    try {
      let defaultConfig = JSON.parse(
        remoteConfig().getValue("default_config").asString()
      );
      setFormArray(defaultConfig);
    } catch (error) {
      Alert.alert("Aviso", "Não possível recuperar as definições padrões.");
    }
  }

  return { formArray };
}
