import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { plusicon } from '../theme/images';
import { hp, normalize, wp } from '../theme/dimensions';
import { MontserratMedium } from '../theme/fonts';
import TagSelectionModal from './Modals/TagSelectionModal';
import { COLORS } from '../theme/colors';
import stylee from '../constants/stylee';

const VoterTags = ({ voterTags, campaignTags, customTags }) => {
  const [visible, setVisible] = useState(false);

  const renderTag = ({ item }) => (
    <Tags name={item?.tagName} />
  );

  return (
    <View style={[styles.container, stylee.alignR]}>
      <FlatList
        data={voterTags}
        renderItem={renderTag}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      {!voterTags?.length && (
        <View style={styles.addTagsPlaceholder}>
          <Text style={styles.placeholderText}>Add Tags</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => setVisible(true)} style={[styles.plusbox, stylee.alignJC]}>
        <Image source={plusicon} style={styles.plusicon} resizeMode="contain" />
      </TouchableOpacity>
      <TagSelectionModal
        visible={visible}
        setVisible={setVisible}
        customTags={customTags}
        campaignTags={campaignTags}
        voterTags={voterTags}
      />
    </View>
  );
};

const Tags = ({ name }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default VoterTags;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2.5),
  },
  addTagsPlaceholder: {
    width: wp(80),
    alignItems: 'center',
  },
  placeholderText: {
    color: COLORS.primary,
    fontSize: normalize(16),
  },
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: wp(7),
    marginRight: wp(3),
  },
  name: {
    fontFamily: MontserratMedium,
    fontSize: normalize(14),
    color: COLORS.white,
    marginHorizontal: wp(5),
    marginVertical: hp(0.6),
  },
  plusbox: {
    backgroundColor: COLORS.primary,
    borderRadius: wp(10),
    width: wp(7),
    height: wp(7),
  },
  plusicon: {
    width: wp(4.3),
    height: wp(4.3),
    tintColor: COLORS.white,
  },
});
