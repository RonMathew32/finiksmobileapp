import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {plusicon} from '../../../../utils/images';
import {MontserratMedium, hp, normalize, wp} from '../../../../utils/Constants';
import TagSelectionModal from '../../GlobalComponent/TagSelectionModal';

const tags = ['voter', 'Pro-Gun', 'VBM Reg'];

const VoterTags = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState([]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview} horizontal>
        {tags.map((item, index) => {
          return <Tags key={index} name={item} />;
        })}
      </ScrollView>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.plusbox}>
        <Image source={plusicon} style={styles.plusicon} resizeMode="contain" />
      </TouchableOpacity>
      <TagSelectionModal
        visible={visible}
        setVisible={setVisible}
        customTags={tags}
        campaignTags={tags}
      />
    </View>
  );
};

const Tags = ({name}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default VoterTags;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2.5),
  },
  scrollview: {
    flex: 1,
  },
  card: {
    backgroundColor: '#D12E2F',
    borderRadius: wp(7),
    marginRight: wp(3),
  },
  name: {
    fontFamily: MontserratMedium,
    fontSize: normalize(14),
    color: 'white',
    marginHorizontal: wp(5),
    marginVertical: hp(0.6),
  },
  plusbox: {
    backgroundColor: '#D12E2F',
    borderRadius: wp(10),
    width: wp(7),
    height: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusicon: {
    width: wp(4.3),
    height: wp(4.3),
    tintColor: 'white',
  },
});
