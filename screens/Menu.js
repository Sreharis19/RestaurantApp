import React, { PureComponent } from "react";
import {
    View,
    StyleSheet,
    Animated,
    Image,
    Dimensions,
    ScrollView,
    Platform,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";
import { Block, Text, Button as GaButton, theme, Icon } from 'galio-framework';
import BlankData from "../components/custom/BlankData";
// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../constants';

const { width, height } = Dimensions.get("window");

const Menu = (props) => {
    const { navigation } = props;

    const data =  {
          id: 1,
          name: "Biriyani",
          full_name: "Rakhi Savant",
          owner: "Rakhi Savant",
          avatar: "https://images.squarespace-cdn.com/content/v1/56a752b7df40f3cc488c6486/1457344660908-9AM6WODG1IIT2TV2C6NP/ke17ZwdGBToddI8pDm48kDiqcgDgEVkgAbJzN36X2nR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0r9YoV8ytu8SWDj21Bt3yU-J1hjwEI_F-dGdUQQEfwEyWTvHs2iO-Zr3KHorLxwO0Q/IMG_2053.jpg?format=300w",
          saved: true,
          Time_to_make: 30,
          reviews: 4,
          rating: 4,
          location: "6 Km from you",
          temperature: 34,
          title: "Green Salad",
          incredients: "Vegetable, Spice, Meat, Yogurt, Dried fruit, Garlic, Mint, Rice, Egg, Mint leaf",
          price: 188.0,
          reBlocks: 3212,
          image: [
            "https://images.unsplash.com/photo-1595678522254-781a08ef8579?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1543826173-1beeb97525d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80"
          ]
        };

        const dish = [
          {
            id: 1,
            name: "Samoosa",
            full_name: "Rakhi Savant",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            saved: true,
            quantity: 1,
            location: "0.4 Km from you",
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
            location: "0.4 Km from you",
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
            location: "0.4 Km from you",
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
            location: "0.4 Km from you",
            temperature: 34,
            title: "Loutraki",
            description: "This attractive small town, 80 kilometers from Athens",
            rating: 5,
            reBlocks: 3212,
            price: 170.0,
            images: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80",
          },
          {
            id: 2,
            name: "Chicken Burger",
            full_name: "Rakhi Savant",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            saved: false,
            quantity: 1,
            location: "0.4 Km from you",
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
            location: "0.4 Km from you",
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
            location: "0.4 Km from you",
            temperature: 34,
            title: "Loutraki",
            description: "This attractive small town, 80 kilometers from Athens",
            rating: 5,
            reBlocks: 3212,
            price: 170.0,
            images: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80",
          }
        ];

    const { product } = data;

    scrollX = new Animated.Value(0);
    const dotPosition = Animated.divide(scrollX, width);
    const image_url  = data.image;
    const stars = new Array(5).fill(0);

    const renderRatings = (rating) => {
        return stars.map((_, index) => {
          const activeStar = Math.floor(rating) >= index + 1;
          return (
            <Icon
              name="star"
              family="FontAwesome"
              key={`star-${index}`}
              size={14}
              color={nowTheme.COLORS[activeStar ? "TERTIARY" : "GRAY"]}
              style={{ justifyContent: "space-evenly", marginRight: 3 }}
            />
          );
        });
    };

      const mainsection = () => {
        return (
            <View style={{ flex: 1 }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 44 }}
            >
              <View style={[styles.container, styles.contentHeader]}>
                <TouchableHighlight
                  activeOpacity={0.8}
                  style={styles.profileButton}
                >
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: data.avatar
                    }}
                  />
                </TouchableHighlight>
    
                <Text style={[styles.title, styles.nunitoBlack]}>
                 CHEF - {data.full_name}
                </Text>
    
                <View style={[styles.row, styles.textContainer]}>
                  <Text style={[styles.nunitoRegular, styles.regularGray]}>
                    Ranipauwa, Pokhara
                  </Text>
                </View>
    
                <View style={[styles.row, styles.textContainer]}>
                  <View style={styles.row}>
                    <Icon
                      name="location"
                      family="EvilIcons"
                      size={18}
                      color={nowTheme.COLORS.BLACK}
                      style={{ alignSelf: "center", marginRight: 3 }}
                    />
                    <Text style={[styles.nunitoRegular, styles.regularGray]}>
                      {data.location}
                    </Text>
                  </View>
                </View>
                <View style={[styles.row, styles.rating]}>
                  <View style={[styles.row, { alignItems: "center" }]}>
                    {renderRatings(data.rating)}
                    <Text style={[styles.nunitoRegular, styles.reviewText]}>
                      ({data.reviews} reviews)
                    </Text>
                  </View>
                </View>
                <View style={styles.divider} />
                <Text style={[styles.titleText, styles.nunitoBlack]}> Menu</Text>
                {dish.length > 0 ? (
              dish.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={[styles.row, styles.reviewContainer, styles.shadow]}
                  >
                    <View style={styles.reviewImageContainer}>
                      <Image
                        style={styles.reviewAvatar}
                        source={{
                          uri: item.images
                        }}
                      />
                    </View>

                    <View
                      style={{
                        flex: 5,
                        paddingVertical: 22,
                        paddingHorizontal: 6
                      }}
                    >
                      <Text style={[styles.nunitoBold, styles.regularGray]}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row"}}>
            <TouchableOpacity>
              <Text
                style={{
                  color: nowTheme.COLORS.SUPPORRTIVE,
                  fontSize: 35,
                  fontFamily: "montserrat-regular",
                  paddingHorizontal: 10,
                  paddingVertical: 35
                }}
              >
                -
              </Text>
              </TouchableOpacity>
              <Text style={styles.regularText}>{0}</Text>
              <TouchableOpacity>
              <Text
                style={{
                  color: nowTheme.COLORS.SUPPORRTIVE,
                  fontSize: 35,
                  fontFamily: "montserrat-regular",
                  paddingHorizontal: 10,
                  paddingVertical: 35
                }}
              >
                +
              </Text>
              </TouchableOpacity>
            </View>
                  </View>
                );
              })
            ) : (
              <Text
                style={[
                  styles.nunitoRegular,
                  { color: "black", padding: 20, textAlign: "center" }
                ]}
              >
                No Menu Added Yet
              </Text>
            )}
              </View>
            </ScrollView>
          </View>
        );
    }
  
    if (data.length <= 0)
      return (
        <BlankData
          title="No Details Found"
          description="Please Try Again Later"
        />
      );
  
    return mainsection();
  };
  
  export default Menu;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      row: {
        flexDirection: "row"
      },
      header: {
        padding: 70,
        paddingHorizontal: 8,
        paddingBottom:0
      },
      contentHeader: {
        padding: 32,
        backgroundColor: "#fcfcfc",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: 60
      },
      avatar: {
        // position: "absolute",
        // bottom: 8,
        // right: 18,
        width: 36 * 2,
        height: 36 * 2,
        borderRadius: 36
      },
      reviewAvatar: {
        width: 24 * 2,
        height: 24 * 2,
        borderRadius: 24
      },
      shadow: {
        shadowColor: nowTheme.COLORS.BLACK,
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.24,
        shadowRadius: 5,
        elevation: 2
      },
      title: {
        fontSize: 24,
        color: nowTheme.COLORS.BLACK
      },
      description: {
        fontSize: 14,
        color: nowTheme.COLORS.BLACK
      },
      nunitoBlack: {
        fontFamily: "montserrat-regular"
      },
      nunitoRegular: {
        fontFamily: "montserrat-regular"
      },
      nunitoBold: {
        fontFamily: "montserrat-bold"
      },
      rating: {
        marginTop: 12,
        justifyContent: "space-between"
      },
      reviewText: { marginLeft: 8, color: nowTheme.COLORS.BLACK, fontSize: 14 },
      priceText: { color: nowTheme.COLORS.SECONDARY, fontSize: 20 },
      textContainer: {
        marginTop: 6,
        justifyContent: "space-between"
      },
      regularGray: { color: nowTheme.COLORS.BLACK, fontSize: 14 },
      smallGray: { color: nowTheme.COLORS.BLACK, fontSize: 12 },
      titleText: {
        marginTop: 0,
        color: nowTheme.COLORS.BLACK,
        fontSize: 24,
        marginBottom: 5
      },
      reviewContainer: {
        borderRadius: 7,
        elevation: 2,
        backgroundColor: "#fff",
        marginVertical: 5
      },
      reviewImageContainer: {
        flex: 1,
        padding: 22,
        alignItems: "center",
        justifyContent: "center"
      },
      reviewDate: { color: nowTheme.COLORS.GRAY, fontSize: 12, paddingTop: 28 },
      buttonContainer: {
        position: "absolute",
        bottom: 0,
        left: -8,
        right: 8,
    
        paddingHorizontal: 32,
        paddingBottom: 10,
        backgroundColor: "#fcfcfc"
        //flex: 0.1
      },
      divider: {
        height: 0.7,
        backgroundColor: nowTheme.COLORS.GRAY,
        marginVertical: theme.SIZES.BASE,
      },
      regularText: {
        color: nowTheme.COLORS.BLACK,
        fontSize: 18,
        fontFamily: "montserrat-bold",
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
      profileButton: {
        position: "absolute",
        top: 20,
        right: 38,
        width: 36 * 2,
        height: 36 * 2,
        borderRadius: 36,
        zIndex: 100,
        elevation: 2
      }
  });