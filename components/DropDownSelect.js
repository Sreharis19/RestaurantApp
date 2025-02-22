import React from 'react';
import { StyleSheet, TouchableOpacity, } from 'react-native';
import ModalDropdown from './ModalDropdown';
import { Block, Text, Icon, theme } from 'galio-framework';
import PropTypes from 'prop-types';

import { nowTheme } from '../constants/';
import { ScrollView } from 'react-native-gesture-handler';

const DropDownSelect = props => {
  const handleOnSelect = (index, value) => {
    const { onSelect } = props;
    onSelect && onSelect(index, value);
  }

  /** when the dropdown is at the bottom of the screen, height: 'auto' didn't work 
   * so, currently calculating the height of the dropdown with the given options length
  */
  const adjustDropDownFrame = style => {
    style.height = calculateDropdownHeight(props.options);

    return style;
  }

  const calculateDropdownHeight = options => {
    if (!options) return 0;
    const elementCount = options.length;

    if (elementCount === 0) return 0;

    if (elementCount > 4) return props.maxDropdownHeight;

    return -1;
  }

  const constructOptionsForDropdown = () => {
    let optionsArray = [];

    const { options, labelKey } = props;

    options?.forEach(option => {
      if(typeof option === "object") {
        optionsArray.push(option[labelKey])
      }

      if(typeof option === "string")
        optionsArray.push(option);
    });

    if(optionsArray.length <= 0) optionsArray.push("-- No Options --");
    return optionsArray;
  }

  const getValueToDisplay = value => {
    const { labelKey } = props;
    if(typeof value === "string") return value;

    if(typeof value === "object") return value[labelKey];

    return "N/A";
  }

  const handleDeselect = (e, index, value) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    props.onDeselect(index, value);
  }

  const renderDropdown = () => {
    const { selectedValue, placeholder } = props;
    return <>
      {
        selectedValue ?
          <Text size={14}>{getValueToDisplay(selectedValue)}</Text> :
          <Text size={14} style={{ color: nowTheme.COLORS.PLACEHOLDER }}>{placeholder || "Select"}</Text>

      }
    </>
  };

  const renderValuesList = () => {
    const { selectedValues } = props;

    return <Block row middle>
      <ScrollView horizontal={true}>
        {selectedValues.map((value, index) => {
          const _value = getValueToDisplay(value);
          return <Block key={`dropdown-multi-${_value}-${index}`} style={styles.badge}>
            <Block row middle>
              <Text size={14}>{_value}</Text>
              <TouchableOpacity onPress={e => handleDeselect(e, index, value)} style={{ marginLeft: 4 }}>
                <Icon name="clear" family='materialicons' size={14} color="black" />
              </TouchableOpacity>
            </Block>
          </Block>
        })}
      </ScrollView>
    </Block>
  }

  const renderMultiSelectDropdown = () => {
    const { selectedValues, placeholder } = props;

    return <>
      {
        selectedValues.length > 0 ? renderValuesList() :
          <Text size={12} style={{ color: nowTheme.COLORS.PLACEHOLDER }}>{placeholder || "Multi Select"}</Text>
      }
    </>
  }

  const { multiSelect, style, dropdownStyle, options } = props;
  const _options = constructOptionsForDropdown();
  
  return (
    <ModalDropdown
    style={[styles.qty, style]}
    dropdownStyle={dropdownStyle}
    dropdownTextStyle={{ paddingHorizontal: theme.SIZES.BASE, fontSize: 12 }}
      {...props}
      onSelect={(i, _) => handleOnSelect(i, options[i])}
      adjustFrame={adjustDropDownFrame}
      options={_options}
    >
      <Block row middle space="between" style={[props.boxStyle]}>
        {multiSelect ? renderMultiSelectDropdown() : renderDropdown()}
        <Icon name="angle-down" family="font-awesome" size={11} />
      </Block>
    </ModalDropdown>
  )
}

const styles = StyleSheet.create({
  qty: {
    // width: theme.SIZES.BASE * 6,
    backgroundColor: "white",
    padding: theme.SIZES.BASE,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 9, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  dropdown: {
    marginTop: theme.SIZES.BASE / 2,
    marginLeft: theme.SIZES.BASE,
    width: theme.SIZES.BASE*8*2,
  },
  badge: {
    borderWidth: 1,
    borderColor: nowTheme.COLORS.BORDER_COLOR,
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginRight: theme.SIZES.BASE / 4,
  }
});

DropDownSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onDeselect: PropTypes.func,
  selectedValue: PropTypes.any,
  maxDropdownHeight: PropTypes.number,
  multiSelect: PropTypes.bool,
  boxStyle: PropTypes.any,
  labelKey: PropTypes.string,
  ...ModalDropdown.propTypes
}

DropDownSelect.defaultProps = {
  dropdownStyle: styles.dropdown,
  maxDropdownHeight: 120,
  multiSelect: false,
  onDeselect: () => { },
  boxStyle: {},
  labelKey: "label"
}

export default DropDownSelect;