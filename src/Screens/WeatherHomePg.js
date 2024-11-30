// import { View, Text, ImageBackground, Dimensions, TextInput, Image, ScrollView } from 'react-native'
// import React,{useState, useEffect} from 'react'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import EvilIcons from 'react-native-vector-icons/EvilIcons'
// import Feather from 'react-native-vector-icons/Feather'


// const height = Dimensions.get('screen').height
// const width = Dimensions.get('screen').width

// const WeatherHomePg = () => {
//   const apiKey = '63fc0d08e17f288a90c16bbfd94a75aa'

//   const [cityName, setCity] = useState('Karachi')
//   const [data, setData] = useState({});

//   const getData = async () => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`);
//       const weatherData = await response.json();
//       console.log(weatherData);
//       setData(weatherData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }

//   }

//   useEffect(() => {
//     getData();
//   }, [])
//   const getThreeTimesData = () => {
//     const currentTimeIndex = data?.list?.findIndex(item => new Date(item.dt_txt).getHours() >= new Date().getHours());
//     if (currentTimeIndex !== -1) {
//       return data?.list?.slice(currentTimeIndex, currentTimeIndex + 3);
//     }
//     return [];
//   };
//   const getFiveDaysData = () => {
//     const groupedData = data?.list?.reduce((acc, item) => {
//       const date = new Date(item.dt_txt).toLocaleDateString();
//       if (!acc[date]) {
//         acc[date] = [];
//       }
//       acc[date].push(item);
//       return acc;
//     }, {});
//     const dates = Object.keys(groupedData).slice(0, 5);
//     const fiveDaysData = dates.map(date => groupedData[date]);
//     return fiveDaysData;
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <ImageBackground
//         style={{ padding: width * 0.04, width: width, height: height }}
//         source={require('../images/cloudyBackground.png')}
//       >

//         <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
//           <View style={{ width: width * 0.8, flexDirection: 'row', backgroundColor: "#c1c8d4", borderRadius: 20, alignItems: 'center', justifyContent: "space-between", paddingLeft: width * 0.02, paddingRight: width * 0.02 }}>
//             <TextInput style={{ color: "#000000" }} placeholder='Search' placeholderTextColor={"gray"} onChangeText={(text) => setCity(text)}
//             value={cityName} />

//             <EvilIcons name={'search'} color={'gray'} size={30} />
//           </View>

//           <MaterialCommunityIcons name={'bell-badge-outline'} color={'#c1c8d4'} size={30} />
//         </View>
       
//         <View style={{flexDirection:'row'}}>
//           <Ionicons name={'location'} size={20} color={'#c1c8d4'} />
//           <Text style={{ marginLeft:width*0.2,fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#000000' }}>{cityName}</Text>
//         </View>

       

//         <Text style={{ fontFamily: 'SF Pro Display', fontSize: 64, fontWeight: '600', color: '#c1c8d4', textAlign: 'center' }}>
//           {data?.list?.[0]?.main?.temp || ''} C
//         </Text>

//         <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#c1c8d4', textAlign: "center" }}>Precipitations</Text>

//         <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
//           <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#c1c8d4', marginRight: width * 0.04 }}>Min: C</Text>
//           <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#c1c8d4' }}>deg; C</Text>
//         </View>

//         <View style={{ marginTop: height * 0.01, marginBottom: height * 0.01, width: width * 0.8, alignSelf: "center", justifyContent: 'space-between', alignItems: "center", flexDirection: "row", }}>
//           <View style={{ flexDirection: 'row', alignItems: "center" }}>
//             <Ionicons name={'rainy'} size={20} color={'#c1c8d4'} />
//             <Text style={{ marginLeft: width * 0.02, fontFamily: "SF Pro Display", fontSize: 14, fontWeight: "700", color: '#c1c8d4' }}>18%</Text>
//           </View>

//           <View style={{ flexDirection: 'row', alignItems: "center" }}>
//             <Feather name={'thermometer'} size={20} color={'#c1c8d4'} />
//             <Text style={{ marginLeft: width * 0.02, fontFamily: "SF Pro Display", fontSize: 14, fontWeight: "700", color: '#c1c8d4' }}></Text>
//           </View>

