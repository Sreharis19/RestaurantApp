import PropTypes from "prop-types";
import React from "react";
import { FlatList } from "react-native";
import BlankData from "./BlankData";

const FilteredList = props => {
    const { data = [], renderItem = (_, __) => { }, caseSensitive = false } = props;
    const { searchTerm, searchKey, searchKeys, noData = <BlankData />, key } = props;

    const stringify = item => "" + item;

    const equals = (item1, item2) => {
        if (!item1 && !item2) return true;
        if (!item1 || !item2) return false;

        if (caseSensitive) 
            return stringify(item1).includes(stringify(item2));

        const isEqual = stringify(item1).toLowerCase().includes(stringify(item2).toLowerCase());
        return isEqual;
    }

    const checkIfItemMatchesSearch = item => {
        if (!searchTerm) return true;

        if (searchKeys) {
            const isPresent = searchKeys.some(sk => equals(item[sk], searchTerm));
            return isPresent;
        }

        if (searchKey) {
            const isPresent = equals(item[searchKey], searchTerm)
            return isPresent;
        }

        return true;
    }

    const filteredData = () => {
        const filteredData = data?.filter(item => checkIfItemMatchesSearch(item));
        return filteredData;
    }

    return <FlatList
        data={filteredData()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => `filtered-list-${key}-${index}`}
        ListEmptyComponent={noData}
    />
};

FilteredList.propTypes = {
    key: PropTypes.string.isRequired,
    searchKeys: PropTypes.arrayOf(String),
    searchTerm: PropTypes.string,
    searchKey: PropTypes.string,
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.any.isRequired,
    noData: PropTypes.node,
    caseSensitive: PropTypes.bool
}

export default React.memo(FilteredList);