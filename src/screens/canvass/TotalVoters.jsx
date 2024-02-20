import {FlatList, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import TotalVotersInfo from '../../components/TotalVotersInfo';
import SingleVoter from '../../components/SingleVoter';
import routes from '../../constants/routes';
import stylee from '../../constants/stylee';
import { totalVotersData } from '../../constants/dummy';

const TotalVoters = ({navigation}) => {
  const onPressVoter = () => navigation.navigate(routes?.VoterDetails)
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
