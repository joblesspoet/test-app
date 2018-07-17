import React from 'react';
import {Router,Stack,Scene,Drawer} from 'react-native-router-flux';
import { StyleSheet} from 'react-native';
import { YellowBox } from 'react-native';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
//import DrawerContent from './components/drawer/DrawerContent';
//import Dashboard from './components/Dashboard/Dashboard';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class Routes extends React.Component{
    render(){
        return(
            <Router navigationBarStyle={styles.navBarColor} >
                <Stack key="root">
                    <Scene key="login" hideNavBar={true} component={Login} title="Login"  />
                    <Scene key="signup" left={()=>null} leftButtonTextStyle={{ color: 'red' }} 
                        back={()=>null}                        
                        backButtonTintColor='white'
                        titleStyle={{color: '#fff'}}
                        component={Signup} title="Signup"/>     
                    <Scene key="forgotpassword" hideNavBar={true} component={ForgotPassword} title="Forgot Password"  />               
                    
                </Stack>
            </Router>
        );
    }
}

const styles =StyleSheet.create({
    navBarColor:{
        backgroundColor: '#c66900',        
    }
});