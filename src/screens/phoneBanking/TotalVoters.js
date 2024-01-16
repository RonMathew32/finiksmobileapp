import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VotersHeader from '../../components/PhoneBanking/TotalVoters/VotersHeader';
import SingleVoter from '../../components/PhoneBanking/TotalVoters/SingleVoter';

const TotalVoters = () => {
  return (
    <SafeAreaView>
      <VotersHeader />
      <FlatList
        data={Array.from({length: 4})}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <SingleVoter />}
      />
    </SafeAreaView>
  );
};

export default TotalVoters;

const styles = StyleSheet.create({});
