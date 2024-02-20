import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import TotalVotersInfo from '../../components/TotalVotersInfo';
import SingleVoter from '../../components/SingleVoter';
import routes from '../../constants/routes';
import { COLORS } from '../../theme/colors';
import stylee from '../../constants/stylee';

const TotalVoters = ({navigation}) => {
  const onPressVoter = () => navigation.navigate(routes?.VoterDetails)
  const totalVotersData = [{
    id: 1,
    name: 'Ailbo Baggins',
    address: '1 Bag End, The Shire, Middle Earth',
    sex: 'F',
    age: 102,
    partyCode: 'Independent'

  },
  {
    id: 26,
    name: 'Zilbo Baggins',
    address: '1 Bag End, The Shire, Middle Earth',
    sex: 'F',
    age: 102,
    partyCode: 'Independent'

  },
  {
    id: 2,
    name: 'Bilbo Baggins',
    address: '1 Bag End, The Shire, Middle Earth',
    sex: 'F',
    age: 102,
    partyCode: 'Independent'
  },
]
  const [data, setData] = useState([...totalVotersData])

  return (
    <SafeAreaView style={stylee.container}>
      <TotalVotersInfo navigation={navigation} data={data} setData={setData}  totalVotersData={totalVotersData} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <SingleVoter onPressVoter={onPressVoter} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default TotalVoters;
