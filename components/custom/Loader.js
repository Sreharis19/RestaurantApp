import React from "react";
import { Block } from "galio-framework";
import { ActivityIndicator } from "react-native";

const Loader = props => (
    <Block flex middle>
        <ActivityIndicator size="large"></ActivityIndicator>
    </Block>
)

export default Loader;