import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuthHook } from '../context/AuthContext';



export function Routes() {
    const { user } = useAuthHook();
    return (
        <NavigationContainer>
            {user && user.uid ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}