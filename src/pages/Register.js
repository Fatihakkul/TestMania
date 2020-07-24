import React,{useState}from 'react'
import { SafeAreaView,View,Text, Alert} from 'react-native'
import {Input,Button} from 'react-native-elements'
import auth from '@react-native-firebase/auth'


const Register =props=>{

    const [Email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [pssRep,setPassRep]=useState("")

    const  saveEmail=(text)=>setEmail(text)
    const savePassword=(text)=>setPassword(text)
    const savePassRep=(text)=>setPassRep(text)


    const saveUser =()=>{

        console.log(Email,password)
      if(Email.length !=0 && password.length !=0 && pssRep.length != 0){
            if(password === pssRep){
                auth()
                    .createUserWithEmailAndPassword(Email,password)
                    .then(()=>{
                        console.log("mehaba")
                        props.navigation.navigate("Login")
                    }).catch((error)=>{
                        if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('That email address is already in use!');
                        }
                    
                        if (error.code === 'auth/invalid-email') {
                        Alert.alert('That email address is invalid!');
                        }
                    
                        Alert.alert(error);
                })
            }else Alert.alert("Şifreler uyuşmamaktadır")
        }else Alert.alert("Lütfen alanları doldurunuz")
    }

    return(
        <SafeAreaView>
            <View>
                <Input 
                    placeholder="E-mail adress"
                    onChangeText={saveEmail}
                    keyboardType="email-address"
                />
                <Input 
                  placeholder="Pasword"
                  onChangeText={savePassword}
                  secureTextEntry={true}
                />
                <Input
                  placeholder="Password again"
                  onChangeText={savePassRep}
                  secureTextEntry={true}
                />
                <Button
                    title="Kayıt Ol"
                    onPress={saveUser}
                />
            </View>
        </SafeAreaView>
    )
}
export {Register}