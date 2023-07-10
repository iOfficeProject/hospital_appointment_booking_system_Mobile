import React,{useState} from "react";
import{ Button, Image, StyleSheet, Text, TextInput, View} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const Register=({navigation})=>{
    const [email ,setEmail] =useState("");
    const [password , setPassword] = useState("");
    const [error, setError]= useState({field:'', message: ''})

    function handleNavigation(screenName){
        navigation.navigate(screenName);
    }
    const onSubmit=()=>{
        let loginError={field:'', message:''}
        if(email===''){
            loginError.field='email';
            loginError.message="Email is required";
            setError(loginError);
        }
    }
    return(
        <View style= {styles.container}>
            <Image source={require('../Assets/Logo.png')} style={{height :250,width:250}}></Image>
            <TextInput 
                style={styles.input}
                placeholder="Username"></TextInput>
            <TextInput 
                style={styles.input}
                
                placeholder="Email" value={email} 
                ></TextInput>
           
            {error.field==='email'&&(<Text>{error.message}</Text>)}
            <TextInput 
                style={styles.input}
                placeholder="Phonenumber" value={password}></TextInput>
            <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}></TextInput>
            
            <TouchableOpacity style={styles.loginbutton}
            onPress={onSubmit}>
                <Text style={{color : "black"}}>Register</Text>
            </TouchableOpacity>
            {/* <Button title="Click here">Click here</Button> */}
            <Text style={styles.signupText} 
            onPress={() => handleNavigation('Login')}>Already have account? Login</Text>
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
    signupText:{
        // color:"Black"
    }

})
export default Register;