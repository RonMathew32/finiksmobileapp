import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ElectionCard from '../../components/Home/ElectionCard';
import {hp} from '../../../utils/Constants';
import HomeHeader from '../../components/Home/HomeHeader';

const Home = () => {
  return (
    <SafeAreaView>
      <HomeHeader />
      <FlatList
        data={Array.from({length: 5})}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ElectionCard}
        ItemSeparatorComponent={<View style={{height: hp(2.5)}} />}
      />
      <ElectionCard />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
