import React, { useState } from "react";
import database from "@react-native-firebase/database";
import { useAuthHook } from "../../../context/AuthContext";

export function useFetch() {
  const { user } = useAuthHook();

  const [isLoadingCurrentData, setIsLoadingCurrentData] = useState(true);
  const [currentData, setCurrentData] = useState(null);

  async function fetchSave(data) {
    if (user?.uid) {
      await database().ref(`/users/${user.uid}`).set(data);
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

  return { currentData, isLoadingCurrentData, fetchLoadCurrentData, fetchSave };
}
