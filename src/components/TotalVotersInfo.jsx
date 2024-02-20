import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { hp, normalize, wp } from '../theme/dimensions';
import { Montserrat, MontserratBold } from '../theme/fonts';
import { COLORS } from '../theme/colors';
import FilterModal from './Modals/FilterModal';
import { sortByKey } from '../utils/FilterArray';
import {filterbtn} from '../theme/images';
import stylee from '../constants/stylee';

const TotalVotersInfo = ({ navigation, data, setData, totalVotersData }) => {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);

  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  const setFilterList = (index) => {
    setActiveFilter(index);
    if (index === 0) {
      setData([...totalVotersData]);
    } else if (index === 1) {
      setData(sortByKey(data, 'name', 'asc'));
    } else if (index === 2) {
      setData(sortByKey(data, 'name', 'desc'));
    }
    toggleFilterModal();
  };

  return (
    <View style={[styles.container, stylee.alignJSR]}>
      {isFilterModalVisible && (
        <FilterModal
          isVisible={isFilterModalVisible}
          onClose={toggleFilterModal}
          onOptionPress={setFilterList}
          active={activeFilter}
        />
      )}
      <TouchableOpacity onPress={() => navigation.goBack()} style={stylee.flexR}>
        <Icon
          name="arrow-back-ios"
          color={COLORS.primary}
          size={hp(2)}
          style={styles.icon}
        />
        <View style={styles.detailView}>
          <Text style={styles.nameText}>Frodo at The Shire, Middle Earth</Text>
          <Text style={styles.numOfVoterText}>3 Voters found</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleFilterModal} style={stylee.alignR}>
        <Text style={styles.filterText}>Filter</Text>
        <View style={[styles.filterView, stylee.alignJC]}>
          <Image
            source={filterbtn}
            style={styles.filterBtn}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 5,
  },
  container: {
    padding: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lavendarWhiteDim,
    backgroundColor: COLORS.background
  },
  detailView: {},
  chevBack: {
    width: wp(2.7),
    height: wp(2.7),
    tintColor: COLORS.primary,
    marginRight: wp(1),
  },
  nameText: {
    fontFamily: MontserratBold,
    fontSize: normalize(12),
    lineHeight: normalize(12),
    color: COLORS.darkGray,
  },
  numOfVoterText: {
    fontFamily: Montserrat,
    fontSize: normalize(12),
    color: COLORS.darkGray,
  },
  filterText: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    color: COLORS.primary,
    marginRight: wp(2),
  },
  filterView: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(6) / 2,
    backgroundColor: COLORS.primary,
  },
  filterBtn: {
    width: wp(3.5),
    height: wp(3.5),
    tintColor: COLORS.white,
  },
});

export default React.memo(TotalVotersInfo);
