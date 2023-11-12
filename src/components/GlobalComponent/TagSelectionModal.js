import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ReactNativeModal from 'react-native-modal';
import {
  Montserrat,
  MontserratMedium,
  MontserratSemiBold,
  hp,
  normalize,
  wp,
} from '../../../utils/Constants';

const TagSelectionModal = ({
  visible,
  setVisible,
  customTags,
  campaignTags,
  tags,
  setTags,
}) => {
  const [type, setType] = useState('custom');
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
              type == 'custom' && {borderBottomColor: '#D12E2F'},
            ]}>
            <Text
              style={[
                styles.selectiontxt,
                type == 'custom' && {color: '#D12E2F'},
              ]}>
              Custom Tags
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setType('tags')}
            style={[
              styles.selection,
              type == 'tags' && {borderBottomColor: '#D12E2F'},
            ]}>
            <Text
              style={[
                styles.selectiontxt,
                type == 'tags' && {color: '#D12E2F'},
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
              onPress={() => setTags([...tags, item])}
              style={styles.tagbox}>
              <Text style={styles.tagtxt}>{item.tagName}</Text>
              <View style={styles.dot} />
            </TouchableOpacity>
          )}
        />
      </View>
    </ReactNativeModal>
  );
};

export default TagSelectionModal;

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
    paddingVertical: 0,
    paddingHorizontal: wp(3),
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: hp(2),
    borderRadius: wp(3),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    backgroundColor: 'white',
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
    color: '#545454',
  },
  btntxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: '#D12E2F',
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
    borderBottomColor: '#A6A6A6',
  },
  selectiontxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    color: '#A6A6A6',
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
    borderBottomColor: '#D9D9D9',
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    paddingRight: wp(4),
  },
  tagtxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    color: '#A6A6A6',
  },
  dot: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(3) / 2,
    backgroundColor: '#D9D9D9',
    shadowColor: '#D9D9D9',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 5,
  },
});
