import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ElectionCard from '../../components/ElectionCard';
import {hp} from '../../theme/dimensions';
import HomeHeader from '../../components/Headers/HomeHeader';
import { COLORS } from '../../theme/colors';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <FlatList
        data={Array.from({length: 5})}
        style={styles.flatlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <ElectionCard />}
        ItemSeparatorComponent={<View style={{height: hp(2.5)}} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flatlist: {
    paddingTop: hp(3),
  },
});
