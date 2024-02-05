import React, { useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { hp, normalize, wp } from '../../theme/dimensions';
import { COLORS } from '../../theme/colors';
import { MontserratExtraBold, MontserratMedium, MontserratSemiBold } from '../../theme/fonts';

const SurveyModal = ({
  visible,
  setVisible,
  survey,
  onPressAnswer,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  useEffect(() => {
    setSelectedAnswer(survey?.voterAnswer?.answer);
  }, [survey]);

  const onPressSelectAnswer = useCallback(
    (val) => {
      if (val === selectedAnswer) {
        setSelectedAnswer('');
      } else {
        setSelectedAnswer(val);
      }
    },
    [selectedAnswer, setSelectedAnswer]
  );

  const answerboxStyle = useMemo(() => (answer) => ({
    marginVertical: hp(1),
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: selectedAnswer === answer ? COLORS.orange : COLORS.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: wp(1),
  }), [selectedAnswer]);

  const answertxtStyle = useMemo(() => (item) => ({
    fontFamily: MontserratSemiBold,
    fontSize: normalize(18),
    color: selectedAnswer === item ? COLORS.white : COLORS.darkGray,
    marginVertical: hp(1),
  }), [selectedAnswer]);

  return (
    <ReactNativeModal
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      onBackButtonPress={() => setVisible(false)}
      style={{ margin: 0, padding: 0 }}
    >
      <View style={styles.modalbox}>
        <Text style={styles.heading}>{survey?.surveyName}</Text>
        <Text style={styles.surveyquestion}>{survey?.surveyQuestion}?</Text>
        <View style={styles.line} />
        <ScrollView>
          {survey?.surveyAnswers?.map((item, index) => (
            <TouchableOpacity
              onPress={() => onPressSelectAnswer(item)}
              key={index}
              style={answerboxStyle(item)}
            >
              <Text style={answertxtStyle(item)}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            onPressAnswer(selectedAnswer, survey?.surveyId), setVisible(false);
          }}
          style={styles.answerbox}
        >
          <Text style={styles.btntxt}>Save Answer</Text>
        </TouchableOpacity>
      </View>
    </ReactNativeModal>
  );
};

const textStyles = {
  heading: {
    fontFamily: MontserratMedium,
    fontSize: normalize(18),
    textAlign: 'center',
  },
  surveyquestion: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(20),
    color: COLORS.orangeReddish,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  btntxt: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(18),
    color: COLORS.white,
    marginVertical: hp(1),
  },
};

const styles = StyleSheet.create({
  modalbox: {
    backgroundColor: COLORS.white,
    paddingVertical: hp(2),
  },
  ...textStyles,
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#A6A6A630',
    marginVertical: hp(3),
  },
  answerbox: {
    marginTop: hp(4),
    width: '70%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.orangeReddish,
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
});

export default SurveyModal;
