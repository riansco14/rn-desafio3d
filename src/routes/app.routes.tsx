import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/App/Home";
import { MenuCustomIcon } from "../components/MenuCustomIcon";
import { UserInfo } from "../screens/App/UserInfo";
import { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EditShape } from "../screens/App/EditShape";

const { Navigator, Screen } = createStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.menu_active,
        tabBarInactiveTintColor: theme.colors.menu_inactive,
        tabBarStyle: {backgroundColor: theme.colors.font_light},
        
      }}
      
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MenuCustomIcon
              color={color}
              name="home"
              width={size}
              height={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserInfo"
        component={UserInfo}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MenuCustomIcon
              color={color}
              name="user"
              width={size}
              height={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={BottomTabs} />
      <Screen name="EditShape" component={EditShape} />
    </Navigator>
  );
}
