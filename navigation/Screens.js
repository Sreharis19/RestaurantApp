import React from 'react';
import { Block } from "galio-framework";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Icon } from 'galio-framework';
// screens
import Home from '../screens/Home';
import Pro from '../screens/Pro';
import Profile from '../screens/Profile';
import Account from '../screens/Account';
import Onboarding from '../screens/Onboarding';
import SettingsScreen from '../screens/Settings';
import search from '../screens/search';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';
// drawer
import CustomDrawerContent from "./Menu";
// header for screens
import { Header } from '../components';
import { nowTheme, tabs, Routes } from "../constants";
import ViewAll from '../screens/ViewAll';
import UserLocation from '../screens/Maps/UserLocation';
import Myorders from '../screens/Orders/Myorders';
import OrderDetail from '../screens/Orders/OrderDetail';
import ManageAddress from '../screens/Address/ManageAddress';
import MyFavourites from '../screens/Favourites/MyFavourites';
import TermsAndConditions from '../screens/MoreInfo/TermsAndConditions';
import Help from '../screens/MoreInfo/Help';
import Contactus from '../screens/MoreInfo/Contactus';
import Menu from '../screens/Menu';

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// const Bottom = createBottomTabNavigator();



function AccountStack(props) {
  return (
    <Stack.Navigator initialRouteName="Account" mode="card" headerMode="screen">
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Create Account"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.MYORDERS}
        component={Myorders}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Location"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.ORDER_DETAIL}
        component={OrderDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Order Details"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.MANAGE_ADDRESS}
        component={ManageAddress}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Address"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.MYFAVOURITES}
        component={MyFavourites}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Favorites"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.TERMS_AND_CONDITIONS}
        component={TermsAndConditions}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Terms And Conditions"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.HELP}
        component={Help}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Help"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.CONTACT_US}
        component={Contactus}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Contact Us"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}


function searchstack(props) {
  return (
    <Stack.Navigator initialRouteName="" mode="card" headerMode="screen">
      <Stack.Screen
        name="Search"
        component={search}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Search"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      <Stack.Screen
        name={Routes.PRODUCT_DETAIL}
        component={ProductDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Details"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function cartstack(props) {
  return (
    <Stack.Navigator initialRouteName="" mode="card" headerMode="screen">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Cart"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      <Stack.Screen
        name="Search"
        component={search}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Search"
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" }
        }}
      />
      <Stack.Screen
        name={Routes.VIEW_ALL}
        component={ViewAll}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Menu"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.UserLocation}
        component={UserLocation}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Location"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name={Routes.MENU}
        component={Menu}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Menu"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#eb8f05",
        inactiveTintColor: "#222222",
        itemStyle: {
          width: width * 2,
          backgroundColor: "transparent",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 11,
          marginLeft: 3,
          fontWeight: "bold",
          paddingBottom: 3
        }
      }}
    >

      <Tabs.Screen
        name="HOME"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              family="Octicons"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="SEARCH"
        component={searchstack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="search"
              family="MaterialIcons"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="CART"
        component={cartstack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="local-grocery-store"
              family="MaterialIcons"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="ACCOUNT"
        component={AccountStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="person"
              family="MaterialIcons"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

