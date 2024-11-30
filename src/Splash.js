import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import Video from 'react-native-video';
const Splash = () => {
  return (
    <View>
   <LottieView source={require('./Animation/animat.json')} autoPlay loop style={{width:'100%',height:'50%'}} />
<Video source={require('./Video/vid.mp4')} repeat={true} paused={true} controls={true} resizeMode={'contain'} style={{width:'100%',height:'50%'}}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})