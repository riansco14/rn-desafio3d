import React, { useCallback, useEffect, useState } from "react";
import database from "@react-native-firebase/database";
import { useAuthHook } from "../../../context/AuthContext";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

export function useFetch() {
  const { user } = useAuthHook();

  const [isLoadingCurrentData, setIsLoadingCurrentData] = useState(true);
  const [currentData, setCurrentData] = useState(null);

  async function fetchDelete() {
    if (user?.uid) {
      database()
        .ref(`/users/${user.uid}`)
        .set(null)
        .then(() => {
          setCurrentData(null);
        })
        .catch(() => {
          Alert.alert(
            "Aviso",
            "Não foi possível apagar as definições de usuário."
          );
        });
    }
  }

  async function fetchLoadCurrentData() {
    if (user?.uid) {
      setIsLoadingCurrentData(true);
      database()
        .ref(`/users/${user.uid}`)
        .once("value")
        .then((snapshot) => {
          setCurrentData(snapshot.val());
        })
        .catch(() => {
          setCurrentData(null);
        })
        .finally(() => {
          setIsLoadingCurrentData(false);
        });
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchLoadCurrentData();
    }, [])
  );

  return {
    currentData,
    isLoadingCurrentData,
    fetchLoadCurrentData,
    fetchDelete,
  };
}