//           <View style={{ flexDirection: 'row', alignItems: "center" }}>
//             <Feather name={'wind'} size={20} color={'#c1c8d4'} />
//             <Text style={{ marginLeft: width * 0.02, fontFamily: "SF Pro Display", fontSize: 14, fontWeight: "700", color: '#c1c8d4' }}> km\h</Text>
//           </View>
//         </View>

//         <View style={{ borderWidth: 1, borderColor: '#c1c8d4', borderRadius: 20, width: width * 0.8, alignSelf: "center", padding: height * 0.01 }}>

//           <Text style={{ fontFamily: "SF Pro Display", fontSize: 20, fontWeight: "700", color: '#c1c8d4', marginBottom: height * 0.01, }}>Next 3hours</Text>

//           <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
//             <View style={{ width: width * 0.2, borderWidth: 1, borderColor: 'white', borderRadius: 20, justifyContent: "space-between", alignItems: "center", backgroundColor: "#EAC696", opacity: .4 }}>
//               <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#000000' }}>31</Text>
//               <Image style={{ width: 43, height: 43 }} resizeMode='cover' source={require('../images/Sun.png')} />
//               <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#000000' }}>16:00</Text>
//             </View>

//             <View style={{ backgroundColor: "#EAC696", opacity: .4, width: width * 0.2, borderWidth: 1, borderColor: 'white', borderRadius: 20, justifyContent: "space-between", alignItems: "center" }}>
//               <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#000000' }}>31</Text>
//               <Image style={{ width: 43, height: 43 }} resizeMode='cover' source={require('../images/Sun.png')} />
//               <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#000000' }}>16:00</Text>
//             </View>

//             <View style={{ backgroundColor: "#EAC696", opacity: .4, width: width * 0.2, borderWidth: 1, borderColor: 'white', borderRadius: 20, justifyContent: "space-between", alignItems: "center" }}>
//               <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#000000' }}>31</Text>
//               <Image style={{ width: 43, height: 43 }} resizeMode='cover' source={require('../images/Sun.png')} />
//               <Text style={{ fontFamily: "SF Pro Display", fontSize: 18, fontWeight: "400", color: '#000000' }}>16:00</Text>
//             </View>
//           </View>
//         </View>
//         <ScrollView horizontal>
//   {data?.list && getThreeTimesData().map((item, index) => (
//     <View key={index} style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: 'white', borderRadius: 20, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#EAC696', opacity: 0.4 }}>
//       <Text style={{ fontFamily: 'SF Pro Display', fontSize: 18, fontWeight: '400', color: '#000000' }}>{item?.main?.temp || ''}°C</Text>
//       <Image style={{ width: 43, height: 43 }} resizeMode='cover' source={require('../images/Sun.png')} />
//       <Text style={{ fontFamily: 'SF Pro Display', fontSize: 18, fontWeight: '400', color: '#000000' }}>{item?.dt_txt || ''}</Text>
//     </View>
//   ))}
// </ScrollView>


// <ScrollView>
//   {data?.list && getFiveDaysData().map((dayData, dayIndex) => (
//     <View key={dayIndex}>
//       <Text style={{ fontFamily: 'SF Pro Display', fontSize: 20, fontWeight: '700', color: '#c1c8d4', marginBottom: height * 0.01 }}>Next 5 Days</Text>
//       {dayData.map((item, index) => (
//         <View key={index} style={{ backgroundColor: '#EAC696', opacity: 0.4, marginTop: height * 0.02, padding: width * 0.04, flexDirection: 'row', width: '100%', borderWidth: 1, borderColor: 'white', borderRadius: 20, justifyContent: 'space-between', alignItems: 'center' }}>
//           <Text style={{ fontFamily: 'SF Pro Display', fontSize: 18, fontWeight: '400', color: '#000000' }}>{item?.main?.temp || ''}°C</Text>
//           <Image style={{ width: 43, height: 43 }} resizeMode='cover' source={require('../images/Sun.png')} />
//           <Text style={{ fontFamily: 'SF Pro Display', fontSize: 18, fontWeight: '400', color: '#000000' }}>{item?.dt_txt || ''}</Text>
//         </View>
//       ))}
//     </View>
//   ))}
// </ScrollView>

//       </ImageBackground>
//     </View>


 
//   )
// }

// export default WeatherHomePg

