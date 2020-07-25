import React from 'react'
import {View,Text, StyleSheet, Dimensions,Pressable} from 'react-native'

const QuestionItem =props=>{
    return (
        <View style={styles.container}>
            <View style={styles.questionCont}>
                <Text style={styles.question}>{props.question}</Text>
            </View>
            <View style={styles.answers}>
                <View style={styles.answerAB}>
                    <Pressable style={styles.answersCont} onPress ={()=>console.log("cevap a")}>
                        <Text style={styles.answersText}>{props.answerA}</Text>
                    </Pressable>
                    <Pressable style={styles.answersCont} onPress ={()=>console.log("cevap a")}>
                        <Text style={styles.answersText}>{props.answerB}</Text>
                    </Pressable>
                    <Pressable style={styles.answersCont} onPress ={()=>console.log("cevap a")}>
                        <Text style={styles.answersText}>{props.answerC}</Text>
                    </Pressable>
                    <Pressable style={styles.answersCont} onPress ={()=>console.log("cevap a")}>
                        <Text style={styles.answersText}>{props.answerD}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container : {
            backgroundColor : 'blue',
            alignItems: 'center'
            
    },
    question :{
       fontSize : 20,
       fontStyle : 'italic'
    },
    questionCont :{
        backgroundColor: 'green',
        marginVertical : 15
    },
    answers : {
        backgroundColor : 'red'
    },
    answerAB : {
        backgroundColor : 'yellow',
        width : Dimensions.get('window').width,
        justifyContent : 'space-evenly',
        padding : 10
    },
    answersText : {
        fontSize : 18,
        marginBottom : 5,
        marginLeft : 5
    },
    answersCont : {
        backgroundColor : 'gray',
        marginVertical : 5
    }
    

})
export {QuestionItem}