import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/colors';
import CampaignHeader from '../../components/Headers/CampaignHeader';
import {normalize, wp} from '../../theme/dimensions';
import ProfileView from '../../components/ProfileView';
import routes from '../../constants/routes';
import stylee from '../../constants/stylee';
import { districtList } from '../../constants/dummy';

const List = ({navigation}) => {

  const onPressToNavigate = ()=> navigation.navigate(routes?.CanvassMap)

  return (
    <SafeAreaView style={stylee.container}>
      <CampaignHeader
        enableBackButton={true}
        title="District 1 Canvassing 55+"
        textStyle={styles.title}
      />
      {districtList?.map((item, index) => (
        <ProfileView
          index={item?._id}
          canvass={true}
          textStyle={styles.txt}
          title={item?.title}
          num={item?.num}
          onPressToNavigate={onPressToNavigate}
        />
      ))}
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  txt: {fontSize: normalize(16), width: wp(60)},
  title: {fontSize: normalize(12)},
});
