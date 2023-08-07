import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const options = ["Pomodoro","Short Break", "Long Breack"]

const Header = ({currentTime, setCurrentTime, setTime}) => {

    const handlePress= (index)=>{
        const newTime= index === 0 ? 25 : index === 1 ? 5 :15 ;
        setCurrentTime(index);
        setTime(newTime *60)
    }

  return (
    <View style={styles.container}>
        {
            options.map((item, index)=>(
                <TouchableOpacity 
                    key={index} 
                    onPress={()=>handlePress(index)} 
                    style={[styles.itemStyle,currentTime !== index && {borderColor: "transparent"}]}> 
                    {/* // para seleccionar el boton que tiene que estar presionado y los demas en transparent */}

                    <Text style={{fontWeight:"bold"}}>{item}</Text>

                </TouchableOpacity>

            ))
        }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
    
        paddingTop:40
    },

    itemStyle:{
        width:"33%",
        alignItems:'center',
        borderWidth:3,
        padding:5,
        borderRadius:10,
        borderColor:"white",
        marginVertical:20,
    }
})