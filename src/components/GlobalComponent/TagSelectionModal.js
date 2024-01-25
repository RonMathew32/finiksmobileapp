import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratMedium, MontserratSemiBold} from '../../theme/fonts';
import {COLORS} from '../../theme/colors';

const TagSelectionModal = ({
  visible,
  setVisible,
  customTags,
  campaignTags,
  voterTags,
  setTags,
}) => {
  const [type, setType] = useState('custom');

  const onPressToSetTags = item => {
    if (!voterTags.some(obj => obj?.tagName == item?.tagName)) {
      setTags([...voterTags, item]);
    } else {
      const updatedTags = voterTags.filter(
        obj => obj?.tagName != item?.tagName,
      );
      console.log('Remove ADDED');
      setTags([...updatedTags]);
    }
  };

  return (
    <ReactNativeModal
      isVisible={visible}
      style={styles.modalStyle}
      onBackdropPress={() => setVisible(false)}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text style={styles.btntxt}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.headertxt}>Tags</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text style={styles.btntxt}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectionbox}>
          <TouchableOpacity
            onPress={() => setType('custom')}
            style={[
              styles.selection,
              type == 'custom' && {borderBottomColor: COLORS.orangeReddish},
            ]}>
            <Text
              style={[
                styles.selectiontxt,
                type == 'custom' && {color: COLORS.orangeReddish},
              ]}>
              Custom Tags
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('tags')}
            style={[
              styles.selection,
              type == 'tags' && {borderBottomColor: COLORS.orangeReddish},
            ]}>
            <Text
              style={[
                styles.selectiontxt,
                type == 'tags' && {color: COLORS.orangeReddish},
              ]}>
              Campaign Tags
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={type == 'custom' ? customTags : campaignTags}
          keyExtractor={(item, index) => index.toString()}
          style={styles.tagview}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => onPressToSetTags(item)}
              style={styles.tagbox}>
              <Text style={styles.tagtxt}>{item.tagName}</Text>
              <View style={styles.dot(voterTags, item)}></View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ReactNativeModal>
  );
};

export default React.memo(TagSelectionModal);

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
    paddingVertical: 0,
    paddingHorizontal: wp(3),
  },
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: hp(2),
    borderRadius: wp(3),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    backgroundColor: COLORS.white,
    paddingBottom: hp(2),
  },
  crossicon: {
    width: wp(5),
    height: wp(5),
  },
  headertxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(15),
    lineHeight: normalize(15),
    color: COLORS.darkGray,
  },
  btntxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: COLORS.orangeReddish,
  },
  selectionbox: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginHorizontal: wp(4),
  },
  selection: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lavendarWhiteDark,
  },
  selectiontxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    color: COLORS.lavendarWhiteDark,
    marginBottom: hp(2),
  },
  tagview: {
    maxHeight: hp(40),
    marginVertical: hp(2),
  },
  tagbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lavendarWhiteDim,
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    paddingRight: wp(4),
  },
  tagtxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    color: COLORS.lavendarWhiteDark,
  },
  dot: (voterTags, item) => {
    return {
      width: wp(3),
      height: wp(3),
      borderRadius: wp(3) / 2,
      shadowColor: COLORS.lavendarWhiteDim,
      backgroundColor: voterTags?.some(obj => obj?.tagName == item?.tagName)
        ? COLORS.green
        : COLORS.lavendarWhite,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 5,
    };
  },
});
