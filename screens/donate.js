import React, { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { Block, Checkbox, Text, Button as GaButton, theme } from 'galio-framework';
import Spacer from "../components/custom/Spacer";
import { Button, Icon, Input } from '../components';
import { Images, nowTheme, Routes } from '../constants';
import * as Progress from 'react-native-progress';
const { width, height } = Dimensions.get('screen');

const Register = (props) => {
  const { navigation } = props;
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>{children}</TouchableWithoutFeedback>
  );

  const [question, setquestion] = useState("Do you have a recent piercing or tattoo ?");
  const [key, setkey] = useState(0.2);
  const [pass, setpass] = useState(false);
  const [fail, setfail] = useState(false);
  const [description, setdescription] = useState("If you’ve recently had a tattoo, piercing, semi-permanent make-up –any treatment that pierces the skin -- you will need to wait at least four months before being eligible to donate. The primary reason is to prevent transferring the hepatitis virus. Cosmetic tattoos applied in a licensed establishment in a regulated state using sterile needles and ink that is not reused is acceptable.");

  const Nocheck = (key) => {
    if (key == 0.2) {
      setquestion("Do you have a bad cold or the flu ?");
      setkey(0.4);
      setdescription("If you have a fever or a productive cough, or generally feel unwell on the day of donation, you should wait and come back when you feel better. The Red Cross follows this policy as a precaution to prevent the spread of flu during blood drives.​");
    }
    if (key == 0.4) {
      setquestion("Do you were recently treated with antibiotics ?");
      setkey(0.6);
      setdescription("Those who have completed a course of antibiotics within the last seven days, or have had any type of infection within the last two weeks, are not allowed to give blood. This is because some infections are transmissible in blood. A donor with an acute bacterial infection should not donate, so the reasons why you’re taking antibiotics must be evaluated as well.​");
    }
    if (key == 0.6) {
      setquestion("Do you weigh enough ?");
      setkey(0.8);
      setdescription("Donors need to weigh at least 50 kg and be in generally good health. Donors under the age of 18 also have to meet specific weight and height requirements. Donors under the age of 18 also have to meet specific weight and height requirements. If you are underweight (or have low iron in your blood) you may faint or become dangerously weakened after they take your blood.​​");
    }
    if (key == 0.8) {
      setquestion("Sorry, You are not eligible for Blood Donation");
      setfail(true);
      setdescription("");
    }
    if (key == 1) {
      setquestion("Great, You are eligible for Blood Donation");
      setpass(true);
      setdescription("");
    }

  }
  const readMore = (key) => {
    if (key == 0.2) {
      setquestion("Sorry, You are not eligible for Blood Donation");
      setfail(true);
      setdescription("");
    }
    if (key == 0.4) {
      setquestion("Sorry, You are not eligible for Blood Donation");
      setfail(true);
      setdescription("");
    }
    if (key == 0.6) {
      setquestion("Sorry, You are not eligible for Blood Donation");
      setfail(true);
      setdescription("");
    }
    if (key == 0.8) {
      setquestion("Do you were recently treated with antibiotics ?");
      setkey(1);
      setdescription("Those who have completed a course of antibiotics within the last seven days, or have had any type of infection within the last two weeks, are not allowed to give blood. This is because some infections are transmissible in blood. A donor with an acute bacterial infection should not donate, so the reasons why you’re taking antibiotics must be evaluated as well.​");
    }
    if (key == 1) {
      setquestion("Sorry, You are not eligible for Blood Donation");
      setfail(true);
      setdescription("");
    }
  }

  const renderTrialCard = () => {
    return (
      <DismissKeyboard>
        <Block flex middle>

          <ImageBackground
            source={Images.RegisterBackground}
            style={styles.imageBackgroundContainer}
            imageStyle={styles.imageBackground}
          >
            <Block flex middle>
              <Block style={styles.DonorContainer}>
                <Progress.Bar color={'#fc037f'} progress={key} width={370} />
                <Block flex space="evenly">
                  <Block flex={0.2} middle style={styles.socialConnect}>
                    {pass === true ?
                      <Block></Block>
                      :
                      <Block flex={0.5} middle>
                        <Text
                          style={{
                            fontFamily: 'montserrat-regular',
                            textAlign: 'center'
                          }}
                          color="#333"
                          size={24}
                        >
                          Eligibility Check
                      </Text>
                      </Block>
                    }
                  </Block>

                  <Block flex={1} middle space="between">
                    <Block center flex={0.9}>
                      <Block flex space="between">
                        <Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Text
                              style={{
                                fontFamily: 'montserrat-regular',
                                textAlign: 'left'
                              }}
                              color="#333"
                              size={24}
                            >
                              {question}
                            </Text>
                          </Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Text
                              style={{
                                fontFamily: 'montserrat-regular',
                                textAlign: 'left'
                              }}
                              muted
                              size={16}
                            >
                              {description}
                            </Text>
                          </Block>
                        </Block>
                        {fail === true ?
                          <Block flex row space="between" middle>
                            <Block flex middle>
                              <Button color="Error" onPress={() => navigation.navigate('Home')} shadowless round size="small" style={styles.createButton}>
                                <Text
                                  style={{ fontFamily: 'montserrat-bold' }}
                                  size={14}
                                  color={nowTheme.COLORS.WHITE}
                                >
                                  Abandon
                            </Text>
                              </Button>
                            </Block>
                          </Block>
                          :
                          <Block>
                            {pass === true ?
                              <Block flex row space="between" middle>
                                <Block flex middle>
                                  <Button color="success" onPress={() => navigation.navigate(Routes.DONATE_FORM)} shadowless round size="small" style={styles.createButton}>
                                    <Text
                                      style={{ fontFamily: 'montserrat-bold' }}
                                      size={14}
                                      color={nowTheme.COLORS.WHITE}
                                    >
                                      Proceed
                            </Text>
                                  </Button>
                                </Block>
                              </Block>
                              :
                              <Block flex row space="between" middle>
                                <Block flex left>
                                  <Button color="info" onPress={() => Nocheck(key)} shadowless round size="small" style={styles.createButton}>
                                    <Text
                                      style={{ fontFamily: 'montserrat-bold' }}
                                      size={14}
                                      color={nowTheme.COLORS.WHITE}
                                    >
                                      No
                            </Text>
                                  </Button>
                                </Block>
                                <Block flex fluid right>
                                  <Button color="warning" onPress={() => readMore(key)} shadowless round size="small" style={styles.createButton}>
                                    <Text
                                      style={{ fontFamily: 'montserrat-bold' }}
                                      size={14}
                                      color={nowTheme.COLORS.WHITE}
                                    >
                                      Yes
                            </Text>
                                  </Button>
                                </Block>
                              </Block>
                            }
                          </Block>
                        }
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </ImageBackground>
        </Block>
      </DismissKeyboard>
    );
  };

  return renderTrialCard();
};

export default Register;

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  imageBackground: {
    width: width,
    height: height
  },
  DonorContainer: {
    marginTop: 55,
    width: width * 0.9,
    height: height < 812 ? height * 0.4 : height * 0.68,
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 4,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  socialConnect: {
    backgroundColor: nowTheme.COLORS.WHITE
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: nowTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12,
    color: nowTheme.COLORS.ICON_INPUT
  },
  inputs: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 21.5
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.3,
    marginTop: 25,
    marginBottom: 30
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center',
    marginHorizontal: 10
  }
});
