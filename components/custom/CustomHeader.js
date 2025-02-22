import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform
} from 'react-native';

import { Block, Text, Button as GaButton, theme, Icon } from 'galio-framework';
import { Images, nowTheme, articles, tabs } from '../../constants';

const { width, height } = Dimensions.get('window');

class CustomHeader extends Component {

  render() {
    const location = "Ravipuram, Kochi, Kerala, 682016";
    console.log('state location', this.props.mapScreen);
    // const location = this.props.location.actualLocation;
    const Mapscreenstatus = this.props.mapScreen;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerView}>
            <View style={styles.options}>
              <Text style={styles.locationText}>Your Location</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                {Mapscreenstatus === true ? (
                  <Text style={styles.actualLocation}>
                    {location.split(',', 3)}
                  </Text>
                ) : (
                  <Text style={styles.actualLocation}>
                    {location.split(',', 1)}
                  </Text>
                )}
                <Icon
                  name='chevron-down'
                  family='Entypo'
                  size={16 * 0.75}
                  color={nowTheme.COLORS.BLACK}
                  style={{ marginLeft: 6, marginTop: 4 }}
                />
              </View>
            </View>
          </View>

          {Mapscreenstatus === true ? (
            <View style={styles.settings}>
              <TouchableOpacity>
                <Icon
                  name='my-location'
                  family='MaterialIcons'
                  size={26}
                  color={nowTheme.COLORS.SUPPORRTIVE_BUTTON}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.settings}>
              <TouchableOpacity>
                <Image source={Images.map_icon} style={styles.iconMap} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}
export default CustomHeader;
const styles = StyleSheet.create({
  headerContainer: {
    top: 10,
    // height: height * 0.12,
    width: width,
    flex: 1.2,
    paddingTop: 20
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 14 : 0
  },
  headerView: {
    flex: 2,
    flexDirection: 'row'
  },
  options: {
    flex: 1,
    paddingHorizontal: 14
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  locationText: {
    fontSize: 14,
    color: nowTheme.COLORS.GRAY,
    marginBottom: 5,
    fontFamily: 'montserrat-bold'
  },
  actualLocation: {
    fontSize: 16,
    color: nowTheme.COLORS.BLACK,
    fontFamily: 'montserrat-bold'
  },
  settings: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: 16,
    flexDirection: 'row'
  },
  iconMap: { height: 25, width: 25, marginRight: 28 }
});