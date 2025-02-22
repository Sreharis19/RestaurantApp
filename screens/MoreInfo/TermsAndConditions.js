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
  ScrollView
} from "react-native";
import { Block, Text, Button as GaButton, theme, Icon } from 'galio-framework';
import BlankData from "../../components/custom/BlankData";
// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../../constants';

const { width, height } = Dimensions.get("window");

const TermsAndConditions = (props) => {
    const { navigation } = props;
  
    const renderTrialCard = () => {
      return (
        <View
          style={{
            paddingTop: 0,
            paddingBottom: 100,
            paddingLeft: 25,
            paddingRight: 25,
            justifyContent: "space-between"
          }}
        >
          

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginVertical: 15 }}
          >
            <Text style={styles.termsText}>
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text style={styles.termsText}>
              2. Support for Expo services is only available in English, via
              e-mail.
            </Text>
            <Text style={styles.termsText}>
              3. You understand that Expo uses third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to run the Service.
            </Text>
            <Text style={styles.termsText}>
              4. You must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Expo, or any other Expo service.
            </Text>
            <Text style={styles.termsText}>
              5. You may use the Expo Pages static hosting service solely as
              permitted and intended to host your organization pages, personal
              pages, or project pages, and for no other purpose. You may not use
              Expo Pages in violation of Expo's trademark or other rights or in
              violation of applicable law. Expo reserves the right at all times
              to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text style={styles.termsText}>
              6. You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Expo.
            </Text>
            <Text style={styles.termsText}>
              7. We may, but have no obligation to, remove Content and Accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory,
              pornographic, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Service.
            </Text>
            <Text style={styles.termsText}>
              8. Verbal, physical, written or other abuse (including threats of
              abuse or retribution) of any Expo customer, employee, member, or
              officer will result in immediate account termination.
            </Text>
            <Text style={styles.termsText}>
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text style={styles.termsText}>
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>
        </View>
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
          <Text style={styles.title}>Terms Of Service</Text>
        </Block>
      );
    }

      const mainsection = () => {
        return (
          <Block style={styles.container}>
            {renderHeader()}
            {renderTrialCard()}
          </Block>
        );
    }
  
    return mainsection();
  };
  
  export default TermsAndConditions;
  
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
    termsText: {
        marginBottom: 16,
        color: nowTheme.COLORS.BLACK,
        lineHeight: 28,
        fontSize: 12,
        fontFamily: 'montserrat-regular'
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