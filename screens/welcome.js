import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  FlatList,
  Image,
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

import { Color, foodimages } from '../constants/';
import { HeaderHeight } from '../constants/utils';

const { width, height } = Dimensions.get("window");

export default class Onboarding extends React.Component {
  scrollX = new Animated.Value(0);

  state = {
    showTerms: false
  };

  renderIllustrations = () => {
    const illustrations = [
      { id: 1, source: foodimages.Illustration1 },
      { id: 2, source: foodimages.Illustration2 },
      { id: 3, source: foodimages.Illustration3 }
    ];

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        data={illustrations}
        scrollEventThrottle={16}
        snapToAlignment="center"
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{
              height: height / 2,
              width: width,
              overflow: "visible"
            }}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }
        ])}
      />
    );
  };

  renderSteps() {
    const illustrations = [
      { id: 1, source: foodimages.Illustration1 },
      { id: 2, source: foodimages.Illustration2 },
      { id: 3, source: foodimages.Illustration3 }
    ];
    const stepPosition = Animated.divide(this.scrollX, width);

    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 48,
          right: 0,
          left: 0
        }}
      >
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });

          return (
            <Animated.View
              style={{
                flex: 0,
                backgroundColor: Color.gray2,
                opacity: opacity,
                width: 5,
                height: 5,
                borderRadius: 5,
                marginHorizontal: 2.5
              }}
              key={`step-${index}`}
            />
          );
        })}
      </View>
    );
  }

  renderTermsService() {
    return (
      <Modal animationType="slide" visible={this.state.showTerms}>
        <View
          style={{
            paddingTop: 35,
            paddingBottom: 100,
            paddingLeft: 25,
            paddingRight: 25,
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              fontWeight: "200",
              fontSize: 26,
              color: Color.black,
              fontFamily: 'montserrat-regular'
            }}
          >
            Terms of Service
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginVertical: 25 }}
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

          <View
            style={{
              justifyContent: "center",
              paddingLeft: 0,
              paddingRight: 0
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.setState({ showTerms: false })}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.1, 0.9]}
                colors={[Color.primary, Color.secondary]}
                style={{
                  height: 48,
                  borderRadius: 6,
                  justifyContent: "center",
                  shadowColor: "#323643",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 10
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: 'montserrat-regular'
                  }}
                >
                  I understand
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 0.4
          }}
        >
          <Text
            style={{
              fontSize: 26,
              textAlign: "center",
              fontWeight: "bold",
              color: Color.black,
              fontFamily: 'montserrat-regular'
            }}
          >
            From My
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                color: Color.primary
                //fontFamily: "Nunito-Black"
              }}
            >
              {" "}
              Kitchen.
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: Color.gray1,
              marginTop: 12.5,
              fontFamily: 'montserrat-regular'
            }}
          >
            To Your Door.
          </Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </View>

        <View style={{ flex: 0.6 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.onLoginPress}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0.1, 0.9]}
              colors={[Color.primary, Color.secondary]}
              style={{
                height: 48,
                borderRadius: 6,
                margin: 25,
                justifyContent: "center",
                shadowColor: "#323643",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 10
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "500",
                  fontFamily: 'montserrat-regular'
                }}
              >
                LOGIN
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={{ paddingBottom: 0 }}>
            <TouchableOpacity
              style={{
                borderRadius: 6,
                height: 48,
                justifyContent: "center",
                marginVertical: 8.3,
                shadowColor: Color.black,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                paddingBottom: 30
              }}
              onPress={this.props.onSignUpPress}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  color: Color.black,
                  fontFamily: 'montserrat-regular'
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ showTerms: true })}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: Color.gray,
                  fontSize: 12,
                  fontFamily: 'montserrat-regular'
                }}
              >
                Terms of service
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.renderTermsService()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Color.white
  },
  topContainer: {
    flex: 0.93
  },
  logo: {
    resizeMode: "contain",
    height: height * 0.26,
    width: width * 0.45,
    alignSelf: "center",
    marginTop: height * 0.02
  },
  textInput: {
    backgroundColor: "white",
    marginLeft: 41,
    marginRight: 41,
    color: "#0AC4BA"
  },
  signIn: {
    width: width * 0.8
    // backgroundColor: "#0072C6"
  },
  signInWrapper: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 38,
    alignItems: "center",
    justifyContent: "center"
  },
  termsText: {
    marginBottom: 16,
    color: Color.gray,
    lineHeight: 24,
    fontSize: 12,
    fontFamily: 'montserrat-regular'
  }
});
