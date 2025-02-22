import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { theme } from "galio-framework";

const Spacer = props => {
    const { width, height } = props;

    return <View style={{width, height }}/>
}

Spacer.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
}

Spacer.defaultProps = {
    width: theme.SIZES.BASE / 4,
    height: theme.SIZES.BASE / 4
}

export default Spacer;