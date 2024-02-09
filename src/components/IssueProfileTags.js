import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme/colors';
import { hp, normalize, wp } from '../theme/dimensions';
import { MontserratMedium } from '../theme/fonts';

const IssueProfileTags = () => {
  const dummyData = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
    { id: 5, name: 'Mango' },
    { id: 6, name: 'Strawberry' },
  ];

  const renderPair = (item1, item2) => (
    <View style={styles.pairContainer} key={item1.id + '_' + item2.id}>
      {renderItem(item1)}
      {renderItem(item2)}
    </View>
  );

  const renderItem = (item) => (
    <TouchableOpacity style={styles.card} key={item?.id}>
      <Text numberOfLines={1} style={styles.name}>
        {item?.name}
      </Text>
    </TouchableOpacity>
  );

  const pairs = [];
  for (let i = 0; i < dummyData?.length; i += 2) {
    const item1 = dummyData[i];
    const item2 = dummyData[i + 1];
    pairs.push(renderPair(item1, item2));
  }

  return <View style={styles.container}>{pairs}</View>;
};

export default IssueProfileTags;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  pairContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: wp(7),
    width: wp(35),
    alignItems: 'center',
    margin: 5,
  },
  name: {
    fontFamily: MontserratMedium,
    fontSize: normalize(14),
    color: COLORS.white,
    marginHorizontal: wp(5),
    marginVertical: hp(0.6),
  },
});
