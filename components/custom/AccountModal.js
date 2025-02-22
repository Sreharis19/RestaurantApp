import PropTypes from "prop-types";
import React from "react";
import Modal from "react-native-modal";
import { Block, theme, Button as GaButton, Text, Input, Icon } from "galio-framework";
import { StyleSheet, ScrollView } from "react-native";
import IconButton from "./IconButton";
import Spacer from "./Spacer";
import { nowTheme } from "../../constants";


const AccountModal = props => {
    const { show = false } = props;
    const { onClose = () => { } } = props;

    return <Modal isVisible={show} onBackdropPress={onClose}>
        <Block style={styles.modalContentStyle}>
            <Block right>
                <IconButton onPress={onClose} iconName="x" borderless />
            </Block>
            <Spacer />
            <ScrollView>
                <Block space="between" middle>
                    <Block>
                        <Text style={styles.labelTextStyle}>Name</Text>
                        <Input
                            left
                            color="black"
                            placeholder="Sreehari"
                            iconContent={<Icon size={16} color={nowTheme.COLORS.MUTED} name="user" family="AntDesign" />}
                        />
                    </Block>
                    <Block>
                        <Text style={styles.labelTextStyle}>Email</Text>
                        <Input
                            left
                            color="black"
                            placeholder="Sreeharis.reuro@gmail.com"
                            iconContent={<Icon size={16} color={nowTheme.COLORS.MUTED} name="mail" family="AntDesign" />}
                        />
                    </Block>
                    <Block>
                        <Text style={styles.labelTextStyle}>Mobile</Text>
                        <Input
                            left
                            color="black"
                            placeholder="+91-9497126857"
                            iconContent={<Icon size={16} color={nowTheme.COLORS.MUTED} name="mobile1" family="AntDesign" />}
                        />
                    </Block>
                    <Spacer />
                    <Spacer />
                    <Block>
                        <GaButton uppercase color={nowTheme.COLORS.SUPPORRTIVE}>Save</GaButton>
                    </Block>
                </Block>
            </ScrollView>
            <Spacer />
        </Block>
    </Modal>
}

const styles = StyleSheet.create({
    modalContentStyle: {
        backgroundColor: "white",
        padding: theme.SIZES.BASE
    },
    labelTextStyle: {
        fontSize: theme.SIZES.BASE * 0.75,
        color: theme.COLORS.PRIMARY_BLUE,
    },
    valueTextStyle: {
        textTransform: "capitalize",
        fontSize: theme.SIZES.BASE,
        fontWeight: "bold",
    },
});

AccountModal.propTypes = {
    onClose: PropTypes.func,
    description: PropTypes.any,
    show: PropTypes.bool
}

AccountModal.defaultProps = {}

export default AccountModal;