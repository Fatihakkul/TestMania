import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import  {Login,Register,Questions,Profile,Explore,Main} from './pages'
import { NavigationContainer } from '@react-navigation/native';


const Stack =createStackNavigator();
const Tab=createBottomTabNavigator();

function MainUser(){
    return(
      
            <Tab.Navigator initialRouteName="Main">
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Questions" component={Questions} />
                <Tab.Screen name="Explore" component={Explore} />
                <Tab.Screen name="Main" component={Main} />
            </Tab.Navigator>
        
    )
}

function Rotuer(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown : false}}/>
                <Stack.Screen name="MainUser" component={MainUser} options={{headerShown : false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Rotuer;