import React from "react";
import{Button, Image, StyleSheet, Text, TextInput, View} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const Login=({navigation})=>{
    function handleNavigation(screenName){
        navigation.navigate(screenName);
    }
    return(
        <View style= {styles.container}>
            <Image source={require('../Assets/Logo.png')} style={{height :250,width:250}}></Image>
            <TextInput 
                style={styles.input}
                placeholder="Email"></TextInput>
            <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}></TextInput>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
            <TouchableOpacity style={styles.loginbutton}
            onPress={() => handleNavigation('BottomTab')}
            >
                <Text style={{color : "black"}}>Login</Text>
            </TouchableOpacity>
            <Text onPress={() => handleNavigation('Register')} >Create New Account</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        display: 'flex',
        textAlign: 'center',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    input:{
        height: 40,
        width:300,
        borderRadius:5,
        margin:12,
        borderWidth: 1,padding: 10
    },
    loginbutton:{
        textAlign:'center',
        height:40,
        width: 300,
        borderRadius:5,
        backgroundColor:"#8DC540",
        alignItems:'center',
        padding: 10,
        margin:20
    },
    forgotPassword : {
        marginLeft:190,
        // color:"Black"
    },
    // signupText:{
    //     color:"Black"
    // }

})
export default Login;