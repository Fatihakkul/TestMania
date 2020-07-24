import React,{useState,useEffect} from 'react'
import {SafeAreaView,View,Text, Alert} from 'react-native'
import { Input,Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth'


const Login =props=>{

    const [password,setPass]=useState("")
    const [userEmail,setEmail]=useState("")
    

    const LoginMail =(text)=>setEmail(text)
    const LoginPass=(text)=>setPass(text)

    useEffect(() => {
        

    }, [])

  
    
    const LoginUser=()=>{

        if(userEmail.length !=0 && password.length != 0){
           auth().signInWithEmailAndPassword(userEmail,password)
           .then(()=>{
                props.navigation.navigate("Main")
            }).catch((err)=>{

                console.log(err)
            })
    }else Alert.alert("Alanları boş bırakmayınız")
    }
    const RegisterPage =()=>{
        props.navigation.navigate("Register")
    }

    return(
        <SafeAreaView>
           <View style={{alignItems :'center' , marginHorizontal : 15, marginTop : 25 , padding : 10 , borderBottomEndRadius: 25 ,borderTopEndRadius: 25,
            borderLeftWidth: 4, borderLeftColor : 'red',backgroundColor : 'gray'
        }}>
               <Input 
                placeholder = "E-mail giriniz.."
                keyboardType="email-address"
               onChangeText = {LoginMail}
               />
               <Input 
                placeholder = "Şifrenizi giriniz..."
                secureTextEntry={true}
                onChangeText = {LoginPass}
               />
           </View>
           <Button
                title="Giriş Yap"
                type="outline"
                containerStyle={{marginHorizontal : 25,marginTop : 10 }}
                onPress ={LoginUser}
            />
             <Button
                title="Kayıt Ol"
                type="outline"
                containerStyle={{marginHorizontal : 25,marginTop : 10 }}
                onPress ={RegisterPage}
            />
        </SafeAreaView>
    )
}

export {Login}