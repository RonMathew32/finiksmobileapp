import React, { useState, useCallback, memo } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { hp, normalize, wp } from '../../../theme/dimensions';
import { MontserratMedium } from '../../../theme/fonts';
import useReduxStore from '../../../hooks/useReduxStore';
import { COLORS } from '../../../theme/colors';
import { setSurveyList } from '../../../redux/actions/voters.actions';
import SurveyModal from '../../Modals/SurveyModal';

const VoterSurvey = ({ data }) => {
  const { currentVoter } = useReduxStore();
  const { dispatch } = useReduxStore();
  const [surveyItem, setSurveyItem] = useState({});
  const [visible, setVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const getSurveyData = useCallback(
    (val, targetSurveyId) => {
      const updatedData = data?.map(item => {
        if (item.surveyId === targetSurveyId) {
          return {
            ...item,
            voterAnswer: {
              surveyId: item?.surveyId,
              surveyQuestion: item?.surveyQuestion,
              surveyName: 'survey ',
              surveyPreview: 'survey preview',
              answer: val,
              voterId: currentVoter?._id,
              voterName: currentVoter?.FIRSTNAME,
              date: new Date(),
              time: new Date(),
            },
          };
        }
        return item;
      });
      const payload = {
        survey: {
          surveyQuestions: updatedData,
        },
      };
      dispatch(setSurveyList(payload));
    },
    [data, currentVoter, dispatch]
  );

  const renderItem = useCallback(
    ({ item, index }) => (
      <TouchableOpacity
        onPress={() => {
          setSurveyItem(item);
          setVisible(true);
        }}
        style={{
          ...styles.card,
          backgroundColor: item?.voterAnswer?.answer ? COLORS.lavendarWhiteDark : item?.color.code,
        }}
      >
        <Text style={styles.cardtxt}>{item?.surveyQuestion}</Text>
      </TouchableOpacity>
    ),
    []
  );

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainer}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <SurveyModal
        visible={visible}
        setVisible={setVisible}
        survey={surveyItem}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={val => setSelectedAnswer(val)}
        onPressAnswer={(val, id) => getSurveyData(val, id)}
      />
    </View>
  );
};

export default memo(VoterSurvey);

const styles = StyleSheet.create({
  container: {
    height: hp(55),
  },
  flatlist: {
    flex: 1,
    backgroundColor: '#00000029',
  },
  contentContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(3),
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF914D',
    borderRadius: wp(4),
    margin: wp(1),
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
