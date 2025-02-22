import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    ScrollView
} from "react-native";
import { Block, Button as GaButton, theme, Icon } from 'galio-framework';
import BlankData from "../components/custom/BlankData";
// Now UI themed components
import { Images, nowTheme, articles, tabs } from '../constants';

const { width } = Dimensions.get("window");

const ViewAll = (props) => {
    const { navigation } = props;
    const stars = new Array(5).fill(0);
    const data = [
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
            images: "https://images.unsplash.com/photo-1597581366015-87b44b235ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
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
            images: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
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

    const mocks = [
        {
            id: 1,
            user: {
                name: "Lelia Chavez",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            saved: true,
            location: "0.4 Km from you",
            temperature: 34,
            title: "Santorini",
            description:
                "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC",
            rating: 4.3,
            price: 224.0,
            reviews: 3212,
            preview:
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            id: 2,
            user: {
                name: "Lelia Chavez",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            saved: false,
            location: "0.4 Km from you",
            temperature: 34,
            title: "Loutraki",
            description: "This attractive small town, 80 kilometers from Athens",
            rating: 4.6,
            reviews: 3212,
            price: 122.0,
            preview:
                "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            id: 3,
            user: {
                name: "Lelia Chavez",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            saved: true,
            location: "0.4 Km from you",
            temperature: 34,
            title: "Santorini",
            description: "Santorini - Description",
            rating: 3.2,
            reviews: 3212,
            price: 432.0,
            preview:
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            id: 4,
            user: {
                name: "Lelia Chavez",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            location: "0.4 Km from you",
            temperature: 34,
            title: "Loutraki",
            description: "This attractive small town, 80 kilometers from Athens",
            rating: 5,
            reviews: 3212,
            price: 400.0,
            preview:
                "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            id: 5,
            user: {
                name: "Lelia Chavez",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            saved: true,
            location: "0.4 Km from you",
            temperature: 34,
            title: "Santorini",
            description: "Santorini - Description",
            rating: 3.2,
            reviews: 3212,
            price: 432.0,
            preview:
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            id: 6,
            user: {
                name: "Lelia Chavez",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            location: "0.4 Km from you",
            temperature: 34,
            title: "Loutraki",
            description: "This attractive small town, 80 kilometers from Athens",
            rating: 5,
            reviews: 3212,
            price: 400.0,
            preview:
                "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            id: 7,
            user: {
                name: "Lelia Chavez",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            saved: true,
            location: "0.4 Km from you",
            temperature: 34,
            title: "Santorini",
            description: "Santorini - Description",
            rating: 3.2,
            reviews: 3212,
            price: 432.0,
            preview:
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
            images: [
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
            ]
        }
    ];

    const renderRecommendation = ({ item, index }) => {
        const { rating, name, images, price } = item;

        return (
            <TouchableWithoutFeedback
                activeOpacity={0.5}
            // style={[styles.shadow, { backgroundColor: 'red' }]}
            >
                <View style={[styles.recommendation, styles.shadow]}>
                    <View style={[styles.recommendationHeader, styles.shadow]}>
                        <Image
                            style={styles.recommendationImage}
                            source={{ uri: images }}
                        />
                    </View>
                    <View style={[styles.bottomContainer, styles.shadow]}>
                        <Text style={styles.recommendationTitle}>{name} </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={styles.recommendlocation}>
                                Rs. {Number(price)}
                            </Text>
                            <View
                                style={{
                                    marginVertical: 6,
                                    marginLeft: 4,
                                    marginRight: 2,
                                    width: 4,
                                    height: 4,
                                    borderRadius: 6,
                                    backgroundColor: nowTheme.COLORS.BLACK
                                }}
                            />
                            <Text style={styles.recommendlocation}> 0.4km from you</Text>
                        </View>
                        <View style={styles.recommendRating}>
                            {renderRatings(rating)}
                            <Text style={styles.recommendPrice}>880 ratings</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

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

    const renderRecommended = () => {
        return (
            <View style={styles.recommendContainer}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    numColumns={2}
                    // decelerationRate="normal"
                    // scrollEventThrottle={100}
                    // snapToInterval={width - 60}
                    // snapToAlignment="center"
                    data={data}
                    renderItem={renderRecommendation}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        );
    }

    const mainsection = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                {renderRecommended()}
            </ScrollView>
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
export default ViewAll;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 24,
        paddingTop:100
    },
    recommendContainer: {
        flex: 1,
        flexDirection: "column",
        paddingBottom: 20
        //backgroundColor: "red"
    },
    recommendation: {
        flexDirection: "column",
        width: width / 2 - 50,
        marginHorizontal: 12,
        marginBottom: 12,
        backgroundColor: "#fff",
        borderRadius: 10
    },

    recommendationImage: {
        width: width / 2 - 50,
        height: 160
    },
    recommendedHeader: {
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 36,
        marginVertical: 36 * 0.66,
        flexDirection: "row"
    },
    recommendationHeader: {
        flex: 1,
        overflow: "hidden",
        //borderRadius: 8,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
        // backgroundColor: Color.black
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
    bottomContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",
        overflow: "hidden",
        padding: 14,
        backgroundColor: "#fff",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    recommendationTitle: {
        fontSize: 16,
        paddingBottom: 4,
        color: nowTheme.COLORS.BLACK,
        fontFamily: "montserrat-bold"
    },
    recommendlocation: {
        color: nowTheme.COLORS.BLACK,
        fontFamily: "montserrat-regular",
        fontSize: 10
    },
    recommendRating: {
        flexDirection: "row",
        marginTop: 16
    },
    recommendPrice: {
        color: nowTheme.COLORS.SECONDARY,
        fontFamily: "montserrat-regular",
        fontSize: 10,
        marginLeft: 8
    }
});