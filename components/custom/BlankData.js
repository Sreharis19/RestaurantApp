import React from "react";
import NoData from "../../assets/imgs/nodata.png";
import PropTypes from "prop-types";
import { Block, Text, theme } from "galio-framework";
import { Image, StyleSheet, Dimensions } from "react-native";
import Spacer from "./Spacer";

const BlankData = props => {
    const { title, description, textStyle, descriptionStyle } = props;
    const { image, imageStyle } = props;

    return <Block middle style={{paddingHorizontal: theme.SIZES.BASE }}>
        <Image style={imageStyle} width={width / 2} height={height / 4} resizeMode="contain" source={image} />
        <Spacer />
        <Text h5 style={textStyle}>{title}</Text>
        <Spacer />
        <Text muted style={descriptionStyle}>{description}</Text>
    </Block>
}

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    imageStyle: {
        width: width / 2,
        height: height / 4
    }
});

BlankData.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    textStyle: PropTypes.any,
    descriptionStyle: PropTypes.any,
    image: PropTypes.any,
    imageStyle: PropTypes.any
}

BlankData.defaultProps = {
    title: "No Data to Display",
    description: "Currently there are not data available for this screen. Please try again later",
    textStyle: {},
    descriptionStyle: {},
    image: NoData,
    imageStyle: styles.imageStyle
}

export default BlankData;