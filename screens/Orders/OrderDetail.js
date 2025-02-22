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
import BlankData from "../../components/custom/BlankData";
// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../../constants';

const { width, height } = Dimensions.get("window");

const OrderDetail = (props) => {
  const { navigation } = props;

  const data = {
    id: 1,
    name: "Biriyani",
    full_name: "Rakhi Savant",
    owner: "Rakhi Savant",
    avatar: "https://images.squarespace-cdn.com/content/v1/56a752b7df40f3cc488c6486/1457344660908-9AM6WODG1IIT2TV2C6NP/ke17ZwdGBToddI8pDm48kDiqcgDgEVkgAbJzN36X2nR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0r9YoV8ytu8SWDj21Bt3yU-J1hjwEI_F-dGdUQQEfwEyWTvHs2iO-Zr3KHorLxwO0Q/IMG_2053.jpg?format=300w",
    saved: true,
    Time_to_make: 30,
    reviews: 4,
    rating: 4,
    locationChef: "Kadavanthara, Ernakulam",
    locationUser: "Vytila, Ernakulam",
    temperature: 34,
    title: "Green Salad",
    incredients: "Vegetable, Spice, Meat, Yogurt, Dried fruit, Garlic, Mint, Rice, Egg, Mint leaf",
    price: 188.0,
    deliverycharge: 50.0,
    packingcharge: 20.0,
    quantity: 2,
    reBlocks: 3212,
    image: [
      "https://images.unsplash.com/photo-1595678522254-781a08ef8579?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      "https://images.unsplash.com/photo-1543826173-1beeb97525d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80"
    ]
  };

  const review = [{
    name: "Meera",
    avatar: "https://randomuser.me/api/portraits/women/40.jpg",
    feedback: "Tastes great, Exccellent Packaging",
    rating: 4,
    date: "2-May-2020"
  },
  {
    name: "Srishti",
    avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    feedback: "This is the original and authentic Indian food I would like to say original flavour of Indian food service is five star",
    date: "14-May-2020",
    rating: 3

  },
  {
    name: "Aparna",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    feedback: " food was great, freshly cooked very tasty and well presented. ",
    rating: 2,
    date: "24-May-2020"
  },
  {
    name: "Swetha",
    avatar: "https://randomuser.me/api/portraits/women/38.jpg",
    feedback: "Great food and service, would highly recommend",
    rating: 4,
    date: "28-May-2020"
  },
  ];

  const { product } = data;

  scrollX = new Animated.Value(0);
  const dotPosition = Animated.divide(scrollX, width);
  const image_url = data.image;
  const stars = new Array(5).fill(0);

  const renderHeaderImage = () => {
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate="normal"
          scrollEventThrottle={16}
          snapToAlignment="center"
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } }
          ])}
        >
          {image_url.map((item, index) => (
            <Image
              key={`${index}-${item}`}
              source={{ uri: `${item}` }}
              resizeMode="cover"
              style={{ width, height: width }}
            />
          ))}
        </ScrollView>
        {renderDots(image_url)}
      </View>
    );
  }

  const renderDots = (image_url) => {
    return (
      <View style={[styles.container, styles.row, styles.dotsContainer]}>
        {image_url.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          );
        })}
      </View>
    );
  }



  const mainsection = () => {
    return (
      <View style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.container}>{renderHeaderImage()}</View>
          </View>
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
              {data.name} x ({data.quantity})
            </Text>

            <View style={[styles.row, styles.rating]}>
              <Text style={[styles.nunitoBlack, styles.priceText]}>
                Rs. {data.price * data.quantity} 
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
                  {data.locationChef}
                </Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.row}>
              <Icon
                name="location"
                family="EvilIcons"
                size={18}
                color={nowTheme.COLORS.BLACK}
                style={{ alignSelf: "center", marginRight: 3 }}
              />
              <Text style={[styles.nunitoRegular, styles.regularGray]}>
                {data.locationUser}
              </Text>
            </View>


            <Text style={[styles.titleText, styles.nunitoBlack]}> Price Details</Text>

                     <Block>
            <Block
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingBottom: 4
              }}
            >
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-bold"
                }}
              >
                Sub Total
              </Text>
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-bold"
                }}
              >
                Rs. {data.price * data.quantity} 
              </Text>
            </Block>
            <Block
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 4
              }}
            >
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-bold"
                }}
              >
                Packing
              </Text>
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-bold"
                }}
              >
                {`Rs. ${data.packingcharge}`}
              </Text>
            </Block>
            <Block
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 4
              }}
            >
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-bold"
                }}
              >
                Delivery
              </Text>
              <Text
                style={{
                  color: nowTheme.COLORS.GRAY,
                  fontSize: 14,
                  fontFamily: "montserrat-bold"
                }}
              >
                {`Rs. ${data.deliverycharge}`}
              </Text>
            </Block>
    
            <Block
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingVertical: 4
              }}
            >
              <Text
                style={{
                  color: nowTheme.COLORS.BLACK,
                  fontSize: 18,
                  fontFamily: "montserrat-regular"
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  color: nowTheme.COLORS.BLACK,
                  fontSize: 18,
                  fontFamily: "montserrat-regular"
                }}
              >
                {`Rs. ${data.price * data.quantity + data.packingcharge + data.deliverycharge}`}
              </Text>
            </Block>
          </Block>
          <View >
        <Text style={[styles.titleTextMode, styles.nunitobold]}>Mode Of Payment - Cash</Text>
        </View>
          </View>
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

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  dotsContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 48,
    right: 0,
    left: 0
  },
  dots: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 5,
    backgroundColor: nowTheme.COLORS.WHITE
  },
  contentHeader: {
    padding: 32,
    backgroundColor: "#fcfcfc",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -18
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
  nunitobold: {
    fontFamily: "montserrat-bold"
  },
  nunitoRegular: {
    fontFamily: "montserrat-regular"
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
    marginTop: 5,
    color: nowTheme.COLORS.GRAY,
    fontSize: 24,
    marginBottom: 5,
    textAlign: "center"
  },
  titleTextMode: {
    marginTop: 10,
    color: nowTheme.COLORS.SUPPORRTIVE_BUTTON,
    fontSize: 15,
    marginBottom: nowTheme.SIZES.BASE
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
    backgroundColor: nowTheme.COLORS.GRAY
    //flex: 0.1
  },
  divider: {
    height: '10%',
    width: 2,
    backgroundColor: nowTheme.COLORS.GRAY
  },
  dividerhorizontal: {
    height: 0.8,
    backgroundColor: nowTheme.COLORS.GRAY,
    marginVertical: theme.SIZES.BASE/6,
  },
  profileButton: {
    position: "absolute",
    top: -38,
    right: 38,
    width: 36 * 2,
    height: 36 * 2,
    borderRadius: 36,
    zIndex: 100,
    elevation: 2
  }
});