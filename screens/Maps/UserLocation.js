import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { Block, Text, Button as GaButton, theme, Icon } from 'galio-framework';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import BlankData from "../../components/custom/BlankData";
import Spacer from "../../components/custom/Spacer";
import CustomHeader from "../../components/custom/CustomHeader";
// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../../constants';
import { spacer } from "../../components";

const { Marker } = MapView;
const { height, width } = Dimensions.get("screen");


const UserLocation = (props) => {
  const { navigation } = props;

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [location, setLocation] = useState(null);
  const [latitude, setlatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [status, setstatus] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest});
      setLocation(location);
      setlatitude(location.coords.latitude);
      setlongitude(location.coords.longitude);
      setstatus(false);
    };
    fetchData();
  }, []);


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const mainsection = () => {
    return (
      <View style={styles.container}>
        <CustomHeader
          mapScreen={true}
        />
        <MapView
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        }}
          showsMyLocationButton
          style={styles.map}
          zoomEnabled={true}
          minZoomLevel={13}
        >
          {/* {locationChosen ? (
            <Marker
              coordinate={{
                latitude: Number(this.state.latitude),
                longitude: Number(this.state.longitude)
              }}
            >
              <View style={styles.myMarker}>
                <View style={styles.myMarkerDot} />
              </View>
            </Marker>
          ) : ( */}
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude
              }}
            >
              <View style={styles.myMarker}>
                <View style={styles.myMarkerDot} />
              </View>
            </Marker>
          {/* // )} */}
        </MapView>
        <View style={styles.buttonContainer}>
        <GaButton uppercase color={nowTheme.COLORS.SUPPORRTIVE}>SET LOCATION</GaButton>
        </View>
      </View>
    );
}

const renderLoader = () => {
  return <Block flex middle >
      <Text style={[styles.subtitle,, styles.nunitoSemiBold]}>LOCATING ...</Text>
      <Spacer></Spacer>
      <ActivityIndicator></ActivityIndicator>
  </Block>
}

    return status === true ? renderLoader() : mainsection() ;

};

export default UserLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 7
  },
  myMarker: {
    zIndex: 2,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(10, 196, 186, 0.3)"
  },
  myMarkerDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    backgroundColor: nowTheme.COLORS.PRIMARY
  },
  shadow: {
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  buttonContainer: {
    position: "absolute",
    bottom: 8,
    left: 0,
    right: 0,
    padding: 25
  },
  subtitle: {
    fontSize: 16,
    color: nowTheme.COLORS.SUPPORRTIVE_BUTTON,
  },
  nunitoSemiBold: {
    fontFamily: "montserrat-bold"
  },
});