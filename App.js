import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAweSome from 'react-native-vector-icons/FontAwesome';

// Import các màn hình của bạn
import HomeScreen from './screens/HomeScreen';
import MuaSam from './screens/MuaSam';
import Scan from './screens/Scan';
import Voucher from './screens/Voucher';
import Khac from './screens/Khac';



const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#B31E8D",
        tabBarInactiveTintColor: 'gray',
      })

      }
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Icon name={focused ? 'home' : 'home-outline'}
            color={focused ? '#B31E8D' : 'gray'} size={28} />
        }
      }} />
      <Tab.Screen name="Mua Sắm" component={MuaSam} options={{
        tabBarIcon: ({ focused }) => {
          return <Icon name={focused ? 'cart' : 'cart-outline'}
            color={focused ? '#B31E8D' : 'gray'} size={28} />
        }
      }} />
      <Tab.Screen name="Scan" component={Scan}
        options={{
          title: "",
          tabBarIconStyle: {
            backgroundColor: '#B31E8D',
            width: 50,
            height:50,
            borderRadius:'50%',
            position:'absolute',
            top:0
          },
          tabBarIcon: ({ focused }) => {
            return <IconFontAweSome name={'barcode'}
              color={'#fff'} size={28} />
          }
        }} />
      <Tab.Screen name="Voucher" component={Voucher} options={{
        tabBarIcon: ({ focused }) => {
          return <Icon name={focused ? 'newspaper' : 'newspaper-outline'}
            color={focused ? '#B31E8D' : 'gray'} size={28} />
        }
      }} />
      <Tab.Screen name="Khác" component={Khac} options={{
        headerTitle: "Thông tin khác",
        headerTintColor: '#B31E8D',
        headerStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          shadowColor: '#CCC',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        },
        tabBarIcon: ({ focused }) => {
          return <Icon name={focused ? 'menu' : 'menu-outline'}
            color={focused ? '#B31E8D' : 'gray'} size={28} />
        }
      }} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
