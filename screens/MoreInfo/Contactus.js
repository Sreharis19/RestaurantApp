import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Linking
} from "react-native";
import { Block, Text, Button as GaButton, theme, Icon } from 'galio-framework';
import BlankData from "../../components/custom/BlankData";
// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../../constants';

const { width, height } = Dimensions.get("window");

const Contactus = (props) => {
    const { navigation } = props;

    const data = [
        {
          id: 1,
          type: "Mail",
          text: "Mail Us",
          subtext: "Email Us Your Quaries",
        },
        {
          id: 2,
          type: "Call",
          text: "Call Us",
          number: "9497126857",
          subtext: "Talk To Our Representative",
        }
      ];

    const dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else {phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
     };
  
    const renderTrialCard = ({ item, index }) => {
      const { id, type, text, subtext, number } = item;
  
      return (
        <Block
        style={[
          styles.shadow,
          {
            flexDirection: "row",
            backgroundColor: "#fff",
            padding: 15,
            //marginHorizontal: 20,
            marginLeft: 32,
            marginRight: 32,
            marginVertical: 6,
            borderRadius: 12
          }
        ]}
      >
        <Block
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        >
          <Block
            style={{
              justifyContent: "space-between",
              //alignItems: "flex-start",
              flexDirection: "row"
            }}
          >
            <Block style={{ flexDirection: "column", alignItems: "center" }}>
              <Text
                style={{
                  color: nowTheme.COLORS.BLACK,
                  fontSize: 16,
                  fontFamily: "montserrat-bold" 
                }}
              >
                {text}
              </Text>
            </Block>

            <Block
              style={{
                justifyContent: "flex-start"
              }}
            >
              {type === "Mail" ?
              <TouchableOpacity onPress={() => Linking.openURL('mailto:support@reubro.com') }
              title="support@reubro.com">
              <Block style={styles.badge}>
                <Icon
                style={{ padding: 0 }}
                name="email"
                family="Fontisto"
                size={20}
                color={nowTheme.COLORS.SUPPORRTIVE}
              />
              </Block>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={()=>{dialCall(number)}}>
              <Block style={styles.badge}>
                <Icon
                style={{ padding: 0 }}
                name="phone-call"
                family="Feather"
                size={20}
                color={nowTheme.COLORS.SUPPORRTIVE}
              />
              </Block>
              </TouchableOpacity>
              }
            </Block>
          </Block>

          <Block>
          <Text
              style={{
                color: nowTheme.COLORS.GRAY,
                fontSize: 14,
                fontFamily: "montserrat-regular"
              }}
            >
              {subtext}
            </Text>
          </Block>
        </Block>
      </Block>
      );
    };
  
    const renderMainContent = () => {
      return (
          <Block style={styles.recommendContainer}>
            <Block style={{ flexDirection: "column" }}>
              <FlatList
                data={data}
                renderItem={renderTrialCard}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `cart-${index}`}
              ></FlatList>
            </Block>
          </Block>
      );
    };

    const renderHeader = () => {
      return (
        <Block row style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Icon
                style={{ padding: 0 }}
                name="arrow-left-circle"
                family="Feather"
                size={24}
                color={nowTheme.COLORS.SUPPORRTIVE}
              />
              </TouchableOpacity>
          <Text style={styles.title}>Contact Us</Text>
        </Block>
      );
    }

      const mainsection = () => {
        return (
          <Block style={styles.container}>
            {renderHeader()}
            {renderMainContent()}
          </Block>
        );
    }
  
    if (data.length <= 0)
      return (
        <BlankData
          title="Something Went Wrong !"
          description="Please Try Again Later"
        />
      );
  
    return mainsection();
  };
  
  export default Contactus;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fcfcfc",
    },
    header: {
      padding: 70,
      paddingHorizontal: 8,
      paddingBottom: 20
    },
    title: {
      fontSize: 18,
      color: nowTheme.COLORS.BLACK,
      fontFamily: "montserrat-bold",
      paddingHorizontal: 10,
      marginTop: Platform.OS === "ios" ? 14 : 0
    },
    searchSection: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F9FAFF",
      margin: 32,
      borderRadius: 22
    },
    searchIcon: {
      paddingBottom: 10
    },
    input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: "#F9FAFF",
      color: nowTheme.COLORS.GRAY,
      backgroundColor: "#F9FAFF",
      fontFamily: "montserrat-bold",
      borderRadius: 22
    },
    recentSearchText: {
      color: nowTheme.COLORS.BLACK,
      fontFamily: "montserrat-bold",
      paddingHorizontal: 34,
      paddingBottom: 10,
      fontSize: 20
    },
    recentText: {
      color: nowTheme.COLORS.GRAY,
      fontFamily: "montserrat-regular",
      paddingHorizontal: 34,
      paddingBottom: 10,
      fontSize: 16
    },
    recommendContainer: { flex: 1, flexDirection: "column", paddingTop: 0 },
    recommendedHeader: {
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingHorizontal: 20,
      paddingVertical: 20,
      flexDirection: "row"
    },
    recommendText: {
      fontSize: 14 * 1.4,
      color: nowTheme.COLORS.BLACK,
      fontFamily: "montserrat-regular"
    },
    BlockAllText: { color: nowTheme.COLORS.gray, fontFamily: "montserrat-regular" },
    shadow: {
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 6
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
      elevation: 2
    },
    searchIcon: {
      padding: 12
    },
    buttonContainer: {
      paddingHorizontal: 32,
      justifyContent: "center",
      paddingBottom: 20
    },
    regularText: {
      color: nowTheme.COLORS.BLACK,
      fontSize: 18,
      fontFamily: "montserrat-regular",
      alignSelf: "center"
    },
    badge: {
      paddingHorizontal: nowTheme.SIZES.BASE / 8,
      paddingVertical: nowTheme.SIZES.BASE / 8,
      borderWidth: 1,
      borderColor: nowTheme.COLORS.BORDER_COLOR,
      borderRadius: 20,
      fontSize: 10,
    },
    badgecolorongoing: {
      backgroundColor: nowTheme.COLORS.SUPPORRTIVE_BUTTON
    },
    badgecolorCompleted: {
      backgroundColor: nowTheme.COLORS.SUPPORRTIVE
    },
    subtitle: {
      fontSize: 16,
      color: nowTheme.COLORS.SUPPORRTIVE_BUTTON,
      paddingTop: 2
    },
    nunitoSemiBold: {
      fontFamily: "montserrat-bold"
    },
  });