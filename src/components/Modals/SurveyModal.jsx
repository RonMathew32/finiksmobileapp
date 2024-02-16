import React, { useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { hp, normalize, wp } from '../../theme/dimensions';
import { COLORS } from '../../theme/colors';
import { MontserratExtraBold, MontserratMedium, MontserratSemiBold } from '../../theme/fonts';
import AppButton from '../GlobalComponent/AppButton';

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
    borderWidth: 0.3, 
    borderColor: COLORS.lavendarWhite ,
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
        <AppButton 
        title='Save Answer'
        onPress={() => {
          onPressAnswer(selectedAnswer, survey?.surveyId), setVisible(false);
        }}
        style={styles.answerbox}
        />
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
    color: COLORS.primary,
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
    borderWidth: 0.3, 
    borderColor: COLORS.lavendarWhite 
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
    width: wp(70),
    borderRadius: 5,
  },
});

export default SurveyModal;
