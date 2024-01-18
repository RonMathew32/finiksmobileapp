import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  hp,
  normalize,
  wp,
} from '../../../theme/dimensions';
import { MontserratExtraBold,
  MontserratMedium,
  MontserratSemiBold } from '../../../theme/fonts'
import VoterTags from './VoterTags';
import ReactNativeModal from 'react-native-modal';

const VoterSurvey = ({data}) => {
  const [survey, setSurvey] = useState({});
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <FlatList
        style={{height: hp(54)}}
        contentContainerStyle={styles.flatlist}
        ListHeaderComponent={<VoterTags />}
        columnWrapperStyle={{columnGap: wp(1), marginTop: wp(1)}}
        ListHeaderComponentStyle={{marginBottom: hp(3)}}
        numColumns={2}
        data={data}
        renderItem={({item, inndex}) => (
          <TouchableOpacity
            onPress={() => {
              setSurvey(item);
              setVisible(true);
            }}
            style={{...styles.card, backgroundColor: item.color.code}}>
            <Text style={styles.cardtxt}>{item.surveyQuestion}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <SurveyModal visible={visible} setVisible={setVisible} survey={survey} />
    </View>
  );
};

const SurveyModal = ({visible, setVisible, survey}) => {
  return (
    <ReactNativeModal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      onBackButtonPress={() => setVisible(false)}
      style={{margin: 0, padding: 0}}>
      <View style={styles.modalbox}>
        <Text style={styles.heading}>{survey?.surveyName}</Text>
        <Text style={styles.surveyquestion}>{survey?.surveyQuestion}?</Text>
        <View style={styles.line} />
        <ScrollView>
          {survey?.surveyAnswers?.map((item, index) => (
            <TouchableOpacity key={index} style={styles.answerbox}>
              <Text style={styles.answertxt}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={styles.btnbox}>
          <Text style={styles.btntxt}>Save Answer</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
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
    flex: 1,
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
  modalbox: {
    backgroundColor: 'white',
    paddingVertical: hp(2),
  },
  heading: {
    fontFamily: MontserratMedium,
    fontSize: normalize(18),
    textAlign: 'center',
  },
  surveyquestion: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(20),
    color: '#D12E2F',
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#A6A6A630',
    marginVertical: hp(3),
  },
  answerbox: {
    marginVertical: hp(1),
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 3,
    borderRadius: wp(1),
  },
  answertxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(18),
    color: '#545454',
    marginVertical: hp(1),
  },
  btnbox: {
    marginTop: hp(4),
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D12E2F',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 3,
    borderRadius: wp(1),
  },
  btntxt: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(18),
    color: 'white',
    marginVertical: hp(1),
  },
});
