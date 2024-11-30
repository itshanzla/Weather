// import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
// import Fontisto from 'react-native-vector-icons/Fontisto'
// import MapView, { Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height

// const App = () => {
//     const [initialRegion, setInitialRegion] = useState({
//         latitude: 0,
//         longitude: 0,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//     });
//     const [currentPosition, setCurrentPosition] = useState(null);

//     useEffect(() => {
//         getCurrentPosition();
//     }, []);

//     const getCurrentPosition = () => {
//         Geolocation.getCurrentPosition(
//             (position) => {
//                 const { latitude, longitude } = position.coords;
//                 setInitialRegion({
//                     ...initialRegion,
//                     latitude,
//                     longitude,
//                 });
//                 setCurrentPosition({
//                     latitude,
//                     longitude,
//                 });
//             },
//             (error) => {
//                 console.error(error);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         );
//     };
//     const [isLoadingLocation, setIsLoadingLocation] = useState(true); // Add this state

//     return (
//         <View style={{ flex: 1 }}>

//             <View style={{ height: "55%", width: width }}>
//                 {/* map code to display current location */}
//                 <View style={styles.container}>
//                     <MapView
//                         style={styles.map}
//                         initialRegion={initialRegion}
//                     >
//                         {currentPosition && (
//                             <Marker
//                                 coordinate={currentPosition}
//                                 title="Your Location"
//                                 description="You are here!"
//                             />
//                         )}
//                     </MapView>
//                 </View>
//             </View>

//             <View style={{ backgroundColor: "white", height: "45%", padding: width * 0.05, justifyContent: "space-between" }}>
//                 <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", }}>
//                     {/* <Image style={{ height: height * 0.08, width: width * 0.3, }} resizeMode="contain" source={require('../images/uberLogo.png')} /> */}

//                     <View style={{ flexDirection: 'row', width: width * 0.3, justifyContent: "space-between", alignItems: "center" }}>
//                         <Text style={{ color: "black" }}>Iman Khan</Text>
//                         <FontAwesome6 name={'circle-user'} size={60} color={'gray'} />
//                     </View>
//                 </View>

//                 <View style={{ flexDirection: 'row', justifyContent: "space-between", marginBottom: height * 0.03 }}>
//                     <TouchableOpacity style={{ backgroundColor: "#D8D9DA", borderRadius: 5, padding: width * 0.004 }}>
//                         <Image style={{ alignSelf: "center", height: height * 0.13, width: width * 0.27 }} resizeMode='contain' source={{ uri: 'https://i.ibb.co/cyvcpfF/uberx.png' }} />
//                         <Text style={{ alignSelf: "center", color: "black", fontWeight: 'bold', fontSize: 15, marginBottom: height * 0.005 }}>Ride</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ backgroundColor: "#D8D9DA", borderRadius: 5, padding: width * 0.004 }}>
//                         <Image style={{ alignSelf: "center", height: height * 0.13, width: width * 0.27 }} resizeMode='contain' source={{ uri: 'https://i.ibb.co/n776JLm/bike.png' }} />
//                         <Text style={{ alignSelf: "center", color: "black", fontWeight: 'bold', fontSize: 15, marginBottom: height * 0.005 }}>2-Wheels</Text>
//                     </TouchableOpacity>

//                     <TouchableOpacity style={{ backgroundColor: "#D8D9DA", borderRadius: 5, padding: width * 0.004 }}>
//                         <Image style={{ alignSelf: "center", height: height * 0.13, width: width * 0.27 }} resizeMode='contain' source={{ uri: 'https://i.ibb.co/5RjchBg/uberschedule.png' }} />
//                         <Text style={{ alignSelf: "center", color: "black", fontWeight: 'bold', fontSize: 15, marginBottom: height * 0.005 }}>Reserve</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#D8D9DA", borderRadius: 15, alignItems: "center", padding: width * 0.02 }}>
//                     <Fontisto name={'search'} color={'black'} size={30} />
//                     <Text style={{ color: "black", fontSize: height * 0.02, fontWeight: "500", marginLeft: width * 0.04 }}>Where to?</Text>
//                 </TouchableOpacity>
//             </View>
//             {isLoadingLocation && (
//                 <Text>Loading location...</Text>
//             )}

//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
// });

// export default App;

// import {   Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Splash from './src/Splash'

// const App = () => {
//   const [loading , isLoading]= useState(true)
//   useEffect(()=>{
//     setTimeout(() => {
//       isLoading(false)
//     }, 5000);
//   },[])
//   return (
//     <View>
//      {loading?<Splash/>:null}
//     </View>
//   )
// }

// export default App

// import { TouchableOpacity, Text, TextInput, View } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import firestore from '@react-native-firebase/firestore';

// const App = () => {
//   const [data, setData] = useState({});
//   const [value, setValue] = useState('');

//   useEffect(() => {
//     (async () => {
//       try {
//         const user = await firestore().collection('user').doc('OWQb1bHs0PAOoj3H5BeZ').get();
//         setData(user.data());
//       } catch (error) {
//         console.error("Error getting data:", error);
//       }
//     })();
//   }, []);

//   return (
//     <View>
//       <Text>Age: {data.age}</Text>
//       <TextInput
//         value={value}
//         onChangeText={(value) => { setValue(value) }}
//       />
//      <TouchableOpacity
//      onPress={async () => {
//           try {
//             await firestore().collection('user').doc('OWQb1bHs0PAOoj3H5BeZ').set({ value});
//             console.log("Data Uploaded");
//           } catch (error) {
//             console.error("Error uploading data:", error);
//           }
//         }}>
//      <Text>Add Data</Text>

//      </TouchableOpacity>

//       <TouchableOpacity
//       onPress={async () => {
//           try {
//             await firestore().collection('user').doc('OWQb1bHs0PAOoj3H5BeZ').update({ age: 30 });
//             console.log("Data Updated");
//           } catch (error) {
//             console.error("Error updating data:", error);
//           }
//         }}>
//       <Text>Update Data</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//       onPress={async () => {
//           try {
//             await firestore().collection('user').doc('OWQb1bHs0PAOoj3H5BeZ').delete();
//             console.log("Data Deleted");
//           } catch (error) {
//             console.error("Error deleting data:", error);
//           }
//         }}>
//      <Text>Delete Data</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default App;

// import { StyleSheet, Text, View } from 'react-native'
// import React, {useState,useEffect} from 'react'
// import Geolocation from '@react-native-community/geolocation';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

// const App = () => {
//   const [location,setLocation]= useState(0)
//    Geolocation.getCurrentPosition((data)=>
//    setLocation( data.coords)
//    )
//    useEffect(() => { // Use useEffect to fetch the location
//     Geolocation.getCurrentPosition((data) => {
//       setLocation(data.coords);
//     });
//   }, []);

//   return (
//     <View>
//       <MapView
//       provider={PROVIDER_GOOGLE}
//       style={{width:'100%',height:'100%'}}
//       region={{
//         latitude: location.latitude,
//     longitude: location.longitude,
//     latitudeDelta: 0.012,
//     longitudeDelta: 0.012,
//       }}

//       >
//         <Marker coordinate={{  latitude: location.latitude,
//     longitude: location.latitude }}
//         pinColor='red'
//         title='Current Location'
//         />
//       </MapView>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Details from './src/Screens/Details';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, statusBarAnimation: 'slide'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
