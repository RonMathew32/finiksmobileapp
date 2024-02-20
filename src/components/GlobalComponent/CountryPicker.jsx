import React, { useState, useMemo, useCallback } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import CountryData from '../../utils/CountryData';
import { hp, normalize, wp } from '../../theme/dimensions';
import { Belleza } from '../../theme/fonts';
import { arrowdown, crossicon } from '../../theme/images';
import stylee from '../../constants/stylee';
import { COLORS } from '../../theme/colors';

const CountryPicker = () => {
  const [country, setCountry] = useState({
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    code: 'AE',
    dial_code: '+971',
  });
  const [visible, setVisible] = useState(false);

  const onItemPress = useCallback(item => {
    setCountry(item);
    setVisible(false);
  }, []);

  const CountryItem = useMemo(() => ({ item }) => (
    <TouchableOpacity onPress={() => onItemPress(item)} style={stylee.alignR}>
      <Text style={styles.flag}>{item.flag}</Text>
      <Text style={styles.codetxt}>{item.name} {item.dial_code}</Text>
    </TouchableOpacity>
  ), [onItemPress]);

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(!visible)} style={stylee.alignR}>
        <Text style={styles.flag}>{country.flag}</Text>
        <Text style={styles.codetxt}>{country.dial_code}</Text>
        <Image source={arrowdown} style={styles.arrowdown} resizeMode="contain" />
        <View style={styles.line} />
      </TouchableOpacity>
      <Modal
        style={styles.modalbox}
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
      >
        <View style={styles.modalcontainer}>
          <View style={[styles.headbox, stylee.alignJSR]}>
            <Text style={styles.picktxt}>Pick Your Country</Text>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image source={crossicon} style={styles.crossicon} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={CountryData}
            keyExtractor={(item, index) => item.name}
            initialNumToRender={15}
            renderItem={CountryItem}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  flag: {
    fontSize: normalize(31),
    lineHeight: normalize(31),
  },
  codetxt: {
    fontSize: normalize(14),
    lineHeight: normalize(14),
    marginLeft: wp(1.5),
  },
  arrowdown: {
    width: wp(2.5),
    height: wp(2.5),
    marginLeft: wp(2),
  },
  line: {
    height: '100%',
    borderRightWidth: 1,
    marginHorizontal: wp(3),
    borderColor: 'rgba(24, 24, 24, .4)',
  },
  modalbox: {
    marginHorizontal: wp(2),
  },
  modalcontainer: {
    backgroundColor: COLORS.white,
    borderRadius: wp(4),
    height: hp(80),
    padding: wp(4),
  },
  headbox: {
    marginBottom: hp(2),
  },
  picktxt: {
    fontSize: normalize(24),
    fontFamily: Belleza,
  },
  crossicon: {
    width: wp(6),
    height: wp(6),
  },
  itembox: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(24, 24, 24, .4)',
    marginBottom: hp(1),
  },
});

export default React.memo(CountryPicker);
