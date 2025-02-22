//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList, ScrollView, Dimensions, Image, ImageBackground, Animated, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Block, Text, Button as GaButton, theme, Icon } from 'galio-framework';
import Spacer from "../components/custom/Spacer";
// Now UI themed components
import { Images, nowTheme, articles, tabs, Routes } from '../constants';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;
const navigation = "";
const dummyData = [
  {
    imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    title: "Burgers"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title: "Shakes"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1553649504-60af7754bf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    title: "Sandwich"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    title: "Continetial"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    title: "chinese"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    title: "Local Food"
  }
];

const dummyRestaurant = [
  {
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
    title: "Ten Dowing Street",
    place: "Vijay Nagar",
    price: "150",
    rating: 5,
    location: "6 Km"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
    title: "Boozer's Bar & Restaurant",
    place: "Vijay Nagar",
    price: "240",
    rating: 4,
    location: "5 Km"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
    title: "Calypso Club & Lounge",
    place: "Vijay Nagar",
    price: "360",
    rating: 3,
    location: "4 Km",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1581991717893-55f4b9f62be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Trance Pub",
    place: "Vijay Nagar",
    price: "480",
    rating: 2,
    location: "3 Km",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    title: "Vidoora",
    place: "Vijay Nagar",
    price: "240",
    rating: 1,
    location: "8 Km",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Mustang Lounge",
    place: "Vijay Nagar",
    price: "426",
    rating: 5,
    location: "2 Km",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    title: "Quaram Lounge",
    place: "Vijay Nagar",
    price: "500",
    rating: 4,
    location: "0.4 Km",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80",
    title: "Bottom Sip & Bar",
    place: "Vijay Nagar",
    price: "570",
    rating: 3,
    location: "0.9 Km",
  },
];

const dummyRestaurantdata = [

  {
    imageUrl: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
    title: "Calypso Club & Lounge",
    place: "Vijay Nagar",
    status: "NEW",
    rating: 5,
    location: "6 Km"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1581991717893-55f4b9f62be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Trance Pub",
    place: "Vijay Nagar",
    status: "NEW",
    rating: 4,
    location: "5 Km"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    title: "Vidoora",
    place: "Vijay Nagar",
    status: "NEW",
    rating: 3,
    location: "1.5 Km"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    title: "Mustang Lounge",
    place: "Vijay Nagar",
    status: "NEW",
    rating: 2,
    location: "2 Km"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
    title: "Quaram Lounge",
    place: "Vijay Nagar",
    status: "NEW",
    rating: 1,
    location: "4 Km"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80",
    title: "Bottom Sip & Bar",
    place: "Vijay Nagar",
    status: "NEW",
    rating: 5,
    location: "7 Km"
  },
];

