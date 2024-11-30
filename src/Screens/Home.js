import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimensions';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
import {white} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const Home = props => {
  const [city, setCity] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const cities = [
    {
      name: 'Skardu',
      image: require('../Images/image3.jpg'),
    },
    {
      name: 'Islamabad',
      image: require('../Images/image4.jpg'),
    },
    {
      name: 'Karachi',
      image: require('../Images/image5.jpg'),
    },
    {
      name: 'Lahore',
      image: require('../Images/image6.jpg'),
    },
    {
      name: 'Multan',
      image: require('../Images/image7.jpg'),
    },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <View>
      <ImageBackground
        source={require('../Images/image2.jpg')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.8, backgroundColor: 'black'}}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require('../Images/user1.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 50}}>
          <Text style={{fontSize: 35, color: 'white'}}>
            Weather Forecast ☁️
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
              borderRadius: 50,
            }}>
            Search the city by name
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: 'white',
              fontSize: 25,
              marginTop: 250,
              marginBottom: 30,
            }}>
            Saved Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: darkMode ? 'white' : 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={toggleDarkMode}>
          <Icon
            name={darkMode ? 'moon' : 'sunny'}
            size={30}
            color={darkMode ? 'black' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
