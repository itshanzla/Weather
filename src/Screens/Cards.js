import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {deviceHeight, deviceWidth} from './Dimensions';

const Cards = ({name, image, navigation}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 2}} onPress={() => navigation.navigate('Details', {name})}>
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 25}}
      />
      <View style={{position: 'absolute', height: '100%', width: '100%',flexDirection:'row'}}>
        <Text
          style={{
            fontSize: 28,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Cards