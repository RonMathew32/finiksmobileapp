import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {chevronback, filterbtn} from '../../../theme/images';
import {hp, normalize, wp} from '../../../theme/dimensions';
import {Montserrat, MontserratBold} from '../../../theme/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../theme/colors';
import FilterModal from '../../Modals/FilterModal';
import { sortByKey } from '../../../utils/FilterArray';

const TotalVotersInfo = ({navigation, data, setData, totalVotersData}) => {
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);
  const toggleFilterModal = () => {
    setFilterModalVisible(!isFilterModalVisible);
  };

  const setFilterList = (index) => {
    setActiveFilter(index)
    if(index == 0) {
      setData([...totalVotersData])
    } else if(index == 1) {
      setData(sortByKey(data, 'name', 'asc'))
    } else if(index == 2) {
      setData(sortByKey(data, 'name', 'desc'))
    }
    toggleFilterModal()
  }
  

  return (
    <View style={styles.container}>
      {isFilterModalVisible && (
        <FilterModal
          isVisible={isFilterModalVisible}
          onClose={toggleFilterModal}
          onOptionPress={setFilterList}
          active={activeFilter}
        />
      )}
      <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.leftview}>
        <Icon
          name="arrow-back-ios"
          color={COLORS.orangeReddish}
          size={hp(2)}
          style={styles.icon}
        />
        <View style={styles.detailview}>
          <Text style={styles.nametxt}>Frodo at The Shire, Middle Earth</Text>
          <Text style={styles.numofvotertxt}>3 Voters found</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleFilterModal}
        style={styles.rightview}>
        <Text style={styles.filtertxt}>Filter</Text>
        <View style={styles.filterview}>
          <Image
            source={filterbtn}
            style={styles.filterbtn}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TotalVotersInfo;

const styles = StyleSheet.create({
  icon: {
    padding: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  leftview: {
    flexDirection: 'row',
  },
  chevback: {
    width: wp(2.7),
    height: wp(2.7),
    tintColor: '#D12E2F',
    marginRight: wp(1),
  },
  detailview: {},
  nametxt: {
    fontFamily: MontserratBold,
    fontSize: normalize(12),
    lineHeight: normalize(12),
    color: '#545454',
  },
  numofvotertxt: {
    fontFamily: Montserrat,
    fontSize: normalize(12),
    color: '#545454',
  },
  rightview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtertxt: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    color: '#D12E2F',
    marginRight: wp(2),
  },
  filterview: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(6) / 2,
    backgroundColor: '#D12E2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterbtn: {
    width: wp(3.5),
    height: wp(3.5),
    tintColor: 'white',
  },
});
