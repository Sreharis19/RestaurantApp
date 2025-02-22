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
  TouchableWithoutFeedback
} from "react-native";
import { Block, Text, Button as GaButton, theme, Icon } from 'galio-framework';
import BlankData from "../../components/custom/BlankData";
// Now UI themed components
import { Images, nowTheme, articles, tabs, Routes } from '../../constants';

const { width, height } = Dimensions.get("window");

const Myorders = (props) => {
    const { navigation } = props;
    var cart_total = 640;
    var delivery = cart_total * 0.1;
    const data = [
        {
          id: 1,
          name: "Samoosa",
          full_name: "Rakhi Savant",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          saved: true,
          quantity: 1,
          location: "Kaloor",
          userlocation: "Edapally",
          status: "On Going",
          temperature: 34,
          title: "Green Salad",
          description: "Fresh Green Salad",
          rating: 4.3,
          price: 120.0,
          reBlocks: 3212,
          images:"https://images.unsplash.com/photo-1597581366015-87b44b235ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        },
        {
          id: 2,
          name: "Chicken Burger",
          full_name: "Rakhi Savant",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          saved: false,
          quantity: 1,
          location: "Edapally",
          status: "On Going",
          userlocation: "Kaloor",
          temperature: 34,
          title: "Loutraki",
          description: "Tasty Chicken Burger",
          rating: 4.6,
          reBlocks: 3212,
          price: 150.0,
          images:"https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        },
        {
          id: 3,
          name: "Chicken Biryani",
          full_name: "Rakhi Savant",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          saved: true,
          quantity: 1,
          location: "Kadavanthara",
          status: "Completed",
          userlocation: "Vypin",
          temperature: 34,
          title: "Santorini",
          description: "Chicken Burger",
          rating: 3.2,
          reBlocks: 3212,
          price: 200.0,
          images: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        },
        {
          id: 4,
          name: "Chicken Curry",
          full_name: "Rakhi Savant",
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
          quantity: 1,
          location: "Vypin",
          userlocation: "Kadavanthara",
          status: "Completed",
          temperature: 34,
          title: "Loutraki",
          description: "This attractive small town, 80 kilometers from Athens",
          rating: 5,
          reBlocks: 3212,
          price: 170.0,
          images: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80",
        }
      ];
  
    const renderTrialCard = ({ item, index }) => {
      const { name, full_name, quantity, images, price, location, userlocation, status } = item;
  
      return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate(Routes.ORDER_DETAIL)}>
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
        <Block style={{ flex: 0.25 }}>
          <Image
            style={{ width: 65, height: 65, borderRadius: 6 }}
            source={{ uri: images }}
          />
        </Block>
        <Block
          style={{
            flex: 0.75,
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
            <Block style={{ flexDirection: "column" }}>
              <Text
                style={{
                  color: nowTheme.COLORS.BLACK,
                  fontSize: 16,
                  fontFamily: "montserrat-bold"
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  color: nowTheme.COLORS.SECONDARY,
                  fontFamily: "montserrat-bold",
                  marginRight: 10,
                  marginBottom: 10
                }}
              >
                Rs. {Number(price).toFixed(2)}
              </Text>
            </Block>

            <Block
              style={{
                justifyContent: "flex-start"
              }}
            >
              {status === "Completed" ?
              <Text style={[styles.badge, styles.badgecolorCompleted]} size={18} bold color={theme.COLORS.WHITE}>{status}
                  </Text>
              :
              <Text style={[styles.badge, styles.badgecolorongoing]} size={18} bold color={theme.COLORS.WHITE}>{status}
                  </Text>
              }
            </Block>
          </Block>

          <Block>
            <Text
              style={{
                color: nowTheme.COLORS.BLACK,
                fontSize: 14,
                fontFamily: "montserrat-regular"
              }}
            >
              Chef:
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-regular"
                }}
              >
                {` ${full_name}`}
              </Text>
            </Text>
          </Block>
          <Block>
          <Text
              style={{
                color: nowTheme.COLORS.BLACK,
                fontSize: 14,
                fontFamily: "montserrat-regular"
              }}
            >
              Location:
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-regular"
                }}
              >
                {` ${location}`}
              </Text>
            </Text>
          </Block>
          <Block>
          <Text
              style={{
                color: nowTheme.COLORS.BLACK,
                fontSize: 14,
                fontFamily: "montserrat-regular"
              }}
            >
              Delivery Location:
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-regular"
                }}
              >
                {` ${userlocation}`}
              </Text>
            </Text>
          </Block>
        </Block>
      </Block>
      </TouchableWithoutFeedback>
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
          <Text style={styles.title}>My Orders</Text>
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
          title="No orders Made"
          description="Please Order"
        />
      );
  
    return mainsection();
  };
  
  export default Myorders;
  
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
      paddingHorizontal: nowTheme.SIZES.BASE,
      paddingVertical: nowTheme.SIZES.BASE / 2,
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
  });