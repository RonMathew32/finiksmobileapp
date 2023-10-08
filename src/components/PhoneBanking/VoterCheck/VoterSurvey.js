import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MontserratMedium, hp, normalize, wp} from '../../../../utils/Constants';
import VoterTags from './VoterTags';

const questions = [
  'Do you plan to vote in this next election?',
  'Are You Registered To Vote By Mail?',
  'Do You Support Hannah For Congress?',
  'What are the most important issues to you?',
  'Do You Support Hannah For Congress hh?',
  'Do You Support Hannah For Congress jhhhh?',
];

const VoterSurvey = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{height: hp(54)}}
        contentContainerStyle={styles.flatlist}
        ListHeaderComponent={<VoterTags />}
        columnWrapperStyle={{columnGap: wp(1), marginTop: wp(1)}}
        ListHeaderComponentStyle={{marginBottom: hp(3)}}
        numColumns={2}
        data={questions}
        renderItem={({item, inndex}) => (
          <View style={styles.card}>
            <Text style={styles.cardtxt}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default VoterSurvey;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  flatlist: {
    backgroundColor: '#00000029',
    paddingHorizontal: wp(4),
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF914D',
    borderRadius: wp(4),
  },
  cardtxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(24),
    color: 'white',
    textAlign: 'center',
    marginHorizontal: wp(4),
    marginVertical: hp(4),
  },
});
