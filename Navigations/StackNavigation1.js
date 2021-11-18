import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import AnotherScreen from '../Screens/AnotherScreen';

import JavascriptScreen from '../Screens/JavascriptScreen'

const Stack = createStackNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false}}
            />

           

            <Stack.Screen name="Javascript" component={DetailsScreen}
                
            />

            <Stack.Screen name="React" component={AnotherScreen}
                options={{
                    headerStyle:{
                        backgroundColor:'yellow',
                        borderBottomColor:'green',
                        borderBottomWidth:3
                    },
                    headerTitleStyle:{
                        color:'green',
                        textAlign:'center'
                    }

                }}
            />

        </Stack.Navigator>

    )
}