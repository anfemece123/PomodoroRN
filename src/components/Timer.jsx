import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Timer = ({time}) => {

    const formattedTime=`${Math.floor(time/60).toString().padStart(2,"0")} : ${(time%60).toString().padStart(2,"0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedTime}</Text>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({
    container: {
        flex:0.3,
        justifyContent:'center',
        backgroundColor:"white",
        marginTop:70,
        padding:15,
        borderRadius:15
    },
    text:{
        fontSize:80,
        fontWeight:'bold',
        textAlign:'center',
        color:'#333333'
    }
})