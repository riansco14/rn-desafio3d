import { createContext, useContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import remoteConfig from "@react-native-firebase/remote-config";
import { Alert } from "react-native";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function loadRemoteConfig() {
    remoteConfig()
      .setDefaults({})
      .then(() => remoteConfig().fetchAndActivate());
  }

  useEffect(() => {
    loadRemoteConfig();
  }, []);

  function fetchLogin({ email, password }) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          Alert.alert("Aviso", "Endereço de email inválido.");
        } else {
          Alert.alert("Aviso", "Não foi possível autenticar suas credênciais.");
        }
      });
  }

  function fetchLogout() {
    auth().signOut();
  }

  return (
    <AuthContext.Provider value={{ user, fetchLogin, fetchLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthHook = () => {
  return useContext(AuthContext);
};
