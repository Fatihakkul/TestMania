import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import  {Login,Register,Main} from './pages'
import { NavigationContainer } from '@react-navigation/native';


const Stack =createStackNavigator();
const Tab=createBottomTabNavigator();

function Rotuer(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown : false}}/>
                <Stack.Screen name="Main" component={Main} options={{headerShown : false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Rotuer;