// create a component
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData,
      place: dummyRestaurant,
      placedata: dummyRestaurantdata,
    };
  }


  renderRatings(rating) {
    const stars = new Array(5).fill(0);
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
  }

  popularcategories = () => {
    const { navigation } = this.props;
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={dummyData}
        keyExtractor={(item, index) => item.title}
        renderItem={({ item: rowData }) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate(Routes.VIEW_ALL)}>
            <Block>
              <Image size={50} source={{ uri: rowData.imageUrl }} style={styles.avatar} />
              {/* <Text style={[styles.badge, styles.categorybadgeTitle]} size={18} bold color={theme.COLORS.WHITE}>{rowData.title}
                  </Text> */}
              <Text style={styles.popularText}>{rowData.title}</Text>
            </Block>
            </TouchableWithoutFeedback>
          );
        }}
      />
    );
  };

  bestdeal = () => {
    const { navigation } = this.props;
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={dummyRestaurant}
        keyExtractor={(item, index) => item.title}
        renderItem={({ item: rowData }) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate(Routes.MENU)}>
            <Block flex card center shadow style={styles.category}>
              <ImageBackground
                source={{ uri: rowData.imageUrl }}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 18.7, height: 252 }
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 9,
                  height: 252
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text style={{flex: 1, flexDirection: 'row'}} size={18} bold color={theme.COLORS.WHITE}>
                    {rowData.title}
                  </Text>
                  <Text style={[styles.badge, styles.categorybadgeTitle]} size={18} bold color={theme.COLORS.WHITE}>Rs .{rowData.price}
                  </Text>
                  <Block style={{flexDirection: 'row'}}>
                  {this.renderRatings(rowData.rating)}
                  </Block>
                  <Block style={styles.row}>
                    <Icon
                      name="location"
                      family="EvilIcons"
                      size={18}
                      color={nowTheme.COLORS.WHITE}
                      style={{ alignSelf: "center", marginRight: 3 }}
                    />
                    <Text style={[styles.nunitoRegular, styles.regularWhite]}>
                      {rowData.location}
                    </Text>
                  </Block>
                </Block>
              </ImageBackground>
            </Block>
            </TouchableWithoutFeedback>
          );
        }}
      />
    );
  };

  restuarants = () => {
    const { navigation } = this.props;
    return (
      <FlatList
        data={dummyRestaurantdata}
        keyExtractor={(item, index) => item.title}
        renderItem={({ item: rowData }) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate(Routes.MENU)}>
            <Block flex card center shadow style={styles.category}>
              <ImageBackground
                source={{ uri: rowData.imageUrl }}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 230 }
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 230
                }}
              >
                <Block style={styles.categoryTitleRestaurant}>
                  <Text size={18} bold color={theme.COLORS.WHITE}>
                    {rowData.title}
                  </Text>
                  <Block style={{flexDirection: 'row'}}>
                  {this.renderRatings(rowData.rating)}
                  </Block>
                  <Block style={styles.row}>
                    <Icon
                      name="location"
                      family="EvilIcons"
                      size={18}
                      color={nowTheme.COLORS.WHITE}
                      style={{ alignSelf: "center", marginRight: 3 }}
                    />
                    <Text style={[styles.nunitoRegular, styles.regularWhite]}>
                      {rowData.location} From you
                    </Text>
                  </Block>
                </Block>
              </ImageBackground>
            </Block>
            </TouchableWithoutFeedback>
          );
        }}
      />
    );
  };


  render() {
    const { navigation } = this.props;
    return (
      <Block>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.UserLocation)}>
        <Block flex style={styles.cardDescription}>
        <Block >
        <Spacer />
        <Icon
            name="pin-drop"
            family="MaterialIcons"
            size={28}
            color={"#248c04"}
          />
          </Block>
          <Block>
          <Text style={styles.Maplocation}>Ravipuram, Kochi, Kerala</Text>
          <Text style={styles.Maplocationdetailed}>3122, Ravipuram, Valanjambalam, Kochi, Kerala 682016</Text>
        </Block>
        </Block>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginLeft: 10, marginRight: 10 }}
        >
           <Block row space="between">
           
          <Block>
          <Text style={[styles.subtitle,, styles.nunitoSemiBold]}>Popular Categories</Text>
          </Block>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.VIEW_ALL)}>
          <Block>
            <Text style={[styles.subtitle, styles.nunitoSemiBold]}>
              SEE ALL
            </Text>
        </Block>
        </TouchableOpacity>
        </Block>
          {this.popularcategories()}
          <Block row space="between">
          <Block>
          <Text style={[styles.subtitle,, styles.nunitoSemiBold]}>Best Deals</Text>
          </Block>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.VIEW_ALL)}>
          <Block>
            <Text style={[styles.subtitle, styles.nunitoSemiBold]}>
            SEE ALL
            </Text>
        </Block>
        </TouchableOpacity>
        </Block>

          {this.bestdeal()}
          <Block flex card shadow style={styles.category}>
          <Block row space="between">
          <Block>
          <Text style={[styles.subtitle,, styles.nunitoSemiBold]}>Popular Restuarants</Text>
          </Block>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.VIEW_ALL)}>
          <Block>
            <Text style={[styles.subtitle, styles.nunitoSemiBold]}>
            SEE ALL
            </Text>
        </Block>
        </TouchableOpacity>
        </Block>

            {this.restuarants()}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20
  },
  popularCategories: {
    flex: 1,
    alignItems: "center",
    margin: 7
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  avatar: {
    width: thumbMeasure,
    height: thumbMeasure,
    borderRadius: 60,
    borderWidth: 0,
    margin: 9
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 1,
    borderWidth: 0
  },
  categoryTitle: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  categorybadgeTitle: {
    justifyContent: 'flex-start',
    textAlign: 'center',
  },
  categoryTitleRestaurant: {
    height: '100%',
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBlock: {
    overflow: 'hidden',
    borderRadius: 4,
    marginHorizontal: 8
  },
  productTitle: {
    color: nowTheme.COLORS.PRIMARY,
    textAlign: 'center',
    fontFamily: 'montserrat-bold',
    fontSize: 18
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE / 8,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 20,
    color: nowTheme.COLORS.HEADER
  },
  titleRestaurant: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE / 8,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 1,
    color: nowTheme.COLORS.HEADER
  },
  Maplocation: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE / 8,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 8,
    color: nowTheme.COLORS.HEADER
  },
  Maplocationdetailed: {
    fontFamily: 'montserrat-regular',
    paddingBottom: theme.SIZES.BASE / 8,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 1,
    color: nowTheme.COLORS.HEADER
  },
  cardDescription: {
    paddingHorizontal: theme.SIZES.BASE / 2,
    paddingBottom: theme.SIZES.BASE *2.8,
    marginVertical: theme.SIZES.BASE/2,
  },
  badge: {
    backgroundColor: nowTheme.COLORS.SUPPORRTIVE_BUTTON,
    paddingHorizontal: nowTheme.SIZES.BASE/8,
    paddingVertical: theme.SIZES.BASE/8,
    borderWidth: 1,
    borderColor: theme.COLORS.WHITE,
    borderRadius: 40,
    fontSize: 12,
  },
  row: {
    flexDirection: "row"
  },
  subtitle: {
    fontSize: 16,
    color: nowTheme.COLORS.SUPPORRTIVE_BUTTON,
  },
  nunitoSemiBold: {
    fontFamily: "montserrat-bold"
  },
  profileContainer: {
    backgroundColor: nowTheme.COLORS.WHITE,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginVertical: 10
  },
  nunitoRegular: {
    fontFamily: "montserrat-bold"
  },
  regularWhite: { color: nowTheme.COLORS.WHITE, fontSize: 14 },
  popularText: { marginTop: 5, fontSize: 17, fontWeight: "bold", color: '#5a5e61', textAlign: 'center' }
});

//make this component available to the app
export default HomeScreen;