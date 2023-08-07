import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native'
import Header from './src/components/Header';
import Timer from './src/components/Timer';



const colors= ["#A2D9CE","#F5CBA7", "#D7BDE2"]

const App = () => {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false)


  useEffect(() => {

    let interval = null ; 

    if(isActive){

      interval=setInterval(() => {
        setTime(time-1)
      }, 1000);
      //RUN TIMER correr timer
    }else{
      // CLEAR INTERVAL
      clearInterval(interval);
    }

    if(time ===0){
      setIsActive(false);
      setIsWorking((prev)=> !prev);
      setTime(isWorking? 300 : 1500)
    }
   
    return()=> clearInterval(interval);
  }, [isActive,time])
  

  function handleStopStart(){
    setIsActive(!isActive);
  }

console.log(currentTime)
  return (
    <SafeAreaView style={[styles.container, {backgroundColor:colors[currentTime]}]}>
      <View style={{flex:1, paddingHorizontal:15, paddingTop: Platform.OS==="android" ? 30 :10, }}>
        <Text style={styles.text}>Pomodoro</Text>

        <Header 
          setTime={setTime} 
          currentTime={currentTime} 
          setCurrentTime={setCurrentTime}
        />


        <Timer 
          time={time}
        />

      <TouchableOpacity style={[styles.button,   {backgroundColor: isActive===false ? "#52BE80" : "#E74C3C", marginTop:50}]} onPress={handleStopStart}>
        <Text style={{color: "white", fontWeight:"bold"}}>
          {isActive ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>

      {/* //* STATUSBAR: colocar la parte del reloj en blanco */}
     {/* <StatusBar barStyle={'light-content'} backgroundColor="white"/> */}
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
 
  },
  text: {
    alignSelf:'center',
    fontSize: 40,
    fontWeight:"800"   
    },
  button:{
      padding:15,
      marginTop:15,
      borderRadius:15,
      alignItems:"center"
    }
})