import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, theme, Block, Icon } from "galio-framework";
import { nowTheme } from "../../constants";
import PropTypes from "prop-types";

const IconButton = props => {
    const { iconName, iconColor, iconSize, iconFamily } = props;
    const { buttonColor = "transparent", borderless, disabled = false } = props;
    const { onPress } = props;

    return <TouchableOpacity disabled={disabled} onPress={onPress}>
        <Block style={[styles.buttonStyle, { backgroundColor: buttonColor, borderWidth: borderless ? 0 : 1 }]}>
            <Icon name={iconName} color={iconColor} size={iconSize} family={iconFamily} />
        </Block>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: theme.SIZES.BASE / 2,
        paddingHorizontal: theme.SIZES.BASE,
        borderColor: nowTheme.COLORS.DEFAULT,
        borderWidth: 1
    }
});

IconButton.propTypes = {
    onPress: PropTypes.func,
    textColor: PropTypes.any,
    buttonColor: PropTypes.any,
    iconName: PropTypes.string,
    iconColor: PropTypes.any,
    iconSize: PropTypes.number,
    iconFamily: PropTypes.string,
    disabled: PropTypes.bool
}

IconButton.defaultProps = {
    buttonText: "Submit",
    onPress: () => { },
    iconName: "bell",
    iconFamily: "feather",
    iconSize: 12,
}

export default IconButton;