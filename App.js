
import React, {useEffect, useState} from 'react';
import WelcomePage from './src/view/WelcomePage';
import LoginPage from './src/view/LoginPage';
import SignIn from './src/view/SignIn';
import AddName from './src/view/JoinNow/AddName';
import AddEmailPw from './src/view/JoinNow/AddEmailPw';
import AddDetails from './src/view/JoinNow/AddDetails';
import UploadAvator from './src/view/JoinNow/UploadAvator';
import Navigation from './src/view/Navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App: () => Node = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        isLoading ? <WelcomePage/> : (
            <>
                <NavigationContainer independent={true}>
                        <Stack.Navigator>
                            <Stack.Screen name="LoginPage" options={{headerShown:false}} component={LoginPage}/>
                            <Stack.Screen name="UploadAvator" options={{headerShown:false}} component={UploadAvator}/>
                            <Stack.Screen name="AddDetails" options={{headerShown:false}} component={AddDetails}/>
                            <Stack.Screen name="AddEmailPw" options={{headerShown:false}} component={AddEmailPw}/>
                            <Stack.Screen name="AddName" options={{headerShown:false}} component={AddName}/>
                            <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn}/>
                            <Stack.Screen options={{ headerShown: false }} name="Navigation" component={Navigation} />
                        </Stack.Navigator>
                    </NavigationContainer>
            </>
        )
    );
};

export default App;
