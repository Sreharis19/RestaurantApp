//import liraries
import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image, ImageBackground, Animated, TouchableOpacity, ScrollView } from "react-native";
import { Block, Text, Button as GaButton, theme, Icon } from 'galio-framework';
// Now UI themed components
import { Images, nowTheme, articles, Routes } from '../constants';
import AccountModal from "../components/custom/AccountModal";

const { width, height } = Dimensions.get('screen');

const Account = (props) => {
  const { navigation } = props;
  const [showEditprofile, setshowEditprofile] = React.useState(false);
  const Editprofile = () => {
    setshowEditprofile(true);
  }

  const renderTrialCard = () => {
    return (
      <Block style={styles.container}>
      <Block row space="between" style={styles.profileContainer}>
        <Block>
          <Text style={[styles.name, styles.nunitoBold]}>SREEHARI</Text>
          <Text style={[styles.name, styles.nunitoRegularprofiledescription]}>+91-9497126857 . sreeharis19@gmail.com</Text>
          </Block>
          <TouchableOpacity onPress={() => Editprofile()}>
          <Block>
            <Text style={[styles.subtitle, styles.nunitoSemiBold]}>
              EDIT
            </Text>
        </Block>
        </TouchableOpacity>
      </Block>
      <Block style={styles.divider} />
      <TouchableOpacity onPress={() => navigation.navigate(Routes.MYORDERS)}>
      <Block style={{ backgroundColor: "white" }}>
        <Block style={[styles.row, styles.optionContainer]}>
          <Block style={{ justifyContent: "center" }}>
            <Text style={[styles.nunitoSemiBold, styles.regularBlack]}>
              My Orders
            </Text>
          </Block>

          <Icon
            name="chevron-right"
            family="Entypo"
            color={nowTheme.COLORS.GRAY}
            size={24}
          />
        </Block>
      </Block>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.MANAGE_ADDRESS)}>
      <Block style={{ backgroundColor: "white" }}>
        <Block style={[styles.row, styles.optionContainer]}>
          <Block style={{ justifyContent: "center" }}>
            <Text style={[styles.nunitoSemiBold, styles.regularBlack]}>
              Manage Address
            </Text>
          </Block>

          <Icon
            name="chevron-right"
            family="Entypo"
            color={nowTheme.COLORS.GRAY}
            size={24}
          />
        </Block>
      </Block>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.MYFAVOURITES)}>
      <Block style={{ backgroundColor: "white" }}>
        <Block style={[styles.row, styles.optionContainer]}>
          <Block style={{ justifyContent: "center" }}>
            <Text style={[styles.nunitoSemiBold, styles.regularBlack]}>
              Favorites
            </Text>
          </Block>

          <Icon
            name="chevron-right"
            family="Entypo"
            color={nowTheme.COLORS.GRAY}
            size={24}
          />
        </Block>
      </Block>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.HELP)}>
      <Block style={{ backgroundColor: "white", marginTop: 20 }}>
        <Block style={[styles.row, styles.optionContainer]}>
          <Block style={{ justifyContent: "center" }}>
            <Text style={[styles.nunitoSemiBold, styles.regularBlack]}>
              Help
            </Text>
          </Block>

          <Icon
            name="chevron-right"
            family="Entypo"
            color={nowTheme.COLORS.GRAY}
            size={24}
          />
        </Block>
      </Block>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.TERMS_AND_CONDITIONS)}>
      <Block style={{ backgroundColor: "white" }}>
        <Block style={[styles.row, styles.optionContainer]}>
          <Block style={{ justifyContent: "center" }}>
            <Text style={[styles.nunitoSemiBold, styles.regularBlack]}>
              Terms and Condition
            </Text>
          </Block>

          <Icon
            name="chevron-right"
            family="Entypo"
            color={nowTheme.COLORS.GRAY}
            size={24}
          />
        </Block>
      </Block>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate(Routes.CONTACT_US)}>
      <Block style={{ backgroundColor: "white" }}>
        <Block style={[styles.row, styles.optionContainer]}>
          <Block style={{ justifyContent: "center" }}>
            <Text style={[styles.nunitoSemiBold, styles.regularBlack]}>
              Contact Us
            </Text>
          </Block>

          <Icon
            name="chevron-right"
            family="Entypo"
            color={nowTheme.COLORS.GRAY}
            size={24}
          />
        </Block>
      </Block>
      </TouchableOpacity>

        <TouchableOpacity>
        <Block style={{ backgroundColor: "white", marginTop: 30 }}>
          <Block style={[styles.row, styles.logout]}>
            <Text style={[styles.nunitoSemiBold, styles.logoutText]}>
              Log Out
            </Text>
          </Block>
        </Block>
        </TouchableOpacity>
        <AccountModal
          show={showEditprofile}
          onClose={() => setshowEditprofile(false)}
        />
    </Block>

    );
  }
    return renderTrialCard();
};
export default Account;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#ffffff",
  paddingTop: 40
},
row: {
  flexDirection: "row"
},
content: {
  // padding: 24
},
shadow: {
  shadowColor: nowTheme.COLORS.BLACK,
  shadowOffset: {
    width: 0,
    height: 6
  },
  shadowOpacity: 0.5,
  shadowRadius: 5
},
title: {
  fontSize: 24,
  color: nowTheme.COLORS.BLACK
},
nunitoBlack: {
  fontFamily: "montserrat-regular"
},
nunitoRegular: {
  fontFamily: "montserrat-regular"
},
nunitoRegularprofiledescription: {
  fontFamily: "montserrat-regular",
  fontSize: 14,
},
nunitoBold: {
  fontFamily: "montserrat-bold"
},
nunitoSemiBold: {
  fontFamily: "montserrat-bold"
},
regularBlack: { color: nowTheme.COLORS.BLACK, fontSize: 16 },
smallBlack: { color: nowTheme.COLORS.BLACK, fontSize: 12 },
avatar: {
  width: 60,
  height: 60,
  borderRadius: 30
},
subtitle: {
  fontSize: 16,
  color: nowTheme.COLORS.SUPPORRTIVE_BUTTON,
  paddingTop: 2
},
name: {
  fontSize: 20,
  color: nowTheme.COLORS.BLACK
},
profileContainer: {
  backgroundColor: nowTheme.COLORS.WHITE,
  paddingHorizontal: 10,
  paddingVertical: 10,
  marginVertical: 20
},
optionContainer: {
  justifyContent: "space-between",
  paddingVertical: 10,
  paddingHorizontal: 24
},
logout: {
  justifyContent: "center",
  paddingVertical: 12,
  paddingHorizontal: 24
},
divider: {
  height: 2,
  backgroundColor: nowTheme.COLORS.BLACK,
  marginVertical: theme.SIZES.BASE,
},
logoutText: { color: nowTheme.COLORS.SECONDARY, fontSize: 16 }
